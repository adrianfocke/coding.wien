import type { Template } from "tinacms";
import animation from "../../tina/template-fields/animation";
import intl from "../../tina/template-fields/intl";
import layout from "../../tina/template-fields/layout";
import ButtonTemplate from "../Button/ButtonTemplate";

const fields: Template["fields"] = [
  {
    name: "content",
    label: "Highlighted Section Content",
    type: "rich-text",
    templates: [ButtonTemplate],
    overrides: {
      // TODO save elsewhere and reuse
      toolbar: ["embed", "heading", "image", "link"],
    },
  },
];

export default {
  name: "HighlightedSection",
  label: "Highlighted Section",
  fields: [animation, layout, intl(fields)],
} as Template;
