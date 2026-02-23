import { Star, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function SocialProofBar() {
  return (
    <section className="bg-warm-white py-5 border-b border-cream-light/50">
      <Container>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8 text-charcoal/75">
          {/* Google Rating */}
          <a
            href="https://share.google/jrLOI4AhnpzbPPBpF"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-charcoal transition-colors"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-xs font-light tracking-wide font-sans">
              4.9 on Google &middot; 146+ reviews
            </span>
          </a>

          <div className="hidden sm:block h-3 w-px bg-charcoal/10" />

          {/* Travel Oregon */}
          <a
            href="https://traveloregon.com/plan-your-trip/places-to-stay/farm-ranch-stays/highland-farms/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-light tracking-wide font-sans hover:text-charcoal transition-colors"
          >
            Featured on Travel Oregon
            <ExternalLink className="h-2.5 w-2.5" />
          </a>

          <div className="hidden sm:block h-3 w-px bg-charcoal/10" />

          {/* Location */}
          <p className="text-xs font-light tracking-wide font-sans">
            50 min from Portland &middot; 20 min from Mt. Hood
          </p>
        </div>
      </Container>
    </section>
  );
}
