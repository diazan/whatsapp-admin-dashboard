import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/dentimoderna",
        has: [
          {
            type: "host",
            value: "dentimoderna.lat",
          },
        ],
      },
      {
        source: "/",
        destination: "/dentimoderna",
        has: [
          {
            type: "host",
            value: "www.dentimoderna.lat",
          },
        ],
      },
    ];
  },
};

export default nextConfig;