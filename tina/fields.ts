import type { Template } from "tinacms";
import { customToolbar } from "./template-fields/rt-elements";

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

/** Parses a template as field for use in collections
 * @param identifier must be alphabet chars only
 */
export const templateAsField = (
  template: Template,
  identifier?: string
): Template["fields"][number] => {
  return {
    name: identifier ? `${template.name}_${identifier}` : template.name,
    label: identifier ? `${template.name} (${identifier})` : template.name,
    type: "object",
    fields: template.fields,
  };
};