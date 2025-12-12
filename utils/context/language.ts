import { createContext } from "react";
import type { Language } from "../../tina/tina-fields/component-fields";

export const LanguageContext = createContext<Language>("en");
