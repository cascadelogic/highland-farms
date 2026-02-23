import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  event_type: z.string().min(1, "Please select an event type"),
  guest_count: z.string().optional(),
  preferred_date: z.string().optional(),
  referral_source: z.string().optional(),
  message: z.string().optional(),
});

export type InquiryFormData = z.infer<typeof inquirySchema>;
