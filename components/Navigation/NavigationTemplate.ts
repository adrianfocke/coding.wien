import type { Template } from "tinacms";
import animation from "../../tina/template-fields/animation";
import intl from "../../tina/template-fields/intl";
import size from "../../tina/template-fields/size";

const fields: Template["fields"] = [
  {
    name: "links",
    label: "Navigation Links",
    type: "object",
    fields: [
      { name: "logo", label: "Logo", type: "string" },
      {
        name: "links",
        label: "Links",
        type: "object",
        list: true,
        ui: {
          itemProps(item) {
            return {
              label: item.link ? `${item.link}` : "Leer",
            };
          },
        },
        fields: [
          { name: "link", label: "Link Text", type: "string" },
          { name: "href", label: "Link Href", type: "string" },
        ],
      },
    ],
  },
];

export default {
  name: "Navigation",
  fields: [animation, size, intl(fields)],
} as Template;