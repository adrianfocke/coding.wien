import type { Template } from "tinacms";
import { createIntlField } from "../../tina/templating/special-fields";
import {
  AlignField,
  TextSizeField,
  MarginXField,
  MarginYField,
  PaddingXField,
  PaddingYField,
  LinkField,
} from "../../tina/templating/granular-fields";

export default {
  name: "Button",
  label: "Button",
  fields: [
    LinkField,
    {
      name: "content",
      label: "Content",
      type: "object",
      fields: [
        ...createIntlField({
          name: "text",
          label: "Text",
          type: "string",
          ui: { component: "textarea" },
        }),
      ],
    },
    {
      name: "settings",
      label: "Settings",
      type: "object",
      fields: [
        {
          name: "variant",
          label: "Variant",
          type: "string",
          options: ["classic", "solid", "soft", "surface", "outline", "ghost"],
        },
        {
          ...TextSizeField,
          options: ["1", "2", "3"],
        },
        AlignField,
        MarginXField,
        MarginYField,
        PaddingXField,
        PaddingYField,
      ],
    },
  ],
} as Template;
