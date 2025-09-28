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
    {
      name: "linksToReferencePrimary",
      label: "Internal primary link",
      type: "reference",
      collections: ["page"],
    },
    {
      name: "linksToPrimary",
      label: "Primary Link",
      type: "string",
      description: "If you fill in an internal link, this will be ignored",
    },
    { name: "linkTextPrimary", label: "Primary Link Text", type: "string" },
    {
      name: "linksToReferenceSecondary",
      label: "Internal secondary link",
      type: "reference",
      collections: ["page"],
    },
    {
      name: "linksToSecondary",
      label: "Secondary Link",
      type: "string",
      description: "If you fill in an internal link, this will be ignored",
    },
    {
      name: "linkTextSecondary",
      label: "Secondary Link Text",
      type: "string",
    },
  ],
});
