import type { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";
import { BREAKPOINTS } from "../../utils/constants";

const vwToPixels = (vw: number, windowWidth: number) =>
  (vw * windowWidth) / 100;

export const calculateWidthInPixelsForCurrentScreen = (
  widths: Responsive<string>
): number => {
  if (typeof window === "undefined") {
    return 0;
  }

  const windowWidth = window.innerWidth;

  // Get the breakpoints as an array of tuples: [[key, value], [key, value], ...]
  const breakpointEntries = Object.entries(BREAKPOINTS) as [
    keyof typeof BREAKPOINTS,
    number
  ][];

  // Find the largest breakpoint that is still smaller than or equal to windowWidth
  const matchingBreakpoint = breakpointEntries
    .reverse() // Reverse the order to start with the largest breakpoint
    .find(([, breakpointValue]) => windowWidth >= breakpointValue);

  // If no breakpoint is found, return the initial width as a fallback
  if (!matchingBreakpoint) return widths["initial"] as number;

  const [matchingKey] = matchingBreakpoint;

  // Return the width for the matching breakpoint
  let width = widths[matchingKey];

  if (width.includes("vw")) {
    width = vwToPixels(parseInt(width), windowWidth);
  }

  return parseInt(width);
};
