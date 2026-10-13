import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Lets a verification build run in a separate folder without clobbering `next dev`
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
