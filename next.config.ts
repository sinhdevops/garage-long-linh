import type { NextConfig } from "next";

// Static export: `npm run build` creates the `out/` folder, which can be uploaded to any
// hosting (Vercel, Netlify, Cloudflare Pages, cPanel...).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
