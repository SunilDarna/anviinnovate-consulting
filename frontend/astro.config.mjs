import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// Static output — deployed to S3 + CloudFront.
// (sitemap is a static file in public/sitemap.xml — the integration chokes on redirect routes.)
export default defineConfig({
  output: "static",
  site: "https://anviinnovate.com",
  integrations: [react()],
  // Common URL variants -> canonical routes (generated as redirect pages).
  redirects: {
    "/register": "/login",
    "/hire": "/clients",
    "/candidates": "/clients",
    "/candidates/apply": "/clients",
    "/training": "/clients",
  },
});
