import type { Collection, Template } from "tinacms";

export default {
  label: "Navigation Menu",
  name: "navigation",
  path: "content/navigation",
  format: "json",
  fields: [{ name: "logo", label: "Logo", type: "string" }],
} as Collection;
