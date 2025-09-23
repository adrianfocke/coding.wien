import type { Breakpoint } from "@radix-ui/themes/dist/cjs/props/prop-def";
import type { Template } from "tinacms";
import type { LayoutProp } from "../types";
import { isSizeUnit, Regex } from "../validation";

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

export const layoutProps = ["height", "width"] as const;

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
  availableLayoutProps: [Partial<(typeof layoutProps)[number]>]
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
            return {
              name: layoutProp,
              label: layoutProp,
              type: "string",
              ui: {
                validate: (value) =>
                  isSizeUnit(
                    value,
                    layoutProp.includes("padding") ||
                      layoutProp.includes("margin")
                      ? Regex.radixSizeUnit
                      : Regex.sizeUnit
                  ),
              },
            };
          }),
        };
      }),
    },
  ];
};