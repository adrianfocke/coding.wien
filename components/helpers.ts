import type { Template } from "tinacms";

export type IntlElementFieldMap = Record<
  string,
  Record<(typeof languages)[number], string>
>;

export const languages = ["de", "en"] as const;

export const wrapWithLanguages = (
  fields: Template["fields"]
): Template["fields"] => {
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
