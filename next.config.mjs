/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.IMAGE_HOST,
        port: "",
        pathname: "/webps/**",
      },
    ],
  },
};

export default nextConfig;
``;
