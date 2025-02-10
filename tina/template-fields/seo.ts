import type { Template } from "tinacms";

export default {
    name: "seo",
    label: "SEO",
    type: "string",
    ui: {
        component: "textarea",
        description: "Descriptive information for better web search listing",
    },
} as Template["fields"][number];