/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"], // Add this line
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
