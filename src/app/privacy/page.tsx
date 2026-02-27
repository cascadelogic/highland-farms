import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CONTACT, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Highland Farms Oregon privacy policy. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pb-28 bg-background">
        <Container className="max-w-3xl">
          <h1 className="text-3xl font-normal sm:text-4xl mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted font-sans mb-10">
            Last updated: February 26, 2026
          </p>

          <div className="prose prose-neutral max-w-none text-base text-charcoal/90 font-sans leading-relaxed space-y-8">
            <section>
              <h2 className="text-xl font-normal font-display mb-3">
                Introduction
              </h2>
              <p>
                Highland Farms Oregon (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) operates the website at{" "}
                <strong>{SITE.url}</strong>. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your personal information
                when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal font-display mb-3">
                Information We Collect
              </h2>
              <h3 className="text-lg font-normal font-display mb-2">
                Information You Provide
              </h3>
              <p>When you submit an inquiry form on our website, we collect:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number (optional)</li>
                <li>Event type and details</li>
                <li>Preferred date and guest count</li>
                <li>Any message content you include</li>
              </ul>

              <h3 className="text-lg font-normal font-display mb-2 mt-4">
                Information Collected Automatically
              </h3>
              <p>
                With your consent, we use Google Tag Manager and Google Analytics
                to collect usage data including:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  Browser type, device type, and operating system
                </li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website or source</li>
                <li>Approximate geographic location (city/region level)</li>
                <li>IP address (anonymized)</li>
              </ul>
              <p className="text-sm">
                These analytics tools only load after you accept cookies via our
                consent banner. If you decline, no tracking cookies are placed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal font-display mb-3">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  To respond to your inquiries about weddings, events, farm
                  tours, spa sessions, and accommodations
                </li>
                <li>To provide pricing, availability, and custom quotes</li>
                <li>To improve our website and services</li>
                <li>
                  To analyze website traffic and understand how visitors use our
                  site (with consent)
                </li>
                <li>To comply with legal obligations</li>
              </ul>
              <p className="text-sm">
                We do not sell, rent, or share your personal information with
                third parties for their own marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal font-display mb-3">
                Data Storage & Security
              </h2>
              <p>
                Inquiry form data is stored securely using Supabase, a
                cloud-hosted database with encryption at rest and in transit. We
                retain inquiry data for up to 24 months after your last
                interaction, after which it is deleted. We implement reasonable
                administrative, technical, and physical safeguards to protect
                your information, but no method of electronic transmission or
                storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal font-display mb-3">
                Cookies & Tracking
              </h2>
              <p>
                Our website uses a cookie consent banner. Analytics cookies
                (Google Tag Manager / Google Analytics) are only loaded after you
                explicitly accept cookies. You may decline cookies at any time,
                and the site will function normally without them.
              </p>
              <p className="text-sm">
                Essential cookies (such as those needed for site functionality)
                do not require consent and are minimal on this site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal font-display mb-3">
                Third-Party Services
              </h2>
              <p>We use the following third-party services:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  <strong>Google Tag Manager / Google Analytics</strong> —
                  website analytics (with consent)
                </li>
                <li>
                  <strong>Supabase</strong> — secure form data storage
                </li>
                <li>
                  <strong>Acuity Scheduling</strong> — farm tour and spa session
                  booking
                </li>
                <li>
                  <strong>Hospitable</strong> — accommodation booking widgets
                </li>
                <li>
                  <strong>Vercel</strong> — website hosting
                </li>
              </ul>
              <p className="text-sm">
                Each of these services has its own privacy policy governing how
                they handle data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal font-display mb-3">
                Your Rights
              </h2>
              <h3 className="text-lg font-normal font-display mb-2">
                Oregon Consumer Privacy Act (OCPA) &amp; California Consumer
                Privacy Act (CCPA/CPRA)
              </h3>
              <p>
                If you are a resident of Oregon, California, or another state
                with consumer privacy laws, you have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  <strong>Access</strong> — Request a copy of the personal
                  information we hold about you
                </li>
                <li>
                  <strong>Delete</strong> — Request that we delete your personal
                  information
                </li>
                <li>
                  <strong>Correct</strong> — Request correction of inaccurate
                  personal information
                </li>
                <li>
                  <strong>Opt out of sale</strong> — We do not sell your personal
                  information
                </li>
                <li>
                  <strong>Non-discrimination</strong> — We will not discriminate
                  against you for exercising your privacy rights
                </li>
              </ul>
              <p className="text-sm">
                To exercise any of these rights, contact us at{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-forest underline underline-offset-2"
                >
                  {CONTACT.email}
                </a>
                . We will respond within 45 days.
              </p>

              <h3 className="text-lg font-normal font-display mb-2 mt-4">
                European Visitors (GDPR)
              </h3>
              <p>
                If you are located in the European Economic Area, you have
                additional rights under GDPR including the right to data
                portability and the right to lodge a complaint with a supervisory
                authority. Our lawful basis for processing is consent (for
                analytics) and legitimate interest (for responding to
                inquiries).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal font-display mb-3">
                Children&apos;s Privacy
              </h2>
              <p>
                Our website is not directed to children under 13. We do not
                knowingly collect personal information from children under 13. If
                you believe we have inadvertently collected such information,
                please contact us and we will promptly delete it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal font-display mb-3">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated &ldquo;Last
                updated&rdquo; date. We encourage you to review this policy
                periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal font-display mb-3">
                Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or wish to
                exercise your privacy rights, contact us at:
              </p>
              <p className="text-sm">
                Highland Farms Oregon
                <br />
                {CONTACT.fullAddress}
                <br />
                Email:{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-forest underline underline-offset-2"
                >
                  {CONTACT.email}
                </a>
                <br />
                Phone:{" "}
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="text-forest underline underline-offset-2"
                >
                  {CONTACT.phone}
                </a>
              </p>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
