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
    name: "Heading",
    label: "Heading",
    type: "object",
    fields: [{ name: "heading", label: "Heading", type: "string" }],
  },
  [...settings]
);
