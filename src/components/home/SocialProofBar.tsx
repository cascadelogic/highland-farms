import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function SocialProofBar() {
  return (
    <section className="bg-cream py-6">
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10 text-charcoal">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-medium font-sans">5.0 Rating</span>
          </div>

          <div className="hidden sm:block h-4 w-px bg-charcoal/20" />

          {/* Stat */}
          <p className="text-sm font-medium font-sans">
            Trusted by 50+ Couples
          </p>

          <div className="hidden sm:block h-4 w-px bg-charcoal/20" />

          {/* Location */}
          <p className="text-sm font-medium font-sans">
            50 min from Portland &middot; 20 min from Mt. Hood
          </p>
        </div>
      </Container>
    </section>
  );
}
