import type { Template } from "tinacms";
import ImageTemplate from "../Image/ImageTemplate";
import {
  MarginXField,
  MarginYField,
  PaddingXField,
  PaddingYField,
} from "../../tina/templating/granular-fields";
import HeadingTemplate from "../Heading/HeadingTemplate";
import TextTemplate from "../Text/TextTemplate";
import { createResponsiveField } from "../../tina/templating/special-fields";
import { checkForPositveNumber } from "../../tina/templating/validation";
import ButtonTemplate from "../Button/ButtonTemplate";

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
          templates: [
            ButtonTemplate,
            HeadingTemplate,
            ImageTemplate,
            TextTemplate,
          ],
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
        {
          name: "nextSlideTimeout",
          label: "Next Slide in seconds",
          type: "string",
          options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        },
        { name: "hasControls", label: "Show Controls", type: "boolean" },
        MarginXField,
        MarginYField,
        PaddingXField,
        PaddingYField,
      ],
    },
  ],
} as Template;
