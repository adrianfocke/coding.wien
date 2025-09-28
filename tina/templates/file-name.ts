import type { Template } from "tinacms";

export default [
  {
    name: "name",
    label: "Name",
    type: "string",
    required: true,
    description: "Name will be used for the url name",
    ui: {
      validate: (value) => {
        // Regex for letters, numbers, umlaute, blank and hyphen
        const regex = /^[A-Za-z0-9äöüÄÖÜß\- ]+$/;

        if (!value) {
          return "Value must be defined";
        }

        if (!regex.test(value)) {
          return "Allowed values: letters, numbers, umlaute, blank and hyphen";
        }
      },
    },
  },
] as Template["fields"];