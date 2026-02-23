"use client";

import { cn } from "@/lib/utils";

interface StickyMobileCTAProps {
  label: string;
  href: string;
  sublabel?: string;
  className?: string;
}

export function StickyMobileCTA({ label, href, sublabel, className }: StickyMobileCTAProps) {
  return (
    <div className={cn("fixed bottom-0 left-0 right-0 z-30 lg:hidden", className)}>
      <div className="bg-white border-t border-cream-dark px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full rounded-sm bg-forest py-3.5 text-base font-medium tracking-wide text-white transition-colors hover:bg-forest-light"
        >
          {label}
          {sublabel && (
            <span className="text-sm text-white/80">{sublabel}</span>
          )}
        </a>
      </div>
    </div>
  );
}
