import intlTemplate from "../../tina/templates/intlTemplate";

export default intlTemplate({
  name: "Form",
  label: "Contact Form",
  type: "object",
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "string",
    },
    { name: "name", label: "Name", type: "string" },
    { name: "namePlaceholder", label: "Name Placeholder", type: "string" },
    { name: "email", label: "email", type: "string" },
    { name: "emailPlaceholder", label: "Email Placeholder", type: "string" },
    { name: "text", label: "Text", type: "string" },
    { name: "textPlaceholder", label: "Text Placeholder", type: "string" },
    {
      name: "sendButtonText",
      label: "Send Button Text",
      type: "string",
    },
    {
      name: "mailReceiver",
      label: "Send to",
      type: "string",
      description: "Email address to send the form data to",
    },
  ],
});
