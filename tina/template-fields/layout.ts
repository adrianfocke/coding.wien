import type { Breakpoint } from "@radix-ui/themes/dist/cjs/props/prop-def";
import type { Template } from "tinacms";
import { isSizeUnit, Regex } from "../validation";

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

const layoutProps = [
  "height",
  "width",
  "paddingTop",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
] as const;

type LayoutProp = (typeof layoutProps)[number];
export type ComponentLayout = Record<Breakpoint, Partial<LayoutProp>>;

export const getLayoutProps =
  (layout: ComponentLayout | undefined) => (layoutProp: LayoutProp) => ({
    initial: layout?.["initial"]?.[layoutProp],
    xs: layout?.["xs"]?.[layoutProp],
    sm: layout?.["sm"]?.[layoutProp],
    md: layout?.["md"]?.[layoutProp],
    lg: layout?.["lg"]?.[layoutProp],
    xl: layout?.["xl"]?.[layoutProp],
  });

export default {
  name: "layout",
  label: "Layout",
  type: "object",
  fields: breakpoints.map((breakpoint) => {
    return {
      name: breakpoint,
      label: breakpointToLabel[breakpoint],
      type: "object",
      fields: layoutProps.map((layoutProp) => {
        return {
          name: layoutProp,
          label: layoutProp,
          type: "string",
          ui: {
            validate: (value) =>
              isSizeUnit(
                value,
                layoutProp.includes("padding")
                  ? Regex.radixSizeUnit
                  : Regex.sizeUnit
              ),
          },
        };
      }),
    };
  }),
} as Template["fields"][number];