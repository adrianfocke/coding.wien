import type { Collection, Template } from "tinacms";
import { wrapWithLanguages } from "../../components/helpers";

const fields: Template["fields"] = [
  { name: "logo", label: "Logo", type: "string" },
  {
    name: "links",
    label: "Links",
    type: "object",
    list: true,
    fields: [
      { name: "label", label: "Label", type: "string" },
      { name: "href", label: "URL", type: "reference", collections: ["page"]   },
    ],
    ui: {
      itemProps: (item: any) => {
        const label = item?.label || "Link";

        return { label };
      },
    },
  },
];

export default {
  label: "Navigation",
  name: "navigation",
  path: "content/navigation",
  format: "json",
  fields: wrapWithLanguages(fields),
} as Collection;
