"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { inquirySchema, type InquiryFormData } from "@/lib/schemas";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  defaultEventType?: string;
  className?: string;
  heading?: string;
  subtitle?: string;
}

export function ContactForm({
  defaultEventType = "",
  className,
  heading = "Get Your Custom Quote",
  subtitle = "Tell us about your vision and we'll create a personalized package.",
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      event_type: defaultEventType,
    },
  });

  async function onSubmit(data: InquiryFormData) {
    setStatus("submitting");
    setServerError("");

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Submission failed");
      }

      setStatus("success");
      reset();

      // Push conversion event to GTM dataLayer
      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "form_submission",
          form_name: "event_inquiry",
          event_type: data.event_type,
        });
      }
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className={cn("rounded-sm bg-forest/5 border border-forest/20 p-8 text-center", className)}>
        <CheckCircle className="mx-auto h-12 w-12 text-forest" />
        <h3 className="mt-4 text-xl font-medium text-charcoal">
          Thank You!
        </h3>
        <p className="mt-2 text-base text-muted font-sans">
          We&apos;ve received your inquiry and will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-forest hover:text-forest-light transition-colors font-sans"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className={className}>
      {heading && (
        <div className="mb-8">
          <h3 className="text-2xl font-medium text-charcoal">{heading}</h3>
          {subtitle && (
            <p className="mt-2 text-sm text-muted font-sans">{subtitle}</p>
          )}
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 flex items-center gap-2 rounded-sm bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 font-sans">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {serverError || "Something went wrong. Please try again."}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="form-name" className="block text-sm font-medium text-charcoal mb-1.5 font-sans">
              Your Name *
            </label>
            <input
              type="text"
              id="form-name"
              {...register("name")}
              className={cn(
                "w-full rounded-sm border bg-white px-4 py-3 text-sm font-sans text-charcoal placeholder:text-muted/60 focus:outline-none focus:ring-1",
                errors.name
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                  : "border-cream-dark focus:border-forest focus:ring-forest"
              )}
              placeholder="First & Last Name"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600 font-sans">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="form-email" className="block text-sm font-medium text-charcoal mb-1.5 font-sans">
              Email Address *
            </label>
            <input
              type="email"
              id="form-email"
              {...register("email")}
              className={cn(
                "w-full rounded-sm border bg-white px-4 py-3 text-sm font-sans text-charcoal placeholder:text-muted/60 focus:outline-none focus:ring-1",
                errors.email
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                  : "border-cream-dark focus:border-forest focus:ring-forest"
              )}
              placeholder="you@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600 font-sans">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="form-phone" className="block text-sm font-medium text-charcoal mb-1.5 font-sans">
              Phone (optional)
            </label>
            <input
              type="tel"
              id="form-phone"
              {...register("phone")}
              className="w-full rounded-sm border border-cream-dark bg-white px-4 py-3 text-sm font-sans text-charcoal placeholder:text-muted/60 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label htmlFor="form-event-type" className="block text-sm font-medium text-charcoal mb-1.5 font-sans">
              Event Type *
            </label>
            <select
              id="form-event-type"
              {...register("event_type")}
              className={cn(
                "w-full rounded-sm border bg-white px-4 py-3 text-sm font-sans text-charcoal focus:outline-none focus:ring-1",
                errors.event_type
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                  : "border-cream-dark focus:border-forest focus:ring-forest"
              )}
            >
              <option value="">Select an event type</option>
              <option value="wedding">Wedding</option>
              <option value="elopement">Elopement</option>
              <option value="celebration">Celebration</option>
              <option value="retreat">Retreat</option>
              <option value="photoshoot">Photoshoot</option>
              <option value="farm-stay">Farm Stay</option>
              <option value="other">Other</option>
            </select>
            {errors.event_type && (
              <p className="mt-1 text-xs text-red-600 font-sans">{errors.event_type.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="form-date" className="block text-sm font-medium text-charcoal mb-1.5 font-sans">
            Preferred Date (optional)
          </label>
          <input
            type="date"
            id="form-date"
            {...register("preferred_date")}
            className="w-full rounded-sm border border-cream-dark bg-white px-4 py-3 text-sm font-sans text-charcoal focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
          />
        </div>

        <div>
          <label htmlFor="form-message" className="block text-sm font-medium text-charcoal mb-1.5 font-sans">
            Tell Us About Your Vision *
          </label>
          <textarea
            id="form-message"
            {...register("message")}
            rows={4}
            className={cn(
              "w-full rounded-sm border bg-white px-4 py-3 text-sm font-sans text-charcoal placeholder:text-muted/60 focus:outline-none focus:ring-1 resize-none",
              errors.message
                ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                : "border-cream-dark focus:border-forest focus:ring-forest"
            )}
            placeholder="Share your dream event details..."
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-600 font-sans">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-sm bg-forest px-6 py-3.5 text-base font-medium tracking-wide text-white transition-colors hover:bg-forest-light disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Get Your Custom Quote"
          )}
        </button>

        <p className="text-center text-xs text-muted font-sans">
          We typically respond within 24 hours.
        </p>
      </form>
    </div>
  );
}

// Extend Window for dataLayer
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}
