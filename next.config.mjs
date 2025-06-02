/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "farseit.com",
      },
    ],
  },
};

export default nextConfig;
