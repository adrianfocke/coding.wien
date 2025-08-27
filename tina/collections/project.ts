import type { Collection } from "tinacms";
import fileName from "../templates/file-name";
import seo from "../templates/seo";
import { sanitizeFilenameForURL } from "../utils";
import intlTemplate from "../templates/intlTemplate";

export default {
  label: "Projects",
  name: "project",
  path: "content/projects",
  format: "json",
  fields: [
    ...fileName,
    seo,
    intlTemplate({
      name: "content",
      label: "Content",
      type: "object",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: "punchline",
          label: "Punchline",
          type: "string",
        },
        {
          name: "url",
          label: "URL",
          type: "string",
        },
      ],
    }),
  ],
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
