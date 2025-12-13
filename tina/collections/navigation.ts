import { TextField, type Collection } from "tinacms";
import {
  LinkField,
  MarginXField,
  MarginYField,
  PaddingXField,
  PaddingYField,
} from "../templating/granular-fields";
import { createIntlField } from "../templating/special-fields";
import TextTemplate from "../../components/Text/TextTemplate";

export default {
  label: "Navigation Menu",
  name: "navigation",
  path: "content/navigation",
  format: "json",
  fields: [
    {
      name: "logo",
      label: "Logo",
      type: "object",
      fields: TextTemplate.fields,
    },
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
