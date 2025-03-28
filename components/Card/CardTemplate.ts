import type { Template } from "tinacms";
import animation from "../../tina/template-fields/animation";
import intl from "../../tina/template-fields/intl";
import layout from "../../tina/template-fields/layout";

const fields: Template["fields"] = [
  {
    name: "content",
    label: "Card Content",
    type: "object",
    fields: [
      { name: "name", label: "Name", type: "string" },
      { name: "pronouns", label: "Pronouns", type: "string" },
      { name: "profession", label: "Profession", type: "string" },
      { name: "email", label: "Email", type: "string" },
      {
        name: "statement",
        label: "Statement",
        type: "string",
        component: "textarea",
      } as any,
      { name: "portrait", label: "Portrait", type: "image" },
    ],
  },
];

export default {
  name: "Card",
  fields: [animation, layout, intl(fields)],
} as Template;