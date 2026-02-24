import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CONTACT } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <Image
        src="/images/weddings/details.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-charcoal/70 backdrop-blur-[2px]" />

      <Container className="relative z-10 text-center text-white">
        <p className="text-xl font-normal text-white/70 font-script mb-4">
          Your Story Starts Here
        </p>
        <h2 className="text-3xl font-normal sm:text-4xl lg:text-5xl">
          Ready to Begin?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base text-white/80 font-sans font-light leading-relaxed">
          Let us create an unforgettable experience for you and your loved ones
          at the base of Mt. Hood.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            href="/contact"
            size="lg"
            className="bg-white/95 text-charcoal hover:bg-white shadow-lg"
          >
            Get in Touch
          </Button>
          <Button
            href="/weddings"
            variant="outline"
            size="lg"
            className="border-white/50 text-white hover:bg-white/10 hover:border-white/70 hover:text-white"
          >
            Explore Weddings
          </Button>
        </div>

        {/* Direct contact */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center text-xs text-white/65 font-sans font-light tracking-wide">
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 hover:text-white/70 transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            {CONTACT.phone}
          </a>
          <span className="hidden sm:inline text-white/40">&middot;</span>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 hover:text-white/70 transition-colors"
          >
            <Mail className="h-3.5 w-3.5" />
            {CONTACT.email}
          </a>
        </div>
      </Container>
    </section>
  );
}
