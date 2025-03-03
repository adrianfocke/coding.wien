import type { AnimationProp } from "./template-fields/animation";
import type { MarginProp } from "./template-fields/margin";
import type { SizeProp } from "./template-fields/size";

export type GenerateMetadataProps = {
  params: Promise<{ filename: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export type CustomComponentProps<
  ComponentContent = undefined,
  ComponentSettings = undefined
> = {
  animation?: AnimationProp;
  margin?: MarginProp;
  settings?: ComponentSettings;
  content?: ComponentContent;
  size?: SizeProp;
};
