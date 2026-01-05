/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pin.it", // only the domain
        port: "",            // optional, leave empty if standard
        pathname: "/**",     // allow all paths
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
