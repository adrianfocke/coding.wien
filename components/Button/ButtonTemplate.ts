import type { Template } from "tinacms";
import animation from "../../tina/template-fields/animation";
import intl from "../../tina/template-fields/intl";
import layout from "../../tina/template-fields/layout";

// Settings should not be intled
const settings: Template["fields"][number] = {
  name: "settings",
  label: "Slideshow settings",
  type: "object",
  fields: [
    {
      name: "variant",
      label: "Button Variant",
      type: "string",
      options: ["classic", "solid", "soft", "outline", "surface", "ghost"],
    },
  ],
};

const fields: Template["fields"] = [
  {
    name: "content",
    label: "Button Content",
    type: "string",
  },
];

export default {
  name: "Button",
  fields: [animation, layout, settings, intl(fields)],
} as Template;
