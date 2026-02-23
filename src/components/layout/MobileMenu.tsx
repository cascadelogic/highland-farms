"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { mainNavItems } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-warm-white">
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5">
          <Link href="/" onClick={onClose} className="font-display text-xl font-semibold tracking-wide">
            Highland Farms
          </Link>
          <button
            onClick={onClose}
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* CTAs at top for conversion */}
        <div className="px-6 pb-4 space-y-3">
          <Button href="/weddings" size="lg" className="w-full" onClick={onClose}>
            Plan Your Wedding
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="w-full" onClick={onClose}>
            Contact Us
          </Button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-6 py-4">
          <ul className="space-y-1">
            {mainNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-3 text-lg font-medium text-charcoal hover:text-forest transition-colors border-b border-cream-light"
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
                          className="block py-2.5 text-base text-muted hover:text-forest transition-colors"
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
        <div className="border-t border-cream-light px-6 py-5 text-sm text-muted">
          <p>{CONTACT.phone}</p>
          <p>{CONTACT.email}</p>
        </div>
      </div>
    </div>
  );
}
