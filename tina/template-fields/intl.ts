import type { Template } from "tinacms";

const languages = ["de", "en"] as const;

const languageToLabel: Record<(typeof languages)[number], string> = {
  de: "German",
  en: "English",
};

export type IntlProp = {
  content: any;
};

export default (
  customFields: Template["fields"]
): Template["fields"][number] => {
  return {
    name: "content",
    label: "Content",
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
