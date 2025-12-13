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
  HasContainerField,
} from "../../tina/templating/granular-fields";

export default {
  name: "Text",
  label: "Text",
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
        HasContainerField,
        AlignField,
        TextSizeField,
        MarginXField,
        MarginYField,
        PaddingXField,
        PaddingYField,
      ],
    },
  ],
} as Template;
