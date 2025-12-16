import type { Collection } from "tinacms";
import {
  MarginXField,
  MarginYField,
  PaddingXField,
  PaddingYField,
} from "../templating/granular-fields";
import TextTemplate from "../../components/Text/TextTemplate";

export default {
  label: "Footer Menu",
  name: "footer",
  path: "content/footer",
  format: "json",
  fields: [
    {
      name: "links",
      label: "Links",
      type: "object",
      list: true,
      fields: TextTemplate.fields,
    },
    {
      name: "settings",
      label: "Settings",
      type: "object",
      fields: [MarginXField, MarginYField, PaddingXField, PaddingYField],
    },
  ],
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
} as Collection;
