import type { Template } from "tinacms";
import animation from "../../tina/template-fields/animation";
import intl from "../../tina/template-fields/intl";
import margin from "../../tina/template-fields/margin";
import rtElements from "../../tina/template-fields/rt-elements";
import size from "../../tina/template-fields/size";

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
    type: "object",
    fields: [rtElements],
  },
];

export default {
  name: "Slideshow",
  fields: [animation, size, margin, settings, intl(fields)],
} as Template;
