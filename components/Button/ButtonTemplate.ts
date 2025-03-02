import type { Template } from "tinacms";
import animation from "../../tina/template-fields/animation";
import intl from "../../tina/template-fields/intl";
import size from "../../tina/template-fields/size";

const fields: Template["fields"] = [
  {
    name: "content",
    label: "Button Content",
    type: "string",
  },
];

export default {
  name: "Button",
  fields: [
    animation,
    size,
    {
      name: "variant",
      label: "Button Variant",
      type: "string",
      options: ["classic", "solid", "soft", "outline", "surface", "ghost"],
    },
    intl(fields),
  ],
} as Template;
