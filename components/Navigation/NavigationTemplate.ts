import type { Template } from "tinacms";
import animation from "../../tina/template-fields/animation";
import intl from "../../tina/template-fields/intl";
import size from "../../tina/template-fields/size";

// Settings should not be intled
const settings: Template["fields"][number] = {
  name: "settings",
  label: "Slideshow settings",
  type: "object",
  fields: [
    {
      name: "variant",
      label: "Navigation variant",
      type: "string",
      options: ["main", "footer"]
    },
  ],
};

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
          { name: "text", label: "Link Text", type: "string" },
          { name: "href", label: "Link Href", type: "string" },
        ],
      },
    ],
  },
];

export default {
  name: "Navigation",
  fields: [animation, size, settings, intl(fields)],
} as Template;