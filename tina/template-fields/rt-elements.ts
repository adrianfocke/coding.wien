import type { Template } from "tinacms";
import { customToolbar } from "../types";

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
