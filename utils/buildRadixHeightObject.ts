import type { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";

export default (height): Responsive<string> => {
  let radixHeightObject: Responsive<string> = {};

  for (const key in height) {
    radixHeightObject[key] = height[key].height + height[key].unit;
  }

  return radixHeightObject;
};
