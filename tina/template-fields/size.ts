import type { Breakpoint } from "@radix-ui/themes/dist/cjs/props/prop-def";
import type { Template } from "tinacms";

const breakpoints: Breakpoint[] = [
  "initial",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
] as const;

const breakpointToLabel: Record<(typeof breakpoints)[number], string> = {
  initial: "Phones (portrait)",
  xs: "Phones (landscape)",
  sm: "Tablets (portrait)",
  md: "Tablets (landscape)",
  lg: "Laptops",
  xl: "Desktops",
};

const isSizeUnit = (value: string) => {
  const regex = /^(|[0-9]+(\.[0-9]+)?(px|vw|%|vh))$/;
  return regex.test(value) ? undefined : "Size must be a valid size unit";
};

export type SizeProp = Record<
  Breakpoint,
  Partial<{ height: string; width: string }>
>;

export default {
  name: "size",
  label: "Size",
  type: "object",
  fields: breakpoints.map((breakpoint) => {
    return {
      name: breakpoint,
      label: breakpointToLabel[breakpoint],
      type: "object",
      fields: [
        {
          name: "width",
          label: "Width",
          type: "string",
          ui: {
            validate: (value) => isSizeUnit(value),
          },
        },
        {
          name: "height",
          label: "Height",
          type: "string",
          ui: {
            validate: (value) => isSizeUnit(value),
          },
        },
      ],
    };
  }),
} as Template["fields"][number];
