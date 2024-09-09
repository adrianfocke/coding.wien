import type { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";

export const BREAKPOINTS = {
  initial: 300 /* Phones (portrait) */,
  xs: 520 /* Phones (landscape) */,
  sm: 768 /* Tablets (portrait) */,
  md: 1024 /* Tablets (landscape) */,
  lg: 1280 /* Laptops */,
  xl: 1640 /* Desktops */,
};

/** Container-like components default responsive widths */
export const DEFAULT_WIDTH: Responsive<string> = {
  initial: "90vw",
  xs: "90vw",
  sm: "90vw",
  md: "520px",
  lg: "700px",
  xl: "700px",
};
