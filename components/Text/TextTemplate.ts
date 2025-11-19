import type { Template } from "tinacms";
import HeadingTemplate from "../Heading/HeadingTemplate";
import { wrapWithLanguages } from "../helpers";
import ImageTemplate from "../Image/ImageTemplate";
import SlideshowTemplate from "../Slideshow/SlideshowTemplate";

const fields: Template["fields"] = [
  {
    name: "text",
    label: "Text",
    type: "rich-text",
    toolbarOverride: ["bold", "embed"],
    templates: [
      HeadingTemplate("forRichTextRendering"),
      ImageTemplate("forRichTextRendering"),
      SlideshowTemplate("forRichTextRendering"),
    ],
  },
];

export default {
  name: "Text",
  label: "Text",
  fields: wrapWithLanguages(fields),
};
