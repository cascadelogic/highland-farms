import { CONTACT, SITE } from "@/lib/constants";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE.url}/#business`,
        name: "Highland Farms Oregon",
        description: SITE.description,
        url: SITE.url,
        telephone: CONTACT.phone,
        email: CONTACT.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: CONTACT.address,
          addressLocality: CONTACT.city,
          addressRegion: CONTACT.state,
          postalCode: CONTACT.zip,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: CONTACT.coordinates.lat,
          longitude: CONTACT.coordinates.lng,
        },
        sameAs: [CONTACT.instagram],
      },
      {
        "@type": "EventVenue",
        "@id": `${SITE.url}/#venue`,
        name: "Highland Farms Oregon",
        description:
          "All-inclusive farm and forest wedding venue at the base of Mt. Hood. Five acres of forest, Highland Cows, on-site lodging for 24 guests.",
        url: `${SITE.url}/weddings`,
        address: {
          "@type": "PostalAddress",
          streetAddress: CONTACT.address,
          addressLocality: CONTACT.city,
          addressRegion: CONTACT.state,
          postalCode: CONTACT.zip,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: CONTACT.coordinates.lat,
          longitude: CONTACT.coordinates.lng,
        },
        maximumAttendeeCapacity: 24,
      },
      {
        "@type": "TouristAttraction",
        "@id": `${SITE.url}/#attraction`,
        name: "Highland Farms Farm Tours",
        description:
          "Private Highland Cow farm tours featuring Highland Cows, Icelandic Sheep, White Peacocks, and more. 60-minute private experiences.",
        url: `${SITE.url}/farm-tours`,
        address: {
          "@type": "PostalAddress",
          streetAddress: CONTACT.address,
          addressLocality: CONTACT.city,
          addressRegion: CONTACT.state,
          postalCode: CONTACT.zip,
          addressCountry: "US",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
