import type { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";

const BREAKPOINTS = {
  initial: 300 /* Phones (portrait) */,
  xs: 520 /* Phones (landscape) */,
  sm: 768 /* Tablets (portrait) */,
  md: 1024 /* Tablets (landscape) */,
  lg: 1280 /* Laptops */,
  xl: 1640 /* Desktops */,
};

const vwToPixels = (vw: number, windowWidth: number) =>
  (vw * windowWidth) / 100;

export const calculateWidthInPixelsForCurrentScreen = (
  widths: Responsive<string>
): number => {

  if (typeof window === "undefined") {
    return 0;
  } 

  const windowWidth = window.screen.width;

  // Get the breakpoints as an array of tuples: [[key, value], [key, value], ...]
  const breakpointEntries = Object.entries(BREAKPOINTS) as [
    keyof typeof BREAKPOINTS,
    number
  ][];

  // Find the largest breakpoint that is still smaller than or equal to windowWidth
  const matchingBreakpoint = breakpointEntries
    .reverse() // Reverse the order to start with the largest breakpoint
    .find(([_, breakpointValue]) => windowWidth >= breakpointValue);

  // If no breakpoint is found, return the initial width as a fallback
  if (!matchingBreakpoint) return (widths as any).initial;

  const [matchingKey] = matchingBreakpoint;

  // Return the width for the matching breakpoint
  let width = widths[matchingKey];

  if (width.includes("vw")) {
    width = vwToPixels(parseInt(width), windowWidth);
  }

  return parseInt(width);
};
