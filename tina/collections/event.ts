import type { Collection } from "tinacms";
import { default as fileName } from "../templates/file-name";
import seo from "../templates/seo";
import { sanitizeFilenameForURL } from "../utils";
import { templates } from "../components";

export default {
  label: "Events",
  name: "event",
  path: "content/event",
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
      return `/events/${document._sys.filename}`;
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
