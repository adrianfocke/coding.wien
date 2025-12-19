import type { Template } from "tinacms";
import { createIntlField } from "../../tina/templating/special-fields";
import {
  AlignField,
  TextSizeField,
  MarginXField,
  MarginYField,
  PaddingXField,
  PaddingYField,
  HasContainerField,
  FontField,
  TextColorField,
  ExtraMarginBottomField,
} from "../../tina/templating/granular-fields";

export default {
  name: "Heading",
  label: "Heading",
  fields: [
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
        TextColorField,
        FontField,
        MarginXField,
        MarginYField,
        ExtraMarginBottomField,
        PaddingXField,
        PaddingYField,
      ],
    },
  ],
} as Template;