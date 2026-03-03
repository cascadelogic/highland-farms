/**
 * GA4 Measurement Protocol — server-side event tracking.
 *
 * Sends events directly to GA4 from the Next.js API route, bypassing ad
 * blockers and client-side consent gates. Stitches to the browser session
 * by reading the _ga / _ga_XXXX cookies forwarded with the request.
 *
 * Deduplication: pass event_id matching the value pushed to window.dataLayer
 * so a single form submission doesn't count twice when both paths fire.
 *
 * Docs: https://developers.google.com/analytics/devguides/collection/protocol/ga4
 */

const MP_ENDPOINT = "https://www.google-analytics.com/mp/collect";

// Parse _ga cookie → client_id (format: GA1.1.<client_id_a>.<client_id_b>)
function getClientId(cookieHeader: string | null): string {
  if (cookieHeader) {
    const m = cookieHeader.match(/_ga=GA[\d.]+\.(\d+\.\d+)/);
    if (m) return m[1];
  }
  // Ephemeral fallback — won't stitch to browser session but still counts
  return `${Date.now()}.${Math.floor(Math.random() * 1e9)}`;
}

// Parse _ga_<KEY> session cookie → session_id
function getSessionId(cookieHeader: string | null, measurementId: string): string | undefined {
  if (!cookieHeader) return undefined;
  const key = measurementId.replace(/^G-/, "");
  const m = cookieHeader.match(new RegExp(`_ga_${key}=GS[\\d.]+\\.(\\d+)`));
  return m ? m[1] : undefined;
}

export interface GA4LeadEventParams {
  event_type: string;
  form_name: string;
  /** Matches the event_id pushed to window.dataLayer — prevents double-counting */
  event_id?: string;
}

export async function sendGenerateLead(
  cookieHeader: string | null,
  params: GA4LeadEventParams,
): Promise<void> {
  const measurementId = process.env.GA4_MEASUREMENT_ID;
  const apiSecret = process.env.GA4_API_SECRET;
  if (!measurementId || !apiSecret) return;

  const clientId = getClientId(cookieHeader);
  const sessionId = getSessionId(cookieHeader, measurementId);

  const payload = {
    client_id: clientId,
    events: [
      {
        name: "generate_lead",
        params: {
          event_type: params.event_type,
          form_name: params.form_name,
          engagement_time_msec: 1,
          ...(params.event_id && { event_id: params.event_id }),
          ...(sessionId && { session_id: sessionId }),
        },
      },
    ],
  };

  try {
    const res = await fetch(
      `${MP_ENDPOINT}?measurement_id=${measurementId}&api_secret=${apiSecret}`,
      { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) },
    );
    if (!res.ok) console.error("GA4 MP error:", res.status, await res.text());
  } catch (err) {
    console.error("GA4 MP send error:", err);
  }
}
