import type { MetadataRoute } from "next";
import project from "../../project";
import client from "../../tina/__generated__/client";
import { sanitizeFilenameForURL } from "../../tina/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = (
    await client.queries.eventConnection()
  ).data.eventConnection.edges?.map((page) => page);

  return pages!.map((page) => ({
    url: `https://www.${project.url}/events/${sanitizeFilenameForURL(
      page!.node!.name
    )}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));
}
