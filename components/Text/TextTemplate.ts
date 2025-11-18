import type { Template } from "tinacms";
import intlTemplate from "../../tina/templates/intlTemplate";

const settings: Template["fields"] = [
  {
    name: "settings",
    label: "Settings",
    type: "object",
    fields: [
      {
        name: "align",
        label: "Alignment",
        type: "string",
        options: ["left", "center", "right"],
        ui: {
          defaultValue: "left",
        },
      },
    ],
  },
];

export default intlTemplate(
  {
    name: "Text",
    label: "Text",
    type: "object",
    fields: [
      {
        name: "text",
        label: "Text",
        type: "rich-text",
        toolbarOverride: ["bold"],
      },
    ],
  },
  [...settings]
);
