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
  RadiusField,
  TextColorField,
  ExtraMarginBottomField,
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
        RadiusField,
        {
          ...TextSizeField,
          options: ["1", "2", "3"],
        },
        TextColorField,
        AlignField,
        MarginXField,
        MarginYField,
        ExtraMarginBottomField,
        PaddingXField,
        PaddingYField,
      ],
    },
  ],
} as Template;
