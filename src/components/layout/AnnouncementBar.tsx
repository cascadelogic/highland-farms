"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("hf-announcement-dismissed");
    if (!dismissed) setVisible(true);
  }, []);

  function dismiss() {
    setVisible(false);
    localStorage.setItem("hf-announcement-dismissed", "true");
  }

  if (!visible) return null;

  return (
    <div className="relative bg-charcoal/90 backdrop-blur-sm text-white text-center text-xs py-2.5 px-10">
      <p className="font-light tracking-[0.15em] uppercase font-sans">
        Intimate Forest Weddings &middot; Now Booking 2026{" "}
        <Link href="/weddings" className="underline underline-offset-4 decoration-gold/70 hover:decoration-gold transition-colors ml-1">
          Inquire
        </Link>
      </p>
      <button
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
        aria-label="Dismiss announcement"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
