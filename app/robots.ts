import type { MetadataRoute } from "next";
import { CONSTANTS } from "../utils/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/",
    },
    sitemap: `${CONSTANTS.projectUrl}/sitemap.xml`,
  };
}
