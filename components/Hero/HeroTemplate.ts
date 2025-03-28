import type { Template } from "tinacms";
import animation from "../../tina/template-fields/animation";
import intl from "../../tina/template-fields/intl";
import layout from "../../tina/template-fields/layout";

const fields: Template["fields"] = [
  {
    name: "content",
    label: "Hero Content",
    type: "object",
    fields: [
      { name: "punchline", label: "Punchline", type: "string" },
      {
        name: "additionalPunchline",
        label: "Additional punchline",
        type: "string",
      },
      {
        name: "cta",
        label: "CTA",
        type: "object",
        list: true,
        fields: [
          { name: "text", label: "CTA Text", type: "string" },
          { name: "href", label: "CTA Href", type: "string" },
        ],
      },
    ],
  },
];

export default {
  name: "Hero",
  fields: [animation, layout, intl(fields)],
} as Template;