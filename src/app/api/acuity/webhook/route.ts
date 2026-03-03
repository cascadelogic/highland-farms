import { NextResponse } from "next/server";
import { sendBookingPurchase } from "@/lib/ga4";

/**
 * Acuity Scheduling webhook handler.
 *
 * Fires a GA4 `purchase` event via Measurement Protocol whenever an
 * appointment is booked or rescheduled on highlandfarms.as.me.
 *
 * Security: Acuity POSTs to the URL with a `secret` query parameter
 * that only we know. Register the full URL (with secret) in Acuity.
 *
 * Events tracked:
 *   - appointment.scheduled   → farm_tour | nordic_spa | wedding_call
 *   - appointment.rescheduled → same mapping (value may differ)
 *
 * Calendar ID → booking type mapping (from Acuity calendars):
 *   7539520  → Farm Tours
 *   13047082 → Nordic Spa
 *   12109481 → Wedding Call
 */

const CALENDAR_TYPE: Record<number, string> = {
  7539520: "farm_tour",
  13047082: "nordic_spa",
  12109481: "wedding_call",
};

const CALENDAR_CATEGORY: Record<number, string> = {
  7539520: "Farm Tour",
  13047082: "Nordic Spa",
  12109481: "Wedding Call",
};

export async function POST(request: Request) {
  // Validate secret token — only accept requests from Acuity
  const { searchParams } = new URL(request.url);
  if (searchParams.get("secret") !== process.env.ACUITY_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Only track scheduled / rescheduled — ignore cancellations and changes
  const action = String(body.action ?? "");
  if (!action.includes("scheduled")) {
    return NextResponse.json({ ok: true });
  }

  try {
    const id = body.id as number;
    const appointmentTypeID = body.appointmentTypeID as number;
    const calendarID = body.calendarID as number;
    const appointmentTypeName = body.type as string | undefined;

    // amountPaid is the actual collected amount; fall back through priceSold → price
    const rawAmount = (body.amountPaid ?? body.priceSold ?? body.price ?? "0") as string;
    const value = parseFloat(rawAmount) || 0;

    const bookingType = CALENDAR_TYPE[calendarID] ?? "other";
    const category = CALENDAR_CATEGORY[calendarID] ?? "Other";
    const itemName = appointmentTypeName ?? category;

    await sendBookingPurchase({
      transaction_id: `acuity_${id}`,
      value,
      currency: "USD",
      booking_type: bookingType,
      appointment_type: appointmentTypeName,
      items: [
        {
          item_id: String(appointmentTypeID),
          item_name: itemName,
          price: value,
          quantity: 1,
          item_category: category,
        },
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Acuity webhook processing error:", err);
    // Return 200 to prevent Acuity from retrying on internal errors
    return NextResponse.json({ ok: true });
  }
}
