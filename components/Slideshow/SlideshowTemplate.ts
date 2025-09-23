import type { Template } from "tinacms";
import intlTemplate from "../../tina/templates/intlTemplate";
import { layout } from "../../tina/templates/layout";

const settings: Template["fields"] = [
  {
    name: "nextSlideTimeout",
    label: "Next slide timeout",
    type: "number",
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
          { name: "text", label: "Text", type: "string" },
          { name: "image", label: "Image", type: "image" },
          { name: "heading", label: "Heading", type: "string" },
          { name: "linksTo", label: "Link", type: "string" },
          { name: "linkText", label: "Link Text", type: "string" },
        ],
        ui: {
          itemProps(item) {
            return {
              label: item.heading ? `${item.heading}` : "Empty heading",
            };
          },
          defaultItem() {
            return {
              heading: "Add your heading",
              text: "Add your text to spark interest",
              image: "/uploads/hero2.jpg",
              linksTo: "/",
              linkText: "Add your link",
            };
          },
        },
      },
    ],
  },
  [...settings, ...layout(["height"])]
);
