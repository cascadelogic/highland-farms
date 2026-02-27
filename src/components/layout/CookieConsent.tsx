"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "hf-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Small delay so it doesn't flash on initial load
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
    // Load GTM now that user has consented
    window.dispatchEvent(new Event("cookie-consent-accepted"));
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[9999] border-t border-cream-dark bg-white px-4 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:px-6 animate-[slide-up_0.3s_ease-out]"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-charcoal font-sans leading-relaxed">
          We use cookies to improve your experience and analyze site traffic.
          See our{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-2 text-forest hover:text-forest-light transition-colors"
          >
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={decline}
            className="rounded-full border border-cream-dark px-4 py-2 text-sm font-light text-charcoal hover:bg-cream transition-colors font-sans"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="rounded-full bg-forest px-5 py-2 text-sm font-medium text-white hover:bg-forest-light transition-colors font-sans"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

/** Check if user has accepted cookies (for use in other components) */
export function hasConsentedToCookies(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(CONSENT_KEY) === "accepted";
}
