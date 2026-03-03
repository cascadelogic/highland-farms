"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const LOCATION_ID = process.env.NEXT_PUBLIC_BOOKEDIQ_LOCATION_ID;
const CONSENT_KEY = "hf-cookie-consent";

export function BookedIQWidget() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(CONSENT_KEY) === "accepted") {
      setConsented(true);
    }

    function handleConsent() {
      setConsented(true);
    }

    window.addEventListener("cookie-consent-accepted", handleConsent);
    return () => window.removeEventListener("cookie-consent-accepted", handleConsent);
  }, []);

  if (!LOCATION_ID || !consented) return null;

  return (
    <>
      <link
        rel="stylesheet"
        media="print"
        // @ts-expect-error onLoad on link is non-standard but valid for this GHL pattern
        onLoad="this.media='all'"
        href="https://widgets.leadconnectorhq.com/loader.css"
      />
      <Script
        id="bookediq-widget"
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id={LOCATION_ID}
        strategy="afterInteractive"
      />
    </>
  );
}
