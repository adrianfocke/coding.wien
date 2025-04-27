import type { Template } from "tinacms";
import { exportTemplate } from "../../tina/utils";

const settings: Template["fields"] = [
  {
    name: "nextSlideTimeout",
    label: "Next slide timeout",
    type: "number",
  },
];

const fields: Template["fields"] = [
  {
    name: "slides",
    label: "Slides",
    type: "object",
    list: true,
    fields: [
      { name: "text", type: "string" },
      { name: "image", type: "image" },
      { name: "heading", type: "string" },
      { name: "linksTo", type: "string" },
      { name: "linkText", type: "string" },
    ],
    ui: {
      itemProps(item) {
        return {
          label: item.heading ? `${item.heading}` : "Empty heading",
        };
      },
    },
  },
];

export default exportTemplate({
  name: "Slideshow",
  settings,
  fields,
});