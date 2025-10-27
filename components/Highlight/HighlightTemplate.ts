import intlTemplate from "../../tina/templates/intlTemplate";

export default intlTemplate({
  name: "Highlight",
  label: "Highlight",
  type: "object",
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "string",
    },
    {
      name: "punchline",
      label: "Punchline",
      type: "string",
    },
    {
      name: "text",
      label: "Text",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
    {
      name: "images",
      label: "Image",
      type: "object",
      fields: [
        { name: "image", label: "Image", type: "image" },
        {
          name: "portraitImage",
          label: "Alternative image",
          type: "image",
          description: "Alternative image for portrait devices (like phones)",
        },
      ],
    },
  ],
});
