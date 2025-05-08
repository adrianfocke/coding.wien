import type { Collection } from "tinacms";
import fileName from "../templates/file-name";
import seo from "../templates/seo";
import { sanitizeFilenameForURL } from "../utils";

export default {
  label: "Projects",
  name: "project",
  path: "content/projects",
  format: "json",
  fields: [...fileName, seo],
  ui: {
    router: ({ document }) => {
      return `/works/${document._sys.filename}`;
    },
    filename: {
      readonly: true,
      slugify: (values) => {
        const filename = values?.name || "untitled";
        return sanitizeFilenameForURL(filename);
      },
    },
  },
} as Collection;
