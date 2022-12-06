/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["medusa-public-images.s3.eu-west-1.amazonaws.com", "localhost"],
  },
};

module.exports = nextConfig;
