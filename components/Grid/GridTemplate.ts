import type { Template } from "tinacms";
import intlTemplate from "../../tina/templates/intlTemplate";
import { layout } from "../../tina/templates/layout";

const gridTypes = ["grid", "card"] as const;
export type GridType = (typeof gridTypes)[number];

const settings: Template["fields"] = [
  {
    name: "variant",
    label: "Grid variant",
    type: "string",
    options: [...gridTypes],
  },
];

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
          itemProps: (item: any) => {
            const label =
              item?.gridItem?.children?.[0]?.children?.[0]?.text ||
              item?.gridItem?.children?.[0]?.text ||
              (typeof item?.gridItem === "string"
                ? item.gridItem
                : undefined) ||
              "Grid item";

            return { label };
          },
        },
      },
    ],
  },
  [...settings, ...layout(["columns", "gap", "marginY"])]
);
