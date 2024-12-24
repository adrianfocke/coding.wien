import type { Template } from "tinacms";
import type { ToolbarOverrideType } from "tinacms/dist/toolkit/fields/plugins/mdx-field-plugin/plate/toolbar/toolbar-overrides";
import { numberGreaterThanZero } from "../utils/validations";

export type GenerateMetadataProps = {
  params: Promise<{ filename: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const HeightUnits = ["px", "%", "vw", "vh"];

export const Height: Template["fields"][number] = {
  name: "height",
  label: "Height",
  type: "object",
  fields: [
    {
      name: "initial",
      label: "Phones (portrait)",
      type: "object",
      fields: [
        {
          name: "height",
          label: "Height",
          type: "number",
          ui: {
            validate: (value) => numberGreaterThanZero(value),
          },
          required: true,
        },
        {
          name: "unit",
          label: "Height unit",
          type: "string",
          options: HeightUnits,
          required: true,
        },
      ],
    },
    {
      name: "xs",
      label: "Phones (landscape)",
      type: "object",
      fields: [
        {
          name: "height",
          label: "Height",
          type: "number",
          ui: {
            validate: (value) => numberGreaterThanZero(value),
          },
          required: true,
        },
        {
          name: "unit",
          label: "Height unit",
          type: "string",
          options: HeightUnits,
          required: true,
        },
      ],
    },
    {
      name: "sm",
      label: "Tablets (portrait)",
      type: "object",
      fields: [
        {
          name: "height",
          label: "Height",
          type: "number",
          ui: {
            validate: (value) => numberGreaterThanZero(value),
          },
          required: true,
        },
        {
          name: "unit",
          label: "Height unit",
          type: "string",
          options: HeightUnits,
          required: true,
        },
      ],
    },
    {
      name: "md",
      label: "Tablets (landscape)",
      type: "object",
      fields: [
        {
          name: "height",
          label: "Height",
          type: "number",
          ui: {
            validate: (value) => numberGreaterThanZero(value),
          },
          required: true,
        },
        {
          name: "unit",
          label: "Height unit",
          type: "string",
          options: HeightUnits,
          required: true,
        },
      ],
    },
    {
      name: "lg",
      label: "Laptops",
      type: "object",
      fields: [
        {
          name: "height",
          label: "Height",
          type: "number",
          ui: {
            validate: (value) => numberGreaterThanZero(value),
          },
          required: true,
        },
        {
          name: "unit",
          label: "Height unit",
          type: "string",
          options: HeightUnits,
          required: true,
        },
      ],
    },
    {
      name: "xl",
      label: "Desktops",
      type: "object",
      fields: [
        {
          name: "height",
          label: "Height",
          type: "number",
          ui: {
            validate: (value) => numberGreaterThanZero(value),
          },
          required: true,
        },
        {
          name: "unit",
          label: "Height unit",
          type: "string",
          options: HeightUnits,
          required: true,
        },
      ],
    },
  ],
};

export const customToolbar: ToolbarOverrideType[] = [
  "embed",
  "heading",
  "image",
  "link",
  "bold",
  "italic",
];

export const JSXElements: Template["fields"][number] = {
  name: "elements",
  label: "Elements",
  type: "object",
  list: true,
  fields: [
    {
      name: "element",
      label: "Element",
      type: "rich-text",
      toolbarOverride: customToolbar,
    },
  ],
};
