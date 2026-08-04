import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  output: "standalone",
  async rewrites() {
    return [
      { source: "/milletpasta", destination: "/products" },
      { source: "/noodles", destination: "/products" },
      { source: "/vermicelli", destination: "/products" },
      { source: "/cookies", destination: "/products" },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blueviolet-porpoise-268161.hostingersite.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

