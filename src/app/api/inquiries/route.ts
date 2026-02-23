import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { inquirySchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate
    const result = inquirySchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, phone, event_type, guest_count, preferred_date, referral_source, message } = result.data;

    // Insert into Supabase
    const { error } = await supabase.from("event_inquiries").insert({
      name,
      email,
      phone: phone || null,
      event_type,
      guest_count: guest_count || null,
      preferred_date: preferred_date || null,
      referral_source: referral_source || null,
      message: message || null,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to submit inquiry. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
