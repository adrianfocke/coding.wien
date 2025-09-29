import type { Template } from "tinacms";
import intlTemplate from "../../tina/templates/intlTemplate";
import { layout } from "../../tina/templates/layout";

const settings: Template["fields"] = [
  {
    name: "visibleCount",
    label: "Visible Count",
    type: "number",
    description: "Number of testimonials to show at once (1, 2, or 3)",
  },
];

export default intlTemplate(
  {
    name: "Testimonials",
    label: "Testimonials",
    type: "object",
    fields: [
      {
        name: "testimonials",
        label: "Testimonials",
        type: "object",
        list: true,
        fields: [
          { name: "heading", label: "Heading", type: "string" },
          { name: "text", label: "Text", type: "string" },
          { name: "author", label: "Author", type: "string" },
          { name: "image", label: "Image", type: "image" },
        ],
        ui: {
          itemProps(item) {
            return {
              label: item.heading ? `${item.heading}` : "Empty heading",
            };
          },
          defaultItem() {
            return {
              heading: "Add your heading",
              text: "Add your testimonial text",
              author: "Author name",
            };
          },
        },
      },
    ],
  },
  [...settings, ...layout(["columns"])]
);
