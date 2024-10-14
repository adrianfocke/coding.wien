import type { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";

/** Container-like components default widths */
export const DEFAULT_WIDTH: Responsive<string> = {
  /** Phones (portrait) */
  initial: "200px",
  /** Phones (landscape) 520px */
  xs: "300px",
  /** Tablets (portrait) 768px */
  sm: "500px",
  /** Tablets (landscape) 1024px */
  md: "800px",
  /** Laptops 1280px */
  lg: "800px",
  /** Desktops 1640px */
  xl: "800px",
};

export const DEFAULT_HEIGHT: Responsive<string> = {
  /** Phones (portrait) */
  initial: "100px",
  /** Phones (landscape) 520px */
  xs: "200px",
  /** Tablets (portrait) 768px */
  sm: "200px",
  /** Tablets (landscape) 1024px */
  md: "200px",
  /** Laptops 1280px */
  lg: "400px",
  /** Desktops 1640px */
  xl: "400px",
};
