/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/:slug",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
