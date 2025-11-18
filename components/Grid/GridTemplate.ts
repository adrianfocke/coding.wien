import intlTemplate from "../../tina/templates/intlTemplate";

export default intlTemplate({
  name: "Grid",
  label: "Grid",
  type: "object",
  fields: [
    {
      name: "items",
      label: "Grid Type",
      type: "object",
      list: true,
      fields: [
        {
          name: "content",
          label: "Content",
          type: "rich-text",
          templates: [
            {
              name: "Heading",
              label: "Heading",
              fields: [{ name: "heading", label: "Heading", type: "string" }],
            },
            {
              name: "Image",
              label: "Image",
              fields: [
                { name: "image", label: "Image", type: "image" },
                {
                  name: "text",
                  label: "Text Overlay",
                  type: "rich-text",
                  toolbarOverride: ["bold"],
                },
              ],
            },
            {
              name: "Slideshow",
              label: "Slideshow",
              fields: [
                {
                  name: "slides",
                  label: "Slides",
                  type: "object",
                  list: true,
                  fields: [
                    { name: "image", label: "Image", type: "image" },
                    {
                      name: "text",
                      label: "Text Overlay",
                      type: "rich-text",
                      toolbarOverride: ["bold"],
                    },
                  ],
                },
              ],
            },
          ],
          toolbarOverride: ["embed"],
        },
      ],
      ui: {
        itemProps: (item: any) => {
          const label =
            item?.content?.children?.[0]?.children?.[0]?.text ||
            item?.content?.children?.[0]?.text ||
            (typeof item?.gridItem === "string" ? item.content : undefined) ||
            "Grid item";

          return { label };
        },
      },
    },
  ],
});
