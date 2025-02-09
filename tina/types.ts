import type { ToolbarOverrideType } from "tinacms/dist/toolkit/fields/plugins/mdx-field-plugin/plate/toolbar/toolbar-overrides";
import type { AnimationProp } from "./template-fields/animation";
import type { SizeProp } from "./template-fields/size";

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

export type CustomComponentProps<ComponentContent = undefined> = {
  animation?: AnimationProp;
  content?: ComponentContent;
  size?: SizeProp;
};


