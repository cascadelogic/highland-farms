"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const STORAGE_KEYS = {
  subscribed: "hf-email-subscribed",
  dismissed: "hf-email-dismissed",
  pageviews: "hf-email-pageviews",
} as const;

const DISMISS_DAYS = 30;
const TRIGGER_DELAY_MS = 45_000;
const MIN_PAGEVIEWS = 2;

export function EmailPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const loadTime = useRef(Date.now());
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerFired = useRef(false);

  const show = useCallback(() => {
    if (triggerFired.current) return;
    triggerFired.current = true;

    // Don't show if cookie consent banner is visible
    const consentKey = localStorage.getItem("hf-cookie-consent");
    if (!consentKey) {
      // Cookie consent hasn't been answered yet — wait and retry
      const retryTimer = setTimeout(() => {
        triggerFired.current = false;
        show();
      }, 5000);
      return () => clearTimeout(retryTimer);
    }

    setVisible(true);
  }, []);

  useEffect(() => {
    // Already subscribed — never show
    if (localStorage.getItem(STORAGE_KEYS.subscribed)) return;

    // Recently dismissed — check expiry
    const dismissedAt = localStorage.getItem(STORAGE_KEYS.dismissed);
    if (dismissedAt) {
      const elapsed = Date.now() - Number(dismissedAt);
      if (elapsed < DISMISS_DAYS * 24 * 60 * 60 * 1000) return;
      localStorage.removeItem(STORAGE_KEYS.dismissed);
    }

    // Track page views
    const views = Number(localStorage.getItem(STORAGE_KEYS.pageviews) || "0") + 1;
    localStorage.setItem(STORAGE_KEYS.pageviews, String(views));

    const hasEnoughViews = views >= MIN_PAGEVIEWS;

    // Timer trigger (45s)
    const timer = setTimeout(() => {
      show();
    }, TRIGGER_DELAY_MS);

    // Exit intent on desktop (mouseleave on top of viewport)
    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0 && hasEnoughViews) {
        show();
      }
    }

    // Only add exit intent if not a touch device
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (!isTouch) {
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    // If enough views, also allow showing earlier via exit intent
    // Timer always runs as fallback

    return () => {
      clearTimeout(timer);
      if (!isTouch) {
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [show]);

  // Focus trap + escape key
  useEffect(() => {
    if (!visible) return;

    // Focus close button when modal opens
    closeButtonRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        dismiss();
        return;
      }

      if (e.key === "Tab") {
        const dialog = dialogRef.current;
        if (!dialog) return;

        const focusable = dialog.querySelectorAll<HTMLElement>(
          'button, input, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [visible]);

  function dismiss() {
    setVisible(false);
    localStorage.setItem(STORAGE_KEYS.dismissed, String(Date.now()));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          phone: phone || undefined,
          website: honeypot || undefined,
          _t: loadTime.current,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to subscribe");
      }

      setStatus("success");
      localStorage.setItem(STORAGE_KEYS.subscribed, "true");
      localStorage.removeItem(STORAGE_KEYS.pageviews);

      // Fire GTM event
      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "email_subscribe",
          method: "popup",
        });
      }

      // Auto-close after 3 seconds
      setTimeout(() => setVisible(false), 3000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9990] flex items-center justify-center px-4 animate-[fade-in_0.2s_ease-out]"
      onClick={(e) => {
        if (e.target === e.currentTarget) dismiss();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />

      {/* Modal */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Stay connected with the farm"
        className="relative w-full max-w-md rounded-2xl bg-warm-white p-6 shadow-xl sm:p-8 animate-[popup-slide-up_0.3s_ease-out]"
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={dismiss}
          aria-label="Close popup"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-cream hover:text-charcoal"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {status === "success" ? (
          <div className="py-4 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-forest/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 13l4 4L19 7" stroke="var(--forest)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-display text-xl text-charcoal">You&apos;re on the list!</h3>
            <p className="mt-1 text-sm text-muted font-sans">
              We&apos;ll keep you in the loop on all things Highland Farms.
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-display text-2xl text-charcoal sm:text-[1.7rem]">
              Stay Connected with the Farm
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted font-sans">
              Be the first to know about new experiences, seasonal availability, and farm happenings.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              {/* Honeypot — hidden from real users */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

              <div>
                <label htmlFor="popup-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="popup-email"
                  type="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-cream-dark bg-white px-4 py-3 text-sm text-charcoal placeholder:text-muted/60 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest font-sans"
                />
              </div>

              <div>
                <label htmlFor="popup-phone" className="sr-only">
                  Phone number (optional)
                </label>
                <input
                  id="popup-phone"
                  type="tel"
                  placeholder="Phone (optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border border-cream-dark bg-white px-4 py-3 text-sm text-charcoal placeholder:text-muted/60 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest font-sans"
                />
              </div>

              {errorMsg && (
                <p className="text-sm text-red-600 font-sans" role="alert">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-lg bg-forest py-3 text-sm font-medium text-white transition-colors hover:bg-forest-light disabled:opacity-60 font-sans"
              >
                {status === "submitting" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>

            <p className="mt-3 text-center text-xs text-muted/70 font-sans">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

// Extend Window for GTM dataLayer
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}
