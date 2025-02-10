import { createContext } from "react";
import type { Language } from "../../tina/template-fields/intl";

export const LanguageContext = createContext<Language>("en");
