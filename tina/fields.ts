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
