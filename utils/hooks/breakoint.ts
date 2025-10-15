import type { Breakpoint } from "@radix-ui/themes/dist/cjs/props/prop-def";
import { useEffect, useState } from "react";

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState("initial");

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 520) setBreakpoint("xs");
      else if (width < 768) setBreakpoint("sm");
      else if (width < 1024) setBreakpoint("md");
      else if (width < 1280) setBreakpoint("lg");
      else setBreakpoint("xl");
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint as Breakpoint;
}
