import type { Template } from "tinacms";
import intlTemplate from "../../tina/templates/intlTemplate";

const settings: Template["fields"] = [
  {
    name: "settings",
    label: "Settings",
    type: "object",
    fields: [
      {
        name: "aspectRatio",
        label: "Aspect Ratio",
        type: "string",
        ui: {
          defaultValue: "16/9",
        },
      },
    ],
  },
];

export default intlTemplate(
  {
    name: "Image",
    label: "Image",
    type: "object",
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
  [...settings]
);
