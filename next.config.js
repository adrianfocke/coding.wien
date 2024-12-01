/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ["assets.tina.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.tina.io",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "**.vercel.com",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "content.tinajs.io",
        port: "",
        search: "",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
};
