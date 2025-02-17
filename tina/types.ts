import type { AnimationProp } from "./template-fields/animation";
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
  componentSettings?: ComponentSettings;
  content?: ComponentContent;
  size?: SizeProp;
};
