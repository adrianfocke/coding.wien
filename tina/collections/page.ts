import type { Collection } from "tinacms";
import { FormTemplate } from "../../components/Form/Form";
import { InstagramPostTemplate } from "../../components/InstagramPost";
import { SlideshowTemplate } from "../../components/Slideshow/Slideshow";
import { IntlField } from "../fields";

export default {
  label: "Page Content",
  name: "page",
  path: "content/page",
  format: "mdx",
  fields: [
    {
      name: "body",
      label: "Main Content",
      type: "rich-text",
      isBody: true,
      // TODO naming?
      templates: [FormTemplate, InstagramPostTemplate, SlideshowTemplate],
    },
  ],
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }

      return `/${document._sys.filename}`;
    },
  },
} as Collection;