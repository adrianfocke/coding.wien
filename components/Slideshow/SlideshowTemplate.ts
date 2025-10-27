import type { Template } from "tinacms";
import intlTemplate from "../../tina/templates/intlTemplate";
import { layout } from "../../tina/templates/layout";
import templateDescriptions from "../../tina/templates/template-descriptions";
import { placeholders } from "../helpers";

const slideshowTypes = ["slideshow", "testimonial"] as const;
export type SlideshowType = (typeof slideshowTypes)[number];

const slideshowTimeouts = ["2", "3", "4", "5", "6"] as const;

const settings: Template["fields"] = [
  {
    name: "nextSlideTimeout",
    label: "Next slide in seconds",
    type: "string",
    options: [...slideshowTimeouts],
  },
  {
    name: "variant",
    label: "Slideshow variant",
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
          { name: "heading", label: "Heading", type: "string" },
          { name: "text", label: "Text", type: "string" },
          {
            name: "images",
            label: "Image",
            type: "object",
            fields: [
              { name: "image", label: "Image", type: "image" },
              {
                name: "portraitImage",
                label: "Alternative image",
                type: "image",
                description:
                  "Alternative image for portrait devices (like phones)",
              },
            ],
          },
          { name: "linkText", label: "Link Text", type: "string" },
          {
            name: "linksToReference",
            label: "Internal link",
            type: "reference",
            collections: ["project"],
            description: templateDescriptions.internalLink,
          },
          {
            name: "linksTo",
            label: "External link",
            type: "string",
            description: templateDescriptions.externalLink,
          },
        ],
        ui: {
          itemProps(item) {
            return {
              label: item.heading ? `${item.heading}` : "Empty heading",
            };
          },
          defaultItem() {
            return {
              images: {
                image: placeholders.image,
                portraitImage: placeholders.portraitImage,
              },
            };
          },
        },
      },
    ],
  },
  [...settings, ...layout(["height"])]
);
