import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CONTACT } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest to-charcoal" />
      <div className="absolute inset-0 bg-[url('/images/hero/forest-bg.jpg')] bg-cover bg-center opacity-20" />

      <Container className="relative z-10 text-center text-white">
        <h2 className="text-3xl font-medium sm:text-4xl lg:text-5xl">
          Ready to Plan Your Dream Wedding?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80 font-sans leading-relaxed">
          Let us create an unforgettable experience for you and your loved ones
          at the base of Mt. Hood.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            href="/contact"
            size="lg"
            className="bg-white text-charcoal hover:bg-cream"
          >
            Get in Touch
          </Button>
          <Button
            href="/weddings"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10 hover:text-white"
          >
            View Wedding Packages
          </Button>
        </div>

        {/* Direct contact */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center text-sm text-white/70 font-sans">
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="h-4 w-4" />
            {CONTACT.phone}
          </a>
          <span className="hidden sm:inline">&middot;</span>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="h-4 w-4" />
            {CONTACT.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
