import type { Collection } from "tinacms";
import fileName from "../template-fields/file-name";
import seo from "../template-fields/seo";
import { sanitizeFilenameForURL } from "../utils";

export default {
  label: "Works",
  name: "work",
  path: "content/work",
  format: "json",
  fields: [
    seo,
    {
      name: "startDate",
      label: "Spielbeginn",
      type: "datetime",
      required: true,
    },
    fileName,
    {
      name: "info",
      label: "Basic info",
      type: "object",
      list: true,
      ui: {
        itemProps(item) {
          return {
            label:
              item.key || item.value ? `${item.key} : ${item.value}` : "Leer",
          };
        },
      },
      fields: [
        { name: "key", label: "Key", type: "string" },
        { name: "value", label: "Value", type: "string" },
      ],
    },
    {
      name: "detailedInfo",
      label: "More info",
      type: "rich-text",
    },
    {
      name: "images",
      label: "Images",
      type: "image",
      list: true,
    },
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
