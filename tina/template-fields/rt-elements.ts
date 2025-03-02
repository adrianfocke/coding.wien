import type { Template } from "tinacms";

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
    },
  ],
} as Template["fields"][number];
