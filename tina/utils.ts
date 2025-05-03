import type { Template } from "tinacms";
import animation from "./template-fields/animation";
import intl, { languages, languageToLabel } from "./template-fields/intl";
import layout from "./template-fields/layout";

export const sanitizeFilenameForURL = (filename: string) =>
  filename
    .toLowerCase()
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue")
    .replaceAll("ß", "ss")
    .replaceAll(" ", "-");

export const exportTemplate = (template: {
  name: string;
  settings: Template["fields"];
  fields: Template["fields"];
}): Template => {
  return {
    name: template.name,
    fields: [
      animation,
      layout,
      {
        name: "settings",
        label: "Settings",
        type: "object",
        fields: template.settings,
      },
      intl(template.fields),
    ],
  };
};

export const exportIntlTemplate = (
  template: Template & { type: string }
): Template & { type: string } => {
  return {
    name: template.name,
    label: template.label,
    type: template.type,
    fields: languages.map((language) => {
      return {
        name: language,
        label: languageToLabel[language],
        type: "object",
        fields: template.fields,
      };
    }),
  };
};