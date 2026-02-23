import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CONTACT } from "@/lib/constants";

export function LocationBlock() {
  return (
    <section className="py-16 bg-cream">
      <Container className="text-center">
        <div className="flex items-center justify-center gap-2 text-muted mb-4">
          <MapPin className="h-4 w-4" />
          <p className="text-sm font-medium uppercase tracking-widest font-sans">
            Location
          </p>
        </div>

        <p className="font-display text-3xl font-medium text-charcoal sm:text-4xl">
          {CONTACT.coordinates.lat}° N, {Math.abs(CONTACT.coordinates.lng)}° W
        </p>

        <p className="mt-4 text-base text-muted font-sans">
          {CONTACT.fullAddress}
        </p>
        <p className="mt-1 text-sm text-muted font-sans">
          50 minutes from Portland &middot; 20 minutes from Mt. Hood
        </p>
      </Container>
    </section>
  );
}
