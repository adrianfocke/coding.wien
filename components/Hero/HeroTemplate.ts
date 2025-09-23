import intlTemplate from "../../tina/templates/intlTemplate";

export default intlTemplate({
  name: "Hero",
  label: "Hero",
  type: "object",
  fields: [
    {
      name: "text",
      label: "Text",
      type: "string",
    },
    {
      name: "heading",
      label: "Heading",
      type: "string",
    },
    { name: "linksToPrimary", label: "Primary Link", type: "string" },
    { name: "linkTextPrimary", label: "Primary Link Text", type: "string" },
    { name: "linksToSecondary", label: "Secondary Link", type: "string" },
    {
      name: "linkTextSecondary",
      label: "Secondary Link Text",
      type: "string",
    },
  ],
});
