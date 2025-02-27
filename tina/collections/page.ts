import type { Collection } from "tinacms";
import { templates } from "../components";
import { default as fileName } from "../template-fields/file-name";
import { customToolbar } from "../template-fields/rt-elements";
import { default as seo } from "../template-fields/seo";
import { sanitizeFilenameForURL } from "../utils";

export default {
  label: "Pages",
  name: "page",
  path: "content/page",
  format: "mdx",
  fields: [
    fileName,
    seo,
    {
      name: "body",
      label: "Main Content",
      type: "rich-text",
      templates,
      toolbarOverride: customToolbar,
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
