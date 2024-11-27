import Image from "next/image";
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

export const allTemplates = [
  FormTemplate,
  InstagramPostTemplate,
  SlideshowTemplate,
  GridTemplate,
];

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
    console.log("Slideshow: ", props.elements);
    const { height, width } = props;
    const slides = props.elements?.map((e) => e.element) ?? [];
    return <Slideshow slides={slides} width={width} height={height} />;
  },
  Grid: (props: GridProps & { elements?: any[]; referenceField?: string }) => {
    const { height, width, gridSettings, variant } = props;
    const gridItems = props.elements?.map((e) => e.element) ?? [];

    console.log("Grid props: ", variant, props);

    const content =
      variant === GridVariant["Rich-Text"]
        ? props.elements?.map((e) => e.element) ?? []
        : variant === GridVariant["Reference"]
        ? props.referenceField
        : "Post-List";

    return (
      <Grid
        variant={variant}
        content={content}
        height={height}
        width={width}
        gridSettings={gridSettings}
      />
    );
  },
};
