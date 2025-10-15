import intlTemplate from "../../tina/templates/intlTemplate";
import templateDescriptions from "../../tina/templates/template-descriptions";

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
      name: "text",
      label: "Text",
      type: "string",
      ui: {
        component: "textarea"
      }
    },
    { name: "linkText", label: "Link Text", type: "string" },
    {
      name: "linksToReference",
      label: "Internal link",
      type: "reference",
      collections: ["project"],
      description: templateDescriptions.internalLink,
    },
    {
      name: "linksTo",
      label: "External link",
      type: "string",
      description: templateDescriptions.externalLink,
    },
    
  ],
});
