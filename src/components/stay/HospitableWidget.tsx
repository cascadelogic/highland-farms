"use client";

import { useEffect } from "react";

interface HospitableWidgetProps {
  widgetUrl: string;
  propertyName: string;
}

export function HospitableWidget({ widgetUrl, propertyName }: HospitableWidgetProps) {
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data.iframeHeight) {
        const iframe = document.getElementById("booking-iframe") as HTMLIFrameElement | null;
        if (iframe) {
          iframe.style.height = event.data.iframeHeight + "px";
        }
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  if (!widgetUrl) {
    return (
      <div className="rounded-sm border-2 border-dashed border-cream-dark bg-warm-white p-12 text-center">
        <p className="text-lg font-medium text-charcoal font-sans">
          Booking Widget Coming Soon
        </p>
        <p className="mt-2 text-sm text-muted font-sans">
          The booking calendar for {propertyName} will appear here once the Hospitable widget URL is configured.
        </p>
      </div>
    );
  }

  return (
    <div className="min-w-[320px]">
      <iframe
        id="booking-iframe"
        src={widgetUrl}
        width="100%"
        height="900"
        frameBorder="0"
        title={`Book ${propertyName}`}
        className="rounded-sm"
        allow="payment"
      />
    </div>
  );
}
