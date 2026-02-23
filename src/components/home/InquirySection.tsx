import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";

export function InquirySection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Start Planning"
          title="Get Your Custom Quote"
          subtitle="Tell us about your vision and we'll create a personalized package for your special day."
        />

        <div className="mx-auto max-w-xl">
          <ContactForm
            defaultEventType="wedding"
            heading=""
            subtitle=""
          />
        </div>
      </Container>
    </section>
  );
}
