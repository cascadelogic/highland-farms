import { type InquiryFormData } from "@/lib/schemas";

const API = "https://api.hubapi.com";

// Association type ID 202 = note → contact (HubSpot defined)
const NOTE_TO_CONTACT_TYPE_ID = 202;

export async function syncInquiryToHubSpot(data: InquiryFormData): Promise<void> {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) return;

  const [firstname, ...rest] = data.name.trim().split(/\s+/);
  const lastname = rest.join(" ");

  const properties: Record<string, string> = {
    email: data.email,
    firstname,
    ...(lastname && { lastname }),
    ...(data.phone && { phone: data.phone }),
  };

  // Create contact; on 409 (already exists) fetch existing ID instead
  let contactId: string | undefined;

  const createRes = await fetch(`${API}/crm/v3/objects/contacts`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ properties }),
  });

  if (createRes.ok) {
    const body = await createRes.json();
    contactId = body.id;
  } else if (createRes.status === 409) {
    const getRes = await fetch(
      `${API}/crm/v3/objects/contacts/${encodeURIComponent(data.email)}?idProperty=email`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (getRes.ok) {
      const body = await getRes.json();
      contactId = body.id;
    }
  }

  if (!contactId) return;

  // Add a note with full inquiry details
  const noteLines = [
    `Event Type: ${data.event_type}`,
    data.guest_count ? `Guest Count: ${data.guest_count}` : null,
    data.preferred_date ? `Preferred Date: ${data.preferred_date}` : null,
    data.referral_source ? `Referral Source: ${data.referral_source}` : null,
    data.message ? `\nMessage:\n${data.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  await fetch(`${API}/crm/v3/objects/notes`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      properties: {
        hs_note_body: `Highland Farms inquiry from website:\n\n${noteLines}`,
        hs_timestamp: new Date().toISOString(),
      },
      associations: [
        {
          to: { id: contactId },
          types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: NOTE_TO_CONTACT_TYPE_ID }],
        },
      ],
    }),
  });
}
