import type { Collection, Template } from "tinacms";

export default {
  label: "Footer Menu",
  name: "footer",
  path: "content/footer",
  format: "json",
  fields: [{ name: "logo", label: "Logo", type: "string" }],
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
} as Collection;
