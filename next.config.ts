import type { NextConfig } from "next";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["embrace.io"],
  },
};
if (process?.env?.NODE_ENV === "development") {
  setupDevPlatform();
}

export default nextConfig;
