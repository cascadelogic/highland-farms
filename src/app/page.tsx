import { HeroSection } from "@/components/home/HeroSection";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { WeddingHighlights } from "@/components/home/WeddingHighlights";
import { InquirySection } from "@/components/home/InquirySection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { ExperienceCards } from "@/components/home/ExperienceCards";
import { AccommodationsPreview } from "@/components/home/AccommodationsPreview";
import { LocationBlock } from "@/components/home/LocationBlock";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <WeddingHighlights />
      <InquirySection />
      <TestimonialSection />
      <ExperienceCards />
      <AccommodationsPreview />
      <LocationBlock />
      <FinalCTA />
    </>
  );
}
