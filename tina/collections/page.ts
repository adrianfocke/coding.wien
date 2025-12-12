import type { Collection } from "tinacms";
import { sanitizeFilenameForURL } from "../utils";
import { templates } from "../components";
import { createIntlField } from "../tina-fields/component-fields";
import { FilenameField, SEOField } from "../tina-fields/granular-fields";

export default {
  label: "Pages",
  name: "page",
  path: "content/page",
  format: "mdx",
  fields: [
    FilenameField,
    ...createIntlField(SEOField),
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
      if (document._sys.filename === "home") {
        return `/`;
      }

      return `/${document._sys.filename}`;
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
