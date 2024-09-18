/** Add this tina field to make an object field localized */
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

const firstLetterUppercased = (string: string) =>
  `${string[0].toUpperCase()}${string.slice(1)}`;

export type IntlFieldType = Record<"de" | "en", string>;
export const IntlField = (name: string) => {
  return {
    name,
    label: firstLetterUppercased(name),
    type: "object",
    fields: [...LANGUAGES],
  };
};

export const StringField = (name: string) => {
  return {
    name,
    label: firstLetterUppercased(name),
    type: "string",
  };
};

export const WidthField: any = {
  name: "width",
  label: "Width",
  type: "object",
  fields: [
    { name: "initial", label: "initial", type: "string" },
    { name: "xs", label: "xs", type: "string" },
    { name: "sm", label: "sm", type: "string" },
    { name: "md", label: "md", type: "string" },
    { name: "lg", label: "lg", type: "string" },
    { name: "xl", label: "xl", type: "string" },
  ],
};
