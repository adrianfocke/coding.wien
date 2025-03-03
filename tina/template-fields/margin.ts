import type { Template } from "tinacms";

const options = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "-1",
  "-2",
  "-3",
  "-4",
  "-5",
  "-6",
  "-7",
  "-8",
  "-9",
];

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
      options,
    },
    {
      name: "marginBottom",
      label: "Margin Bottom",
      type: "string",
      options,
    },
  ],
} as Template["fields"][number];
