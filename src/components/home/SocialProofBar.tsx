import { Star, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function SocialProofBar() {
  return (
    <section className="bg-cream py-5">
      <Container>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8 text-charcoal">
          {/* Google Rating */}
          <a
            href="https://share.google/jrLOI4AhnpzbPPBpF"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-forest transition-colors"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-medium font-sans">
              4.9 on Google
            </span>
            <span className="text-xs text-muted font-sans">(146+ reviews)</span>
          </a>

          <div className="hidden sm:block h-4 w-px bg-charcoal/20" />

          {/* Travel Oregon */}
          <a
            href="https://traveloregon.com/plan-your-trip/places-to-stay/farm-ranch-stays/highland-farms/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium font-sans hover:text-forest transition-colors"
          >
            Featured on Travel Oregon
            <ExternalLink className="h-3 w-3" />
          </a>

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
