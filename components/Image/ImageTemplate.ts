import type { Template } from "tinacms";
import { wrapWithLanguages } from "../helpers";

const fields: Template["fields"] = [
  { name: "image", label: "Image", type: "image" },
  {
    name: "text",
    label: "Text Overlay",
    type: "rich-text",
    toolbarOverride: ["bold", "italic", "link"],
  },
  {
    name: "aspectRatio",
    label: "Aspect Ratio",
    type: "string",
    options: ["16/9", "4/3", "1/1", "3/4"],
    ui: {
      defaultValue: "16/9",
    },
  },
];

export default (variant: "forBlockRendering" | "forRichTextRendering") => ({
  name: "Image",
  label: "Image",
  fields: variant === "forBlockRendering" ? wrapWithLanguages(fields) : fields,
});