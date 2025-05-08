import type { Template } from "tinacms";

export const languages = ["de", "en"] as const;
const languageToLabel: Record<(typeof languages)[number], string> = {
  de: "German",
  en: "English",
};

export default (
  template: Template & { type: string },
  extraFields?: Template["fields"]
): Template & { type: string } => {
  const intlFields: Template["fields"] = languages.map((language) => {
    return {
      name: language,
      label: languageToLabel[language],
      type: "object",
      fields: template.fields,
    };
  });

  return {
    name: template.name,
    label: template.label,
    type: template.type,
    fields: extraFields ? [...intlFields, ...extraFields] : [...intlFields],
  };
};
