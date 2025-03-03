import type { Template } from "tinacms";
import { isSizeUnit } from "../utils";

export type MarginProp = {
  marginTop: string;
  marginBottom: string;
};

export default {
  name: "margin",
  label: "Margin",
  type: "object",
  fields: [
    {
      name: "marginTop",
      label: "Margin Top",
      type: "string",
      ui: {
        validate: (value) => isSizeUnit(value),
      },
    },
    {
      name: "marginBottom",
      label: "Margin Bottom",
      type: "string",
      ui: {
        validate: (value) => isSizeUnit(value),
      },
    },
  ],
} as Template["fields"][number];
