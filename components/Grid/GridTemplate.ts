import intlTemplate from "../../tina/templates/intlTemplate";
import { layout } from "../../tina/templates/layout";

export default intlTemplate(
  {
    name: "Grid",
    label: "Grid",
    type: "object",
    fields: [
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
          },
        ],
      },
    ],
  },
  [...layout(["columns"])]
);
