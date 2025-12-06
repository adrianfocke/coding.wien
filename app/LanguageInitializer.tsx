"use client";

import { useEffect } from "react";

export function LanguageInitializer() {
  useEffect(() => {
    // Set language cookie based on browser language preference
    fetch("/api/set-language").catch(() => {
      // Silently fail - language cookie setting is not critical
    });
  }, []);

  return null;
}
