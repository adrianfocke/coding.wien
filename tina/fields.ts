import type { Template } from "tinacms";

export type SpecialFieldKey = "referenceField" | "elements";

// TODO remove
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
    },
  ],
} as const;

export const ReferenceField = (collections: string[]) => ({
  type: "reference",
  name: "referenceField",
  label: "Reference Field",
  collections,
});
