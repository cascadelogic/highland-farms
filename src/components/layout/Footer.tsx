import Link from "next/link";
import Image from "next/image";
import { Instagram, Phone, Mail, MapPin, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CONTACT, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/images/logo/HF-logo-white.png"
                alt="Highland Farms"
                width={36}
                height={21}
                className="h-5 w-auto opacity-80"
              />
              <span className="text-xs font-light tracking-[0.15em] uppercase text-white/70 font-sans">
                Highland Farms
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/65 leading-relaxed font-light font-sans">
              {SITE.description}
            </p>
            {/* Google Reviews */}
            <a
              href="https://share.google/jrLOI4AhnpzbPPBpF"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs text-white/65 hover:text-white/70 transition-colors font-sans"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-gold/70 text-gold/70" />
                ))}
              </div>
              <span>4.9 on Google</span>
            </a>
            <a
              href="https://traveloregon.com/plan-your-trip/places-to-stay/farm-ranch-stays/highland-farms/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-xs text-white/55 hover:text-white/55 transition-colors font-sans font-light"
            >
              Featured on Travel Oregon
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-light uppercase tracking-[0.15em] text-white/55 mb-5 font-sans">
              Explore
            </h3>
            <ul className="space-y-3">
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
                    className="text-sm text-white/65 hover:text-white/80 transition-colors font-light font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-light uppercase tracking-[0.15em] text-white/55 mb-5 font-sans">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-white/65 hover:text-white/80 transition-colors font-light font-sans"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 opacity-65" />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phoneAlt.replace(/[^\d+]/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-white/65 hover:text-white/80 transition-colors font-light font-sans"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 opacity-65" />
                  {CONTACT.phoneAlt}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2.5 text-sm text-white/65 hover:text-white/80 transition-colors font-light font-sans"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 opacity-65" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-white/65 font-light font-sans">
                  <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5 opacity-65" />
                  <span>{CONTACT.fullAddress}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-xs font-light uppercase tracking-[0.15em] text-white/55 mb-5 font-sans">
              Follow Us
            </h3>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/65 hover:text-white/80 transition-colors font-light font-sans"
            >
              <Instagram className="h-4 w-4" />
              {CONTACT.instagramHandle}
            </a>

            <div className="mt-8 space-y-2">
              <Link href="/privacy" className="block text-xs text-white/50 hover:text-white/65 transition-colors font-light font-sans">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-xs text-white/50 hover:text-white/65 transition-colors font-light font-sans">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-white/50 font-light font-sans">
          <p>&copy; {new Date().getFullYear()} Highland Farms Oregon. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
