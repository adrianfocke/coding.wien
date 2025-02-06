import type { ToolbarOverrideType } from "tinacms/dist/toolkit/fields/plugins/mdx-field-plugin/plate/toolbar/toolbar-overrides";

export type GenerateMetadataProps = {
  params: Promise<{ filename: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const customToolbar: ToolbarOverrideType[] = [
  "embed",
  "heading",
  "image",
  "link",
  "bold",
  "italic",
];
