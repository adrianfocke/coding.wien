"use client";
import { useEffect, useState } from "react";

type Breakpoint = "initial" | "sm" | "md" | "lg" | "xl";

/**
 * Hook to detect current breakpoint based on window width
 * Matches Radix UI breakpoints: initial (<640px), sm (640px+), md (768px+), lg (1024px+), xl (1280px+)
 */
export default function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("initial");

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setBreakpoint("initial");
      } else if (width < 768) {
        setBreakpoint("sm");
      } else if (width < 1024) {
        setBreakpoint("md");
      } else if (width < 1280) {
        setBreakpoint("lg");
      } else {
        setBreakpoint("xl");
      }
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
}
