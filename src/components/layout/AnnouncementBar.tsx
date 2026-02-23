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
    <div className="relative bg-forest text-white text-center text-sm py-2.5 px-10">
      <p className="font-medium tracking-wide font-sans">
        All-Inclusive Farm &amp; Forest Weddings — Dates Going Fast.{" "}
        <Link href="/weddings" className="underline underline-offset-2 hover:opacity-80">
          Learn More
        </Link>
      </p>
      <button
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
        aria-label="Dismiss announcement"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
