import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Lets a verification build run in a separate folder without clobbering `next dev`
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async redirects() {
    // Renamed solutions: Resto → Kitchio, Edu → Hessety
    return [
      { source: "/:locale(ar|en)/resto", destination: "/:locale/kitchio", permanent: true },
      { source: "/:locale(ar|en)/edu", destination: "/:locale/hessety", permanent: true },
    ];
  },
};

export default nextConfig;
