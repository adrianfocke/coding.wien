import type { Collection } from "tinacms";
import { sanitizeFilenameForURL } from "../utils";
import { templates } from "../components";
import { allowedAspectRatios } from "../../constants/aspectRatios";
import { createIntlField } from "../tina-fields/component-fields";
import { FilenameField, SEOField } from "../tina-fields/granular-fields";

export default {
  label: "Events",
  name: "event",
  path: "content/events",
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
      options: allowedAspectRatios,
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
