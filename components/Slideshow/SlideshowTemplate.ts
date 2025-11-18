import type { Template } from "tinacms";
import intlTemplate from "../../tina/templates/intlTemplate";

const settings: Template["fields"] = [
  {
    name: "settings",
    label: "Settings",
    type: "object",
    fields: [
      {
        name: "nextSlideTimeout",
        label: "Next slide in seconds",
        type: "number",
      },
    ],
  },
];

export default intlTemplate(
  {
    name: "Slideshow",
    label: "Slideshow",
    type: "object",
    fields: [
      {
        name: "slides",
        label: "Slides",
        type: "object",
        list: true,
        fields: [
          { name: "image", label: "Image", type: "image" },
          {
            name: "text",
            label: "Text Overlay",
            type: "rich-text",
            toolbarOverride: ["bold"],
          },
        ],
      },
    ],
  },
  [...settings]
);
