/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.edgestore.dev",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "polite-bienenstitch-cc3c05.netlify.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
