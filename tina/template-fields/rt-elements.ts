import type { Template } from "tinacms";
import type { ToolbarOverrideType } from "tinacms/dist/toolkit/fields/plugins/mdx-field-plugin/plate/toolbar/toolbar-overrides";

export const customToolbar: ToolbarOverrideType[] = [
  "embed",
  "heading",
  "image",
  "link",
  "bold",
  "italic",
];

export default {
  name: "elements",
  label: "Elements",
  type: "object",
  list: true,
  fields: [
    {
      name: "element",
      label: "Element",
      type: "rich-text",
      toolbarOverride: customToolbar,
    },
  ],
} as Template["fields"][number];
