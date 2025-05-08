import type { languages } from "./templates/intlTemplate";
import type { layoutProps } from "./templates/layout";

export type GenerateMetadataProps = {
  params: Promise<{ filename: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export type Language = (typeof languages)[number];
export type LayoutProp = (typeof layoutProps)[number];
