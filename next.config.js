/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [
      "cdn.pixabay.com",
      "img.freepik.com",
      "website-for-your-bar.s3.eu-central-1.amazonaws.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/products",
        destination: "/menu",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
