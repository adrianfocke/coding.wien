import type { Template } from "tinacms";
import { exportTemplate } from "../../tina/utils";

const settings: Template["fields"] = [
  {
    name: "nextSlideTimeout",
    label: "Next slide timeout",
    type: "number",
  },
];

const fields: Template["fields"] = [
  {
    name: "reference",
    label: "Item",
    type: "reference",
    collections: ["project"],
  },
];

export default exportTemplate({
  name: "Slideshow",
  settings,
  fields,
});