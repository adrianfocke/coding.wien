/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    domains: ["assets.tina.io"], // Ensure this array is not empty or undefined
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
