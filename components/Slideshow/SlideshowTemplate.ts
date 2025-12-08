import type { Template } from "tinacms";
import { wrapWithLanguages } from "../helpers";
import { MarginField } from "../fields";
import { textPositions } from "../Image/ImageTemplate";
import { allowedAspectRatios } from "../../constants/aspectRatios";

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
        name: "whiteTextOverlay",
        label: "White Text Overlay",
        type: "boolean",
      },
      {
        name: "textPosition",
        label: "Text position",
        type: "string",
        options: [...textPositions],
      },
      {
        name: "text",
        label: "Text Overlay",
        type: "rich-text",
        toolbarOverride: ["bold", "link"],
      },
      { name: "hideImage", label: "Hide Image", type: "boolean" },
      {
        name: "aspectRatio",
        label: "Aspect Ratio",
        type: "string",
        options: [...allowedAspectRatios],
        ui: {
          defaultValue: "16/9",
        },
      },
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
    name: "fullwidth",
    label: "Full width slideshow",
    type: "boolean",
    ui: { defaultValue: true },
  },
  // {
  //   name: "showControls",
  //   label: "Show slideshow controls",
  //   type: "boolean",
  // },
  MarginField,
];

export default (variant: "forBlockRendering" | "forRichTextRendering") => ({
  name: "Slideshow",
  label: "Slideshow",
  fields: variant === "forBlockRendering" ? wrapWithLanguages(fields) : fields,
});