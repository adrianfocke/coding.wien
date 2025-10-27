import type { Breakpoint } from "@radix-ui/themes/dist/cjs/props/prop-def";
import type { Template } from "tinacms";
import type { LayoutProp } from "../types";

const radixSizes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;
type RadixSize = (typeof radixSizes)[number];

const breakpoints: Exclude<Breakpoint, "initial">[] = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
] as const;

const breakpointToLabel: Record<(typeof breakpoints)[number], string> = {
  xs: "Phones",
  sm: "Tablets (portrait)",
  md: "Tablets (landscape)",
  lg: "Laptops",
  xl: "Desktops",
};

export const layoutProps = [
  "height",
  "width",
  "columns",
  "gap",
  "marginY",
] as const;

export const getLayoutProp = (
  layout:
    | Record<Exclude<Breakpoint, "initial">, Partial<LayoutProp>>
    | undefined
) => {
  return (layoutProp: LayoutProp) => {
    return {
      xs: layout?.["xs"]?.[layoutProp],
      sm: layout?.["sm"]?.[layoutProp],
      md: layout?.["md"]?.[layoutProp],
      lg: layout?.["lg"]?.[layoutProp],
      xl: layout?.["xl"]?.[layoutProp],
    };
  };
};

export const layout = (
  availableLayoutProps: (typeof layoutProps)[number][]
): Template["fields"] => {
  return [
    {
      name: "layout",
      label: "Layout",
      type: "object",
      fields: breakpoints.map((breakpoint) => {
        return {
          name: breakpoint,
          label: breakpointToLabel[breakpoint],
          type: "object",
          fields: availableLayoutProps.map((layoutProp) => {
            if (
              layoutProp === "columns" ||
              layoutProp === "gap" ||
              layoutProp === "marginY"
            ) {
              return {
                name: layoutProp,
                label: layoutProp,
                type: "string",
                options:
                  layoutProp === "columns"
                    ? [...radixSizes].filter((size) => size !== "0")
                    : [...radixSizes],
              };
            }

            // TODO add px validation
            if (layoutProp === "height" || layoutProp === "width") {
              return {
                name: layoutProp,
                label: layoutProp,
                type: "number",
              };
            }

            return {
              name: layoutProp,
              label: layoutProp,
              type: "string",
            };
          }),
        };
      }),
    } as any,
  ];
};
