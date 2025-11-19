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
        name: "text",
        label: "Text Overlay",
        type: "rich-text",
        toolbarOverride: ["bold"],
      },
    ],
  },
  {
    name: "nextSlideTimeout",
    label: "Next slide in seconds",
    type: "number",
  },
];

export default (variant: "forBlockRendering" | "forRichTextRendering") => ({
  name: "Slideshow",
  label: "Slideshow",
  fields: variant === "forBlockRendering" ? wrapWithLanguages(fields) : fields,
});