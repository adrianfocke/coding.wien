import type { ComponentAnimation } from "./template-fields/animation";
import type { ComponentLayout } from "./template-fields/layout";

export type GenerateMetadataProps = {
  params: Promise<{ filename: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export type CustomComponentProps<
  ComponentContent = undefined,
  ComponentSettings = undefined
> = {
  animation?: ComponentAnimation;
  content?: ComponentContent;
  layout?: ComponentLayout;
  settings?: ComponentSettings;
};
