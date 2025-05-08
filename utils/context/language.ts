import { createContext } from "react";
import type { Language } from "../../tina/types";

export const LanguageContext = createContext<Language>("en");
