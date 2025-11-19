import type { Template } from "tinacms";

export const wrapWithLanguages = (
  fields: Template["fields"]
): Template["fields"] => {
  const languages = ["de", "en"] as const;
  const languageToLabel: Record<(typeof languages)[number], string> = {
    de: "German",
    en: "English",
  };

  return languages.map((language) => {
    return {
      name: language,
      label: languageToLabel[language],
      type: "object",
      fields: fields,
    };
  });
};
