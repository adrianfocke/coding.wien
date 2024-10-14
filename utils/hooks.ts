import type {
  Breakpoint,
  Responsive,
} from "@radix-ui/themes/dist/cjs/props/prop-def";
import { useEffect, useState } from "react";

const breakpoints: { min: number; max: number; label: Breakpoint }[] = [
  { min: 0, max: 519, label: "initial" },
  { min: 520, max: 767, label: "xs" },
  { min: 768, max: 1023, label: "sm" },
  { min: 1024, max: 1279, label: "md" },
  { min: 1280, max: 1639, label: "lg" },
  { min: 1640, max: Infinity, label: "xl" },
];

const getBreakpointRange = (width: number): Breakpoint => {
  for (const range of breakpoints) {
    if (width >= range.min && width < range.max) {
      return range.label;
    }
  }
  return "initial";
};

/** Returns the current element width in pixels */
export const useCalculatePixelWidth = (width: Responsive<string>) => {
  if (typeof window === "undefined") {
    return 0;
  }

  const [currentWidth, setCurrentWidth] = useState(
    width[getBreakpointRange(window.innerWidth)]
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      const newWidth = width[getBreakpointRange(window.innerWidth)];
      setCurrentWidth(newWidth);
    });

    return () => window.removeEventListener("resize", () => {});
  }, [window]);

  return parseInt(currentWidth);
};
