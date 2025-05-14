import type { Collection } from "tinacms";
import HeroTemplate from "../../components/Hero/HeroTemplate";
import NavigationTemplate from "../../components/Navigation/NavigationTemplate";
import SlideshowTemplate from "../../components/Slideshow/SlideshowTemplate";
import { default as fileName } from "../templates/file-name";
import seo from "../templates/seo";
import { sanitizeFilenameForURL } from "../utils";

export default {
  label: "Pages",
  name: "page",
  path: "content/page",
  format: "mdx",
  fields: [
    ...fileName,
    seo,
    {
      name: "body",
      label: "Main Content",
      type: "rich-text",
      templates: [HeroTemplate, SlideshowTemplate, NavigationTemplate],
      toolbarOverride: [
        /* "bold", "italic", "link", "image", "heading", */ "embed",
      ],
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
