import type { Collection } from "tinacms";
import fileName from "../template-fields/file-name";
import { sanitizeFilenameForURL } from "../utils";

export default {
  label: "Projects",
  name: "project",
  path: "content/projects",
  format: "json",
  fields: [fileName],
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
