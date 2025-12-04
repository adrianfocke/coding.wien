import type { Template } from "tinacms";
import { wrapWithLanguages } from "../helpers";

const fields: Template["fields"] = [
  {
    name: "slides",
    label: "Slides",
    type: "object",
    list: true,
    fields: [
      { name: "image", label: "Image", type: "image" },
      {
        name: "alt",
        label: "Alt Text",
        type: "string",
        description: "Descriptive text for the image",
      },
      {
        name: "text",
        label: "Text Overlay",
        type: "rich-text",
        toolbarOverride: ["bold"],
      },
      { name: "hideImage", label: "Hide Image", type: "boolean" },
    ],
  },
  {
    name: "nextSlideTimeout",
    label: "Next slide in seconds",
    type: "number",
  },
  {
    name: "numberOfSlidesShown",
    label: "Number of slides shown",
    type: "number",
    ui: {
      defaultValue: 1,
      validate: (value: number) => {
        if (value < 1) {
          return "At least 1 slide must be shown.";
        }
      },
    },
  },
  {
    name: "hintNextSlide",
    label: "Hint next slide",
    type: "boolean",
  },
  {
    name: "showControls",
    label: "Show slideshow controls",
    type: "boolean",
  },
];

export default (variant: "forBlockRendering" | "forRichTextRendering") => ({
  name: "Slideshow",
  label: "Slideshow",
  fields: variant === "forBlockRendering" ? wrapWithLanguages(fields) : fields,
});