import type { Template } from "tinacms";
import {
  AspectRatioField,
  AlignField,
  MarginXField,
  MarginYField,
  PaddingXField,
  PaddingYField,
} from "../../tina/tina-fields/granular-fields";
import HeadingTemplate from "../Heading/HeadingTemplate";
import TextTemplate from "../Text/TextTemplate";

export const ImageTemplate: Template = {
  name: "Image",
  label: "Image",
  fields: [
    {
      name: "content",
      label: "Content",
      type: "object",
      fields: [
        {
          name: "image",
          label: "Image",
          type: "image",
        },
        {
          name: "blocks",
          label: "Content Blocks",
          type: "object",
          list: true,
          templates: [HeadingTemplate, TextTemplate],
        },
      ],
    },
    {
      name: "settings",
      label: "Settings",
      type: "object",
      fields: [
        AspectRatioField,
        AlignField,
        MarginXField,
        MarginYField,
        PaddingXField,
        PaddingYField,
      ],
    },
  ],
} as Template;
