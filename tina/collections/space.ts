import type { Collection } from "tinacms";
import { default as fileName } from "../templates/file-name";
import seo from "../templates/seo";
import { sanitizeFilenameForURL } from "../utils";
import { templates } from "../components";

export default {
  label: "Meine Spac",
  name: "space",
  path: "content/space",
  format: "mdx",
  fields: [
    ...fileName,
    seo,
    {
      name: "blocks",
      label: "Blocks",
      type: "object",
      list: true,
      templates,
    },
  ],
  ui: {
    router: ({ document }) => {
      return `/spaces/${document._sys.filename}`;
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
