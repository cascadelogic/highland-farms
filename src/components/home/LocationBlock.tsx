import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CONTACT } from "@/lib/constants";

export function LocationBlock() {
  return (
    <section className="py-20 bg-cream/40">
      <Container className="text-center">
        <div className="flex items-center justify-center gap-2 text-sage mb-4">
          <MapPin className="h-4 w-4" />
          <p className="text-xs font-light uppercase tracking-[0.2em] font-sans">
            Location
          </p>
        </div>

        <p className="font-display text-2xl font-normal text-charcoal sm:text-3xl">
          {CONTACT.coordinates.lat}° N, {Math.abs(CONTACT.coordinates.lng)}° W
        </p>

        <p className="mt-4 text-sm text-muted font-sans font-light">
          {CONTACT.fullAddress}
        </p>
        <p className="mt-1 text-xs text-muted/80 font-sans font-light tracking-wide">
          50 minutes from Portland &middot; 20 minutes from Mt. Hood
        </p>
      </Container>
    </section>
  );
}
