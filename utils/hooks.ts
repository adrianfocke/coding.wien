import type {
  Breakpoint,
  Responsive,
} from "@radix-ui/themes/dist/cjs/props/prop-def";
import { useEffect, useState } from "react";

const breakpoints: { min: number; max: number; label: Breakpoint }[] = [
  { min: 0, max: 300, label: "initial" },
  { min: 300, max: 520, label: "xs" },
  { min: 520, max: 768, label: "sm" },
  { min: 768, max: 1024, label: "md" },
  { min: 1024, max: 1280, label: "lg" },
  { min: 1280, max: Infinity, label: "xl" },
];

const getBreakpointRange = (windowWidth: number): Breakpoint => {
  for (const range of breakpoints) {
    if (windowWidth >= range.min && windowWidth < range.max) {
      return range.label;
    }
  }
  return "initial";
};

/** Returns the current element width in pixels */
export const useCalculatePixelWidth = (
  widthInPixelsOrVw: Responsive<string>
) => {
  if (typeof window === "undefined") {
    return 0;
  }

  const [currentWidth, setCurrentWidth] = useState(
    widthInPixelsOrVw[getBreakpointRange(window.innerWidth)]
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      const newWidth = widthInPixelsOrVw[getBreakpointRange(window.innerWidth)];
      setCurrentWidth(newWidth);
    });

    return () => window.removeEventListener("resize", () => {});
  }, [window]);

  return parseInt(currentWidth);
};
