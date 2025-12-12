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
import { createResponsiveField } from "../../tina/tina-fields/component-fields";
import { checkForPositveNumber } from "../../tina/utils";

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
      fields: [
        ...createResponsiveField({
          name: "numberOfSlidesShown",
          label: "Number of Slides Shown",
          type: "number",
          ui: {
            validate: (value: number) => checkForPositveNumber(value),
          },
        }),
        MarginXField,
        MarginYField,
        PaddingXField,
        PaddingYField,
      ],
    },
  ],
} as Template;
