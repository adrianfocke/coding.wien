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
            overrides: { toolbar: ["bold", "image"] },
          },
        ],
        ui: {
          itemProps: (item) => {
            console.log("Item: ", item.gridItem.children[0].children[0].text);
            return {
              label: item.gridItem.children[0].children[0].text
                ? item.gridItem.children[0].children[0].text
                : "Grid item",
            };
          },
        },
      },
    ],
  },
  [...layout(["columns", "gap"])]
);
