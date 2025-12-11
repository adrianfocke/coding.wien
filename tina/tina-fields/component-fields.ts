import type { Template } from "tinacms";

export const languages = ["de", "en"];

export const createIntlField = (field: Template["fields"][number]) =>
  languages.map((locale) => ({
    ...field,
    name: locale,
    label: `${field.label} (${locale})`,
  }));
