import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// Static output — deployed to S3 + CloudFront.
export default defineConfig({
  output: "static",
  site: "https://anviinnovate.com",
  integrations: [react()],
});
