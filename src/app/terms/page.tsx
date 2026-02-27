import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Highland Farms Oregon terms of service. Review our booking terms, property rules, cancellation policy, and liability information.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pb-28 bg-background">
        <Container className="max-w-3xl">
          <h1 className="text-3xl font-normal sm:text-4xl mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-muted font-sans mb-10">
            Last updated: February 26, 2026
          </p>

          <div className="prose prose-neutral max-w-none text-base text-charcoal/90 font-sans leading-relaxed space-y-8">
            <section>
              <h2 className="text-xl font-normal font-display mb-3">
                Agreement to Terms
              </h2>
              <p>
                By accessing or using the Highland Farms Oregon website
                (&ldquo;Site&rdquo;) and services, you agree to be bound by
                these Terms of Service. If you do not agree, please do not use
                the Site or our services. These terms apply to all visitors,
                guests, and users of the Site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal font-display mb-3">
                Services
              </h2>
              <p>
                Highland Farms Oregon provides event venue services (weddings,
                celebrations, retreats), farm tours, Nordic spa sessions, and
                short-term accommodation rentals at our property in Brightwood,
                Oregon. Specific terms for each service are provided at the time
                of booking and may include additional agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal font-display mb-3">
                Booking &amp; Reservations
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  All bookings are subject to availability and confirmation by
                  Highland Farms.
                </li>
                <li>
                  A deposit may be required to secure your reservation. Deposit
                  amounts and payment terms are specified at the time of booking.
                </li>
                <li>
                  By booking, you agree to the pricing, dates, and specific
                  terms communicated during the reservation process.
                </li>
                <li>
                  Farm tour and spa bookings are made through our scheduling
                  partner (Acuity Scheduling) and are subject to their terms of
                  service in addition to ours.
                </li>
                <li>
                  Accommodation bookings may be made through our booking partner
                  (Hospitable) and are subject to their terms in addition to
                  ours.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-normal font-display mb-3">
                Cancellation &amp; Refund Policy
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>Farm tours &amp; spa sessions:</strong> Cancellations
                  must be made at least 24 hours before your scheduled
                  appointment for a full refund. Cancellations within 24 hours
                  are non-refundable.
                </li>
                <li>
                  <strong>Accommodations:</strong> Cancellation terms vary by
                  property and booking date. Specific cancellation policies are
                  provided at the time of booking.
                </li>
                <li>
                  <strong>Weddings &amp; events:</strong> Cancellation and
                  refund terms are outlined in your individual event agreement.
                  Deposits are generally non-refundable. Please discuss your
                  specific terms with our events team.
                </li>
                <li>
                  <strong>Weather:</strong> Highland Farms reserves the right to
                  cancel or reschedule outdoor activities due to severe weather.
                  In such cases, a full refund or reschedule will be offered.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-normal font-display mb-3">
                Property Rules &amp; Guest Conduct
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>No outside pets allowed.</strong> Service animals are
                  permitted in accordance with ADA requirements.
                </li>
                <li>
                  Guests must follow all safety instructions provided by
                  Highland Farms staff, particularly around animals and farm
                  equipment.
                </li>
                <li>
                  Smoking is prohibited inside all structures. Designated
                  smoking areas may be available upon request.
                </li>
                <li>
                  Guests are responsible for the conduct of all members of their
                  party, including children.
                </li>
                <li>
                  Highland Farms reserves the right to remove any guest who
                  engages in disruptive, dangerous, or disrespectful behavior
                  without refund.
                </li>
                <li>
                  Maximum occupancy limits must be respected for all
                  accommodations and event spaces.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-normal font-display mb-3">
                Assumption of Risk &amp; Liability
              </h2>
              <p>
                Highland Farms is a working farm with live animals, natural
                terrain, and outdoor environments. By visiting our property, you
                acknowledge and accept the inherent risks associated with:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  Interaction with animals (Scottish Highland Cows, sheep,
                  poultry, dogs, etc.)
                </li>
                <li>
                  Walking on uneven, natural terrain including forest paths,
                  gravel, and grass
                </li>
                <li>
                  Use of spa facilities including saunas and cold plunge
                </li>
                <li>Outdoor weather conditions</li>
              </ul>
              <p className="text-sm mt-3">
                To the maximum extent permitted by law, Highland Farms Oregon,
                its owners, employees, and agents shall not be liable for any
                personal injury, property damage, or loss arising from your use
                of our property or services, except in cases of gross negligence
                or willful misconduct.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal font-display mb-3">
                Photography &amp; Media
              </h2>
              <p>
                By visiting Highland Farms, you consent to being photographed or
                recorded for promotional purposes unless you notify us in
                writing prior to your visit. Highland Farms may use photographs
                taken on the property for marketing, social media, and website
                content.
              </p>
              <p className="text-sm mt-2">
                If you wish to opt out of promotional photography, please inform
                our team at check-in or via email at{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-forest underline underline-offset-2"
                >
                  {CONTACT.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal font-display mb-3">
                Intellectual Property
              </h2>
              <p>
                All content on this website — including text, photographs,
                illustrations, logos, and design — is the property of Highland
                Farms Oregon and is protected by copyright law. You may not
                reproduce, distribute, or use any content from this Site without
                prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal font-display mb-3">
                Website Use
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  You agree not to use this website for any unlawful purpose or
                  in any way that could damage, disable, or impair the Site.
                </li>
                <li>
                  You agree not to submit false information through our inquiry
                  forms.
                </li>
                <li>
                  We reserve the right to modify, suspend, or discontinue any
                  part of the Site at any time without notice.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-normal font-display mb-3">
                Governing Law
              </h2>
              <p>
                These Terms are governed by and construed in accordance with the
                laws of the State of Oregon, without regard to conflict of law
                principles. Any disputes arising from these Terms or your use of
                our services shall be resolved in the courts of Clackamas
                County, Oregon.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal font-display mb-3">
                Changes to These Terms
              </h2>
              <p>
                We may update these Terms from time to time. Changes will be
                posted on this page with an updated date. Continued use of the
                Site after changes constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-normal font-display mb-3">
                Contact Us
              </h2>
              <p>
                If you have questions about these Terms of Service, contact us:
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
