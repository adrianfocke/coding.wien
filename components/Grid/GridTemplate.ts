import type { Template } from "tinacms";
import ImageTemplate from "../Image/ImageTemplate";
import {
  ColumnsField,
  ExtraMarginBottomField,
  GapField,
  HasContainerField,
  IsCardField,
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
          ui: {
            itemProps: (item) => {
              console.log("Grid item:", item);
              return {
                label: `${item.blocks?.[0]?._template} ${
                  item.blocks?.length > 1
                    ? `and ${item.blocks?.length - 1} more`
                    : ""
                }`,
              };
            },
          },
        },
      ],
    },
    {
      name: "settings",
      label: "Settings",
      type: "object",
      fields: [
        IsCardField,
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
