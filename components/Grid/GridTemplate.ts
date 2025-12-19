import type { Template } from "tinacms";
import ImageTemplate from "../Image/ImageTemplate";
import {
  ColumnsField,
  ExtraMarginBottomField,
  GapField,
  HasContainerField,
  MarginXField,
  MarginYField,
  PaddingXField,
  PaddingYField,
} from "../../tina/templating/granular-fields";
import HeadingTemplate from "../Heading/HeadingTemplate";
import TextTemplate from "../Text/TextTemplate";
import ButtonTemplate from "../Button/ButtonTemplate";
import { createResponsiveField } from "../../tina/templating/special-fields";
import SlideshowTemplate from "../Slideshow/SlideshowTemplate";

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
                SlideshowTemplate,
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
      fields: [
        HasContainerField,
        GapField,
        ...createResponsiveField(ColumnsField),
        MarginXField,
        MarginYField,
        ExtraMarginBottomField,
        PaddingXField,
        PaddingYField,
      ],
    },
  ],
} as Template;
