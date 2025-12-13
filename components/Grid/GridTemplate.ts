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
import ButtonTemplate from "../Button/ButtonTemplate";

export default {
  name: "Grid",
  label: "Grid",
  fields: [
    {
      name: "content",
      label: "Content",
      type: "object",
      fields: [
        {
          name: "items",
          label: "Grid Items",
          type: "object",
          list: true,
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
