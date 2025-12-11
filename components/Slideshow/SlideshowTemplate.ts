import type { Template } from "tinacms";
import { ImageTemplate } from "../Image/ImageTemplate";
import {
  MarginXField,
  MarginYField,
  PaddingXField,
  PaddingYField,
} from "../../tina/tina-fields/granular-fields";
import HeadingTemplate from "../Heading/HeadingTemplate";
import TextTemplate from "../Text/TextTemplate";

export default {
  name: "Slideshow",
  label: "Slideshow",
  fields: [
    {
      name: "content",
      label: "Content",
      type: "object",
      fields: [
        {
          name: "blocks",
          label: "Content Blocks",
          type: "object",
          list: true,
          templates: [HeadingTemplate, TextTemplate, ImageTemplate],
        },
      ],
    },
    {
      name: "settings",
      label: "Settings",
      type: "object",
      fields: [MarginXField, MarginYField, PaddingXField, PaddingYField],
    },
  ],
} as Template;
