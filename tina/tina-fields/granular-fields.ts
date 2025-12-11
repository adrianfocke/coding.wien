import type { Template } from "tinacms";

const radixUnitsOneToNine = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
] as const;
const radixUnitsMinusNineToZero = [
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
] as const;

export const aspectRatios = [
  "16/9",
  "4/3",
  "1/1",
  "3/4",
  "5/1",
] as const;

export const aspectRatioMap: Record<(typeof aspectRatios)[number], number> = {
  "16/9": 16 / 9,
  "4/3": 4 / 3,
  "1/1": 1,
  "3/4": 3 / 4,
  "5/1": 5 / 1,
};

export const AspectRatioField: Template["fields"][number] = {
  name: "aspectRatio",
  label: "Aspect Ratio",
  type: "string",
  options: [...aspectRatios],
};

export const AlignField: Template["fields"][number] = {
  name: "align",
  label: "Align",
  type: "string",
  options: ["left", "center", "right"],
 
};

export const MarginXField: Template["fields"][number] = {
  name: "marginX",
  label: "Horizontal Margin Size",
  type: "string",
  options: [...radixUnitsMinusNineToZero, ...radixUnitsOneToNine],
};

export const MarginYField: Template["fields"][number] = {
  name: "marginY",
  label: "Vertical Margin Size",
  type: "string",
  options: [...radixUnitsMinusNineToZero, ...radixUnitsOneToNine],
};

export const PaddingXField: Template["fields"][number] = {
  name: "paddingX",
  label: "Horizontal Padding Size",
  type: "string",
  options: [...radixUnitsMinusNineToZero, ...radixUnitsOneToNine],
};

export const PaddingYField: Template["fields"][number] = {
  name: "paddingY",
  label: "Vertical Padding Size",
  type: "string",
  options: [...radixUnitsMinusNineToZero, ...radixUnitsOneToNine],
};

export const TextSizeField: Template["fields"][number] = {
  name: "textSize",
  label: "Text Size",
  type: "string",
  options: [...radixUnitsOneToNine],
};