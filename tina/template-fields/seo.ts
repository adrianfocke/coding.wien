import { exportIntlTemplate } from "../utils";

export default exportIntlTemplate({
  name: "seo",
  label: "SEO",
  type: "object",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
    },
    {
      name: "metaDescription",
      label: "Meta desciption",
      type: "string",
      ui: {
        component: "textarea",
        description: "Descriptive information for better web search listing",
      },
    },
  ],
});
