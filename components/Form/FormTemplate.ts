import type { Template } from "tinacms";

const fields: Template["fields"] = [
  {
    name: "variant",
    label: "Variant",
    type: "string",
    options: ["contact", "newsletter"],
    ui: { defaultValue: "contact" },
  },
];

export default (variant: "forBlockRendering" | "forRichTextRendering") => ({
  name: "Form",
  label: "Form",
  fields,
});
