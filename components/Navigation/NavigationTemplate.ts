import intlTemplate from "../../tina/templates/intlTemplate";

export default intlTemplate({
  name: "Navigation",
  label: "Navigation",
  type: "object",
  fields: [
    { name: "logo", label: "Logo", type: "string" },
    {
      name: "links",
      label: "Links",
      type: "object",
      list: true,
      fields: [
        { name: "linkText", label: "", type: "string" },
        { name: "linksTo", label: "", type: "string" },
      ],
    },
  ],
});
