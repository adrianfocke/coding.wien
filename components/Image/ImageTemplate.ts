import type { Template } from "tinacms";
import { wrapWithLanguages } from "../helpers";
import { allowedAspectRatios } from "./Image";
import { MarginField } from "../fields";

export type TextPosition = (typeof textPositions)[number];
export const textPositions = ["center", "underneath", "half-way"] as const;

const fields: Template["fields"] = [
  { name: "image", label: "Image", type: "image" },
  {
    name: "alt",
    label: "Alt Text",
    type: "string",
    description: "Descriptive text for the image",
  },
  { name: "whiteTextOverlay", label: "White Text Overlay", type: "boolean" },
  {
    name: "text",
    label: "Text Overlay",
    type: "rich-text",
    toolbarOverride: ["bold", "italic", "link"],
  },
  {
    name: "textPosition",
    label: "Text position",
    type: "string",
    options: [...textPositions],
  },
  {
    name: "aspectRatio",
    label: "Aspect Ratio",
    type: "string",
    options: allowedAspectRatios,
    ui: {
      defaultValue: "16/9",
    },
  },
  MarginField,
];

export default (variant: "forBlockRendering" | "forRichTextRendering") => ({
  name: "Image",
  label: "Image",
  fields: variant === "forBlockRendering" ? wrapWithLanguages(fields) : fields,
});