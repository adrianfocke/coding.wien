export default {
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
        validate: (value) => {
          if (value?.length > 165) {
            return "Meta desciption should not be longer than 165 characters";
          }
        },
      },
    },
    {
      name: "metaKeywords",
      label: "Meta keywords",
      type: "string",
      list: true,
    },
  ],
};
