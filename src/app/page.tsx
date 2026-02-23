import { HeroSection } from "@/components/home/HeroSection";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { WeddingHighlights } from "@/components/home/WeddingHighlights";
import { InquirySection } from "@/components/home/InquirySection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { ExperienceCards } from "@/components/home/ExperienceCards";
import { AccommodationsPreview } from "@/components/home/AccommodationsPreview";
import { LocationBlock } from "@/components/home/LocationBlock";
import { FinalCTA } from "@/components/home/FinalCTA";
import { InstagramEmbed } from "@/components/shared/InstagramEmbed";
import { StickyMobileCTA } from "@/components/shared/StickyMobileCTA";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <FadeIn>
        <WeddingHighlights />
      </FadeIn>
      <FadeIn>
        <InquirySection />
      </FadeIn>
      <FadeIn>
        <TestimonialSection />
      </FadeIn>
      <FadeIn>
        <ExperienceCards />
      </FadeIn>
      <FadeIn>
        <AccommodationsPreview />
      </FadeIn>
      <FadeIn>
        <InstagramEmbed />
      </FadeIn>
      <FadeIn>
        <LocationBlock />
      </FadeIn>
      <FinalCTA />

      {/* Sticky mobile CTA for Meta ad traffic */}
      <StickyMobileCTA
        label="Plan Your Wedding"
        href="/weddings"
      />
      {/* Bottom padding for sticky CTA on mobile */}
      <div className="h-20 lg:hidden" />
    </>
  );
}
