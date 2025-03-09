import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.hashnode.com"], // Allow Hashnode images
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js$/,
      exclude: /archive/,
    });
    return config;
  },
};

export default nextConfig;
