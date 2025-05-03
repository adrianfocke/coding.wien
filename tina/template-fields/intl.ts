import type { Template } from "tinacms";

export const languages = ["de", "en"] as const;
export type Language = (typeof languages)[number];

export const languageToLabel: Record<(typeof languages)[number], string> = {
  de: "German",
  en: "English",
};

/** This wrapper adds internationalization to template fields */
export default (
  customFields: Template["fields"]
): Template["fields"][number] => {
  return {
    name: "content",
    label: customFields[0].label ?? "Content",
    type: "object",
    fields: languages.map((language) => {
      return {
        name: language,
        label: languageToLabel[language],
        type: "object",
        fields: customFields,
      };
    }),
  };
};
