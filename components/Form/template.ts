import type { Template } from "tinacms";
import { TitleField, WidthField } from "../../tina/fields";

export const FormTemplate: Template = {
  name: "Form",
  label: "Form",
  fields: [TitleField, WidthField as any],
};
