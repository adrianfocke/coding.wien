import Image from "next/image";
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";
import type { FormProps } from "../components/Form/Form";
import Form, { FormTemplate } from "../components/Form/Form";
import type { GridProps } from "../components/Grid/Grid";
import Grid, { GridTemplate, GridVariant } from "../components/Grid/Grid";
import InstagramPost, {
  InstagramPostTemplate,
  type InstagramPostProps,
} from "../components/InstagramPost";
import Slideshow, {
  SlideshowTemplate,
  type SlideshowProps,
} from "../components/Slideshow/Slideshow";
import { getReferenceRelativePathFromReferencePath } from "./utils";

export const allTemplates = [
  FormTemplate,
  InstagramPostTemplate,
  SlideshowTemplate,
  GridTemplate,
];

export type ReferencePath = `content/${string}/${string}.json`;
export type ReferenceRelativePath = `${string}.json`;

export default {
  Form: ({ title, width }: FormProps) => <Form width={width} title={title} />,
  InstagramPost: ({
    width,
    account,
    description,
    url,
    slides,
  }: InstagramPostProps) => (
    <InstagramPost
      account={account}
      url={url}
      description={description}
      slides={slides.map((slide: any) => (
        <Image
          src={slide.imgSrc}
          alt={slide.altText}
          width={660}
          height={400}
          style={{
            objectFit: "cover",
            maxWidth: "100%",
            height: "auto",
          }}
        />
      ))}
      width={width}
    />
  ),
  Slideshow: (props: SlideshowProps & { elements: any[] }) => {
    const { height, width } = props;
    const slides = props.elements?.map((e) => e.element) ?? [];
    return <Slideshow slides={slides} width={width} height={height} />;
  },
  Grid: (
    props: GridProps & {
      elements?: any;
      referenceField?: ReferencePath;
    }
  ) => {
    const { gridSettings, height, referenceField, variant, width } = props;

    let content: any = undefined;

    if (variant === GridVariant["Rich-Text"]) {
      content = props.elements?.map((e) => e.element) ?? [];
    }

    if (variant === GridVariant["Reference"]) {
      content = getReferenceRelativePathFromReferencePath(referenceField);
    }

    return (
      <Grid
        content={content}
        gridSettings={gridSettings}
        height={height}
        variant={variant}
        width={width}
      />
    );
  },
};