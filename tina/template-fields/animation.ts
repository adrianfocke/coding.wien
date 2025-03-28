import type { Template } from "tinacms";

const animations = ["grow-in", "ping", "zoom-in-picture", "flip"] as const;
const animateOns = ["click", "visible-in-viewport"] as const;

export type ComponentAnimation = {
  animation: (typeof animations)[number];
  animateOn: (typeof animateOns)[number];
};

export default {
  name: "animation",
  label: "Animation",
  type: "object",
  fields: [
    {
      name: "animation",
      label: "Animation",
      type: "string",
      options: animations,
    },
    {
      name: "animateOn",
      label: "Animate on",
      type: "string",
      options: animateOns as unknown as [],
    },
  ],
} as Template["fields"][number];
