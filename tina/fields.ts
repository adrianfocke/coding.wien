import type { Template } from "tinacms";
import { customToolbar } from "./types";

export const SEOField = {
  name: "seo",
  label: "SEO",
  type: "string",
  ui: {
    component: "textarea",
    description: "Descriptive information for better web search listing",
  },
};

export type SpecialFieldKey = "referenceField" | "elements";

export const RichTextField: Template["fields"][number] = {
  name: "elements",
  label: "Elements",
  type: "object",
  list: true,
  fields: [
    {
      name: "element",
      label: "Element",
      type: "rich-text",
      isBody: true,
      toolbarOverride: customToolbar,
    },
  ],
} as const;

export const ReferenceField = (collections: string[]) => ({
  type: "reference",
  name: "referenceField",
  label: "Reference Field",
  collections,
});

const LANGUAGES = [
  {
    type: "string",
    name: "de",
    label: "German",
    component: "textarea",
  },
  {
    type: "string",
    name: "en",
    label: "English",
    component: "textarea",
  },
];

export type IntlFieldType = Record<"de" | "en", string>;
export const IntlField = (name: string) => {
  return {
    name,
    label: name,
    type: "object",
    fields: [...LANGUAGES],
  };
};

export type Animation = "grow-in" | "ping" | "zoom-in-picture" | "flip";

export const Intl = (template: Template) => {
  let fields = null;

  template.fields.forEach((field) => {
    console.log("Field: ", field);
  });

  for (const language in LANGUAGES) {
    console.log(`${language}: ${LANGUAGES[language]}`);
  }

  return null;
};