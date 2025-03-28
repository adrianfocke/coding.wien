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
      name: "nextSlideTimeout",
      label: "Next slide timeout",
      type: "number",
    },
  ],
};

const fields: Template["fields"] = [
  {
    name: "slides",
    label: "Slides",
    type: "string",
  },
];

export default {
  name: "Slideshow",
  fields: [animation, layout, settings, intl(fields)],
} as Template;
