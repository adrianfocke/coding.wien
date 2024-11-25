import type { Collection } from "tinacms";
import {
  CHARACTERS_REGEX,
  CHARACTERS_REGEX_HINT,
  sanitizeFilenameForURL,
} from "../utils";

export default {
  label: "Works",
  name: "post",
  path: "content/post",
  format: "json",
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
      name: "images",
      label: "Images",
      type: "image",
      list: true,
    },
  ],
  ui: {
    router: ({ document }) => {
      return `/posts/${document._sys.filename}`;
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
