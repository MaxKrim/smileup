import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['3000-a0aa7282-9145-441f-869d-b99f3c019685.orchids.cloud'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
