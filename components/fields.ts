import type { Template } from "tinacms";

const radixResponsiveUnits = [
  "-9",
  "-8",
  "-7",
  "-6",
  "-5",
  "-4",
  "-3",
  "-2",
  "-1",
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
];

export const MarginField: Template["fields"][number] = {
  name: "margin",
  label: "Margin",
  type: "object",
  fields: [
    {
      name: "top",
      label: "Top",
      type: "string",
      options: radixResponsiveUnits,
    },
    {
      name: "bottom",
      label: "Bottom",
      type: "string",
      options: radixResponsiveUnits,
    },
    {
      name: "right",
      label: "Right",
      type: "string",
      options: radixResponsiveUnits,
    },
    {
      name: "left",
      label: "Left",
      type: "string",
      options: radixResponsiveUnits,
    },
  ],
};
