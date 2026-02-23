import { z } from "zod";

export const inquirySchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  event_type: z.string().min(1, "Please select an event type"),
  preferred_date: z.string().optional(),
  message: z.string().min(10, "Please tell us a bit more about your event"),
});

export type InquiryFormData = z.infer<typeof inquirySchema>;
