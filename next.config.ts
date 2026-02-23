import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old Squarespace URL redirects
      { source: "/wedding-venue", destination: "/weddings", permanent: true },
      { source: "/outdoor-wedding-venue", destination: "/weddings", permanent: true },
      { source: "/farm-tour-spa", destination: "/farm-tours", permanent: true },
      { source: "/farm-stay", destination: "/stay", permanent: true },
      { source: "/gatherings-retreats", destination: "/celebrations", permanent: true },
      { source: "/photoshoots-productions", destination: "/contact", permanent: true },
      { source: "/events", destination: "/weddings", permanent: true },
      { source: "/retreats", destination: "/celebrations", permanent: true },
      { source: "/photoshoots", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
