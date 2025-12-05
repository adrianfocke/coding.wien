import type { Template } from "tinacms";
import { wrapWithLanguages } from "../helpers";
import { MarginField } from "../fields";

const fields: Template["fields"] = [
  { name: "heading", label: "Heading", type: "string" },
  {
    name: "align",
    label: "Alignment",
    type: "string",
    options: ["left", "center", "right"],
    ui: {
      defaultValue: "left",
    },
  },
  {
    name: "as",
    label: "Heading size",
    type: "string",
    options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    ui: {
      defaultValue: "h1",
    },
  },
  MarginField,
];

export default (variant: "forBlockRendering" | "forRichTextRendering") => ({
  name: "Heading",
  label: "Heading",
  fields: variant === "forBlockRendering" ? wrapWithLanguages(fields) : fields,
});