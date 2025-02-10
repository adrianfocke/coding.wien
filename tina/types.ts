import type { AnimationProp } from "./template-fields/animation";
import type { SizeProp } from "./template-fields/size";

export type GenerateMetadataProps = {
  params: Promise<{ filename: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export type CustomComponentProps<ComponentContent = undefined> = {
  animation?: AnimationProp;
  content?: ComponentContent;
  size?: SizeProp;
};
