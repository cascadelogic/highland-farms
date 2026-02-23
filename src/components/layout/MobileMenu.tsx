"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { mainNavItems } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-warm-white"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      ref={menuRef}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5">
          <Link href="/" onClick={onClose} className="inline-flex items-center gap-2">
            <Image
              src="/images/logo/HF-Lettermark.png"
              alt="Highland Farms"
              width={36}
              height={21}
              className="h-5 w-auto"
            />
            <span className="text-xs font-light tracking-[0.15em] uppercase font-sans">
              Highland Farms
            </span>
          </Link>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* CTAs at top */}
        <div className="px-6 pb-4 space-y-3">
          <Button href="/weddings" size="lg" className="w-full" onClick={onClose}>
            Begin Your Story
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="w-full" onClick={onClose}>
            Inquire
          </Button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-6 py-4" aria-label="Mobile navigation">
          <ul className="space-y-0.5">
            {mainNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-3 text-base font-light text-charcoal hover:text-forest transition-colors border-b border-cream-dark/30 font-sans"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={onClose}
                          className="block py-2.5 text-sm text-muted font-light hover:text-forest transition-colors font-sans"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact info */}
        <div className="border-t border-cream-dark/30 px-6 py-5 text-xs text-charcoal/70 font-light font-sans tracking-wide">
          <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="block hover:text-forest transition-colors">
            {CONTACT.phone}
          </a>
          <a href={`mailto:${CONTACT.email}`} className="block mt-1 hover:text-forest transition-colors">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  );
}
