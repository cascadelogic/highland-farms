import Link from "next/link";
import Image from "next/image";
import { Instagram, Phone, Mail, MapPin, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CONTACT, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/images/logo/HF-logo-white.png"
                alt="Highland Farms"
                width={40}
                height={24}
                className="h-6 w-auto"
              />
              <span className="font-display text-2xl font-semibold tracking-wide">
                Highland Farms
              </span>
            </Link>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              {SITE.description}
            </p>
            {/* Google Reviews */}
            <a
              href="https://share.google/jrLOI4AhnpzbPPBpF"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                ))}
              </div>
              <span>4.9 on Google (146+ reviews)</span>
            </a>
            {/* Travel Oregon */}
            <a
              href="https://traveloregon.com/plan-your-trip/places-to-stay/farm-ranch-stays/highland-farms/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-xs text-white/50 hover:text-white/70 transition-colors"
            >
              Featured on Travel Oregon
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4 font-sans">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Weddings", href: "/weddings" },
                { label: "Farm Tours", href: "/farm-tours" },
                { label: "Nordic Spa", href: "/nordic-spa" },
                { label: "Stay With Us", href: "/stay" },
                { label: "Celebrations", href: "/celebrations" },
                { label: "About", href: "/about" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4 font-sans">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phoneAlt.replace(/[^\d+]/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {CONTACT.phoneAlt}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-white/70">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>{CONTACT.fullAddress}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4 font-sans">
              Follow Us
            </h3>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
              {CONTACT.instagramHandle}
            </a>

            <div className="mt-8 space-y-2">
              <Link href="/privacy" className="block text-xs text-white/40 hover:text-white/70 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-xs text-white/40 hover:text-white/70 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Highland Farms Oregon. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
