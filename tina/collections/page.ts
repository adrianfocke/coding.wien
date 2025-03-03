import type { Collection } from "tinacms";
import ButtonTemplate from "../../components/Button/ButtonTemplate";
import CardTemplate from "../../components/Card/CardTemplate";
import HeroTemplate from "../../components/Hero/HeroTemplate";
import HighlightedSectionTemplate from "../../components/HighlightedSection/HighlightedSectionTemplate";
import NavigationTemplate from "../../components/Navigation/NavigationTemplate";
import SlideshowTemplate from "../../components/Slideshow/SlideshowTemplate";
import { default as fileName } from "../template-fields/file-name";
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
      templates: [
        ButtonTemplate,
        CardTemplate,
        HeroTemplate,
        HighlightedSectionTemplate,
        NavigationTemplate,
        SlideshowTemplate,
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
