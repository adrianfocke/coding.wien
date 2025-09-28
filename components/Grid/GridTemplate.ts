import intlTemplate from "../../tina/templates/intlTemplate";
import { layout } from "../../tina/templates/layout";

export default intlTemplate(
  {
    name: "Grid",
    label: "Grid",
    type: "object",
    fields: [
      { name: "heading", label: "Heading", type: "string" },
      {
        name: "gridItems",
        label: "Grid Item",
        type: "object",
        list: true,
        fields: [
          {
            name: "gridItem",
            label: "Grid Item",
            type: "rich-text",
            toolbarOverride: ["heading", "bold", "image", "embed"],
          },
        ],
      },
    ],
  },
  [...layout(["columns", "gap"])]
);
