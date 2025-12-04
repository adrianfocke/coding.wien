import { createContext } from "react";

export const TinaEditContext = createContext<{ isEditable: boolean }>({
  isEditable: true,
});
