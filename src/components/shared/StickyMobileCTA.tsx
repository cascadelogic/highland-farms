"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface StickyMobileCTAProps {
  label: string;
  href: string;
  sublabel?: string;
  className?: string;
  external?: boolean;
}

export function StickyMobileCTA({ label, href, sublabel, className, external }: StickyMobileCTAProps) {
  const linkClasses =
    "flex items-center justify-center gap-2 w-full rounded-sm bg-forest py-3.5 text-base font-medium tracking-wide text-white transition-colors hover:bg-forest-light active:bg-forest-light";

  return (
    <div className={cn("fixed bottom-0 left-0 right-0 z-30 lg:hidden", className)}>
      <div className="bg-white border-t border-cream-dark px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        {external ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            {label}
            {sublabel && (
              <span className="text-sm text-white/80">{sublabel}</span>
            )}
          </a>
        ) : (
          <Link href={href} className={linkClasses}>
            {label}
            {sublabel && (
              <span className="text-sm text-white/80">{sublabel}</span>
            )}
          </Link>
        )}
      </div>
    </div>
  );
}
