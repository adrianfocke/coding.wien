import type { Breakpoint } from "@radix-ui/themes/dist/cjs/props/prop-def";
import type { Template } from "tinacms";
import type { LayoutProp } from "../types";
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

export const layoutProps = [
  "height",
  "width",
  "paddingTop",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "marginTop",
  "marginBottom",
  "marginLeft",
  "marginRight",
] as const;

const transformViewportUnitIntoPixels = (
  windowInnerHeight: number | undefined,
  vhUnit?: string
) => {
  if (windowInnerHeight && vhUnit) {
    // Use the provided windowInnerHeight, never access window directly
    return (windowInnerHeight * Number(vhUnit.slice(0, 2))) / 100 + "px";
  }
  return vhUnit;
};

export const getLayoutProps = (
  layout: Record<Breakpoint, Partial<LayoutProp>> | undefined,
  windowInnerHeight?: number
) => {
  return (layoutProp: LayoutProp) => {
    if (
      (layoutProp === "height" || layoutProp === "width") &&
      windowInnerHeight
    ) {
      return {
        initial: transformViewportUnitIntoPixels(
          windowInnerHeight,
          layout?.["initial"]?.[layoutProp]
        ),
        xs: transformViewportUnitIntoPixels(
          windowInnerHeight,
          layout?.["xs"]?.[layoutProp]
        ),
        sm: transformViewportUnitIntoPixels(
          windowInnerHeight,
          layout?.["sm"]?.[layoutProp]
        ),
        md: transformViewportUnitIntoPixels(
          windowInnerHeight,
          layout?.["md"]?.[layoutProp]
        ),
        lg: transformViewportUnitIntoPixels(
          windowInnerHeight,
          layout?.["lg"]?.[layoutProp]
        ),
        xl: transformViewportUnitIntoPixels(
          windowInnerHeight,
          layout?.["xl"]?.[layoutProp]
        ),
      };
    }

    return {
      initial: layout?.["initial"]?.[layoutProp],
      xs: layout?.["xs"]?.[layoutProp],
      sm: layout?.["sm"]?.[layoutProp],
      md: layout?.["md"]?.[layoutProp],
      lg: layout?.["lg"]?.[layoutProp],
      xl: layout?.["xl"]?.[layoutProp],
    };
  };
};

export default [
  {
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
] as Template["fields"];