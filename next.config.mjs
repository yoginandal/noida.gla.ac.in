/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "noida.gla.ac.in",
        port: "",
        pathname: "/wordpress/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
