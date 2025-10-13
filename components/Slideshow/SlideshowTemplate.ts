import type { Template } from "tinacms";
import intlTemplate from "../../tina/templates/intlTemplate";
import { layout } from "../../tina/templates/layout";

const slideshowTypes = ["slideshow", "testimonial"] as const;
export type SlideshowType = (typeof slideshowTypes)[number];

const settings: Template["fields"] = [
  {
    name: "nextSlideTimeout",
    label: "Next slide timeout",
    type: "number",
    description: "Time in milliseconds before moving to the next slide",
  },
  {
    name: "variant",
    label: "Variant",
    type: "string",
    options: [...slideshowTypes],
  },
];

export default intlTemplate(
  {
    name: "Slideshow",
    label: "Slideshow",
    type: "object",
    fields: [
      { name: "heading", label: "Heading", type: "string" },
      {
        name: "slides",
        label: "Slides",
        type: "object",
        list: true,
        fields: [
          { name: "text", label: "Text", type: "string" },
          { name: "image", label: "Image", type: "image" },
          { name: "heading", label: "Heading", type: "string" },
          {
            name: "linksToReference",
            label: "Internal link",
            type: "reference",
            collections: ["project"],
          },
          {
            name: "linksTo",
            label: "External link",
            type: "string",
            description:
              "If you fill in an internal link, this will be ignored",
          },
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
              linkText: "Add your link",
            };
          },
        },
      },
    ],
  },
  [...settings, ...layout(["height"])]
);
