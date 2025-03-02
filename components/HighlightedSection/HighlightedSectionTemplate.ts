import type { Template } from "tinacms";
import animation from "../../tina/template-fields/animation";
import intl from "../../tina/template-fields/intl";
import size from "../../tina/template-fields/size";

const fields: Template["fields"] = [
  {
    name: "content",
    label: "Highlighted Section Content",
    type: "rich-text",
  },
];

export default {
  name: "HighlightedSection",
  label: "Highlighted Section",
  fields: [animation, size, intl(fields)],
} as Template;