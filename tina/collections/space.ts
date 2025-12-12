import type { Collection } from "tinacms";
import { templates } from "../components";
import { createIntlField } from "../templating/special-fields";
import { FilenameField, SEOField } from "../templating/granular-fields";
import { sanitizeFilenameForURL } from "../templating/validation";

export default {
  label: "Meine Spaces",
  name: "space",
  path: "content/spaces",
  format: "json",
  fields: [
    FilenameField,
    ...createIntlField(SEOField),
    { name: "image", label: "Image", type: "image" },
    {
      name: "alt",
      label: "Alt Text",
      type: "string",
      description: "Descriptive text for the image",
    },
    {
      name: "aspectRatio",
      label: "Aspect Ratio",
      type: "string",
      ui: {
        defaultValue: "16/9",
      },
    },
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
