import type { Collection } from "tinacms";
import { allTemplates } from "../components";
import { customToolbar } from "../fields";
import {
  CHARACTERS_REGEX,
  CHARACTERS_REGEX_HINT,
  sanitizeFilenameForURL,
} from "../utils";

export default {
  label: "Pages",
  name: "page",
  path: "content/page",
  format: "mdx",
  fields: [
    {
      name: "name",
      label: "Name",
      type: "string",
      required: true,
      ui: {
        validate: (value) => {
          if (!value) {
            return "Value must be defined";
          }

          if (!CHARACTERS_REGEX.test(value)) {
            return CHARACTERS_REGEX_HINT;
          }
        },
      },
    },
    {
      name: "body",
      label: "Main Content",
      type: "rich-text",
      isBody: true,
      // TODO naming?
      templates: allTemplates,
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