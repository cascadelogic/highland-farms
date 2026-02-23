"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Instagram, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNavItems } from "@/data/navigation";
import { CONTACT } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";
import { AnnouncementBar } from "./AnnouncementBar";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keep a CSS variable on <html> with the header height so pages can use it for top padding
  useEffect(() => {
    function updateHeight() {
      if (headerRef.current) {
        const h = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty("--header-h", `${h}px`);
      }
    }
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={headerRef} className="fixed top-0 left-0 right-0 z-40">
        {/* Announcement bar — sits above the nav */}
        <AnnouncementBar />

        {/* Navigation bar */}
        <header
          className={cn(
            "transition-all duration-300",
            scrolled
              ? "bg-white/95 backdrop-blur-md shadow-sm"
              : "bg-charcoal/60 backdrop-blur-sm"
          )}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-18 items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
              >
                <Image
                  src="/images/logo/HF-logo-white.png"
                  alt="Highland Farms"
                  width={48}
                  height={28}
                  className={cn(
                    "h-7 w-auto transition-all duration-300",
                    scrolled ? "brightness-0 opacity-80" : ""
                  )}
                  priority
                />
                <span
                  className={cn(
                    "font-display text-lg font-semibold tracking-wide transition-colors hidden sm:inline",
                    scrolled ? "text-charcoal" : "text-white"
                  )}
                >
                  Highland Farms
                </span>
              </Link>

              {/* Desktop nav */}
              <nav className="hidden lg:flex items-center gap-1">
                {mainNavItems.map((item) => (
                  <div key={item.href} className="relative group">
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide transition-colors",
                        scrolled
                          ? "text-charcoal hover:text-forest"
                          : "text-white/90 hover:text-white"
                      )}
                    >
                      {item.label}
                      {item.children && <ChevronDown className="h-3.5 w-3.5" />}
                    </Link>

                    {/* Dropdown */}
                    {item.children && (
                      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="bg-white rounded-md shadow-lg border border-cream-light py-2 min-w-[180px]">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-charcoal hover:bg-cream-light hover:text-forest transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Instagram */}
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "ml-2 p-2 transition-colors",
                    scrolled
                      ? "text-charcoal hover:text-forest"
                      : "text-white/90 hover:text-white"
                  )}
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-4.5 w-4.5" />
                </a>

                {/* CTA */}
                <Link
                  href="/weddings"
                  className="ml-3 inline-flex items-center justify-center rounded-sm bg-forest px-5 py-2.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-forest-light"
                >
                  Plan Your Wedding
                </Link>
              </nav>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className={cn(
                  "lg:hidden p-2 transition-colors",
                  scrolled ? "text-charcoal" : "text-white"
                )}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </header>
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
