/**
 * Converts a Tina content ID to a href path
 * e.g., "content/page/about.mdx" -> "/about"
 * e.g., "content/spaces" -> "/spaces" (collection link)
 * e.g., "content/spaces/yoga.json" -> "/spaces/yoga" (individual item)
 */
export function getHrefFromId(id?: string): string {
  if (!id) return "/";
  
  const parts = id.split("/");
  const lastPart = parts[parts.length - 1];

  // If it ends with .mdx or .json, it's a specific file
  if (lastPart?.includes(".")) {
    const filename = lastPart.replace(/\.(mdx|json)$/, "");
    const collection = parts[parts.length - 2];

    // Only include collection in path if it's not 'page'
    if (collection && collection !== "page") {
      return `/${collection}/${filename}`;
    }
    return `/${filename}`;
  }

  // Otherwise it's a collection link (e.g., "content/spaces")
  const collection = parts[parts.length - 1];
  return `/${collection}`;
}
