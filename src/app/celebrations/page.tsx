import type { Metadata } from "next";
import { PartyPopper, Heart, Cake, GlassWater, Users, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { EventCategoryCards } from "@/components/shared/EventCategoryCards";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Celebrations & Events",
  description:
    "Host your engagement party, birthday, rehearsal dinner, anniversary, or special celebration at Highland Farms, Oregon. Highland Cows, forest setting, Nordic spa.",
};

const eventTypes = [
  {
    icon: Heart,
    title: "Engagement Parties",
    description: "Celebrate your engagement surrounded by forest and Highland Cows. An intimate start to your wedding journey.",
  },
  {
    icon: Cake,
    title: "Birthday Parties & Mitzvahs",
    description: "From milestone birthdays to bar and bat mitzvahs — create unforgettable memories on the farm.",
  },
  {
    icon: GlassWater,
    title: "Rehearsal Dinners",
    description: "The perfect setting for your rehearsal dinner. Dine under the trees the night before your big day.",
  },
  {
    icon: PartyPopper,
    title: "Anniversaries",
    description: "Renew your vows or celebrate a milestone anniversary in the place where nature meets celebration.",
  },
  {
    icon: Sparkles,
    title: "Celebrations of Life",
    description: "Honor a loved one in a peaceful, beautiful setting surrounded by nature and gentle animals.",
  },
  {
    icon: Users,
    title: "Retreats & Reunions",
    description: "Family reunions, wellness retreats, corporate off-sites, and creative workshops in the forest.",
  },
];

export default function CelebrationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/60" />
        <div className="absolute inset-0 bg-[url('/images/events/celebrations-hero.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/80 font-sans">
            Gather Together
          </p>
          <h1 className="text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
            Celebrations at Highland Farms
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85 leading-relaxed font-sans">
            From intimate gatherings to milestone celebrations — every event is
            extraordinary when surrounded by forest, farm, and Mt. Hood.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg" className="bg-white text-charcoal hover:bg-cream">
              Plan Your Event
            </Button>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 lg:py-28 bg-background">
        <Container>
          <SectionHeading
            eyebrow="What We Host"
            title="Every Gathering is Special"
            subtitle="Highland Farms provides the backdrop — you bring the celebration."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((event) => (
              <div
                key={event.title}
                className="rounded-sm bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream">
                  <event.icon className="h-5 w-5 text-forest" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-charcoal font-sans">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed font-sans">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What's Included */}
      <section className="py-20 lg:py-28 bg-cream">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-gradient-to-br from-cream-dark to-charcoal/20">
              <div className="absolute inset-0 flex items-center justify-center text-sm text-muted font-sans">
                Celebration event photo
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-medium sm:text-4xl">
                The Highland Farms Experience
              </h2>
              <p className="mt-4 text-base text-muted leading-relaxed font-sans">
                Every celebration at Highland Farms includes the full property
                experience — Highland Cow interactions, forest surroundings,
                Nordic cedar soaking tubs, and elegant outdoor dining areas with
                customizable decor.
              </p>
              <p className="mt-4 text-base text-muted leading-relaxed font-sans">
                Our team works with you to create a personalized experience that
                fits your vision and your group. Pricing and packages vary by
                event type and group size.
              </p>
              <div className="mt-8">
                <Button href="/contact">
                  Inquire About Your Event
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 lg:py-28 bg-background">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Plan Your Celebration"
            title="Get in Touch"
            subtitle="Every event is custom. Tell us your vision and we'll help plan the perfect celebration."
          />
          <div className="mx-auto max-w-xl rounded-sm border border-cream-dark bg-white p-8 shadow-sm">
            <ContactForm
              defaultEventType="celebration"
              heading=""
              subtitle=""
            />
          </div>
          <p className="mt-6 text-center text-sm text-muted font-sans">
            Or call us directly at{" "}
            <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="text-forest hover:text-forest-light transition-colors">
              {CONTACT.phone}
            </a>
          </p>
        </Container>
      </section>

      <EventCategoryCards />
    </>
  );
}
