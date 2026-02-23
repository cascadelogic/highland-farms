import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function InquirySection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="Start Planning"
          title="Get Your Custom Quote"
          subtitle="Tell us about your vision and we'll create a personalized package for your special day."
        />

        {/* Placeholder form - will be replaced with Supabase-backed form in Phase 3 */}
        <div className="mx-auto max-w-xl">
          <form className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5 font-sans">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-sm border border-cream-dark bg-white px-4 py-3 text-sm font-sans text-charcoal placeholder:text-muted/60 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
                  placeholder="First & Last Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5 font-sans">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-sm border border-cream-dark bg-white px-4 py-3 text-sm font-sans text-charcoal placeholder:text-muted/60 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-charcoal mb-1.5 font-sans">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full rounded-sm border border-cream-dark bg-white px-4 py-3 text-sm font-sans text-charcoal placeholder:text-muted/60 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
                />
              </div>
              <div>
                <label htmlFor="event-type" className="block text-sm font-medium text-charcoal mb-1.5 font-sans">
                  Event Type
                </label>
                <select
                  id="event-type"
                  name="event-type"
                  className="w-full rounded-sm border border-cream-dark bg-white px-4 py-3 text-sm font-sans text-charcoal focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
                >
                  <option value="">Select an event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="elopement">Elopement</option>
                  <option value="celebration">Celebration</option>
                  <option value="retreat">Retreat</option>
                  <option value="photoshoot">Photoshoot</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5 font-sans">
                Tell Us About Your Vision
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-sm border border-cream-dark bg-white px-4 py-3 text-sm font-sans text-charcoal placeholder:text-muted/60 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest resize-none"
                placeholder="Share your dream event details..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-sm bg-forest px-6 py-3.5 text-base font-medium tracking-wide text-white transition-colors hover:bg-forest-light"
            >
              Get Your Custom Quote
            </button>

            <p className="text-center text-xs text-muted font-sans">
              We typically respond within 24 hours.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
