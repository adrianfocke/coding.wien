import type { Collection } from "tinacms";
import fileName from "../templates/file-name";
import seo from "../templates/seo";
import { sanitizeFilenameForURL } from "../utils";

export default {
  label: "Projects",
  name: "project",
  path: "content/projects",
  format: "json",
  fields: [
    ...fileName,
    seo,
    {
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
        {
          name: "images",
          label: "Images",
          type: "object",
          list: true,
          fields: [
            {
              name: "image",
              label: "Image",
              type: "image",
            },
            {
              name: "altText",
              label: "Alt text",
              type: "string",
            },
          ],
          ui: {
            description:
              "First image will be used as the hero image on the project page.",
          },
        },
        {
          name: "textblocks",
          label: "Text blocks",
          type: "object",
          list: true,
          fields: [
            {
              name: "text",
              label: "Text block",
              type: "rich-text",
              toolbarOverride: ["heading"],
            },
          ],
          ui: {
            itemProps(item) {
              return {
                label: "Text block",
              };
            },
          },
        },
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      return `/projects/${document._sys.filename}`;
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
