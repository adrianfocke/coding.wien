import Image from "next/image";
import type { Template } from "tinacms";
import { type Components } from "tinacms/dist/rich-text";
import Card, { CardTemplate, type CardProps } from "../components/Card/Card";
import type { FormProps } from "../components/Form/Form";
import Form, { FormTemplate } from "../components/Form/Form";
import type { GridProps } from "../components/Grid/Grid";
import Grid, { GridTemplate, GridVariant } from "../components/Grid/Grid";
import Slideshow, {
  SlideshowTemplate,
  type SlideshowProps,
} from "../components/Slideshow/Slideshow";
import { getReferenceRelativePathFromReferencePath } from "./utils";

export const allTemplates: Template[] = [
  CardTemplate,
  FormTemplate,
  GridTemplate,
  SlideshowTemplate,
];

// TODO move
export type ReferencePath = `content/${string}/${string}.json`;
export type ReferenceRelativePath = `${string}.json`;

export const defaultComponents: Components<{}> = {
  p(props) {
    return <p {...props} />;
  },
  img: (props: { url: string; caption?: string; alt?: string }) => (
    <Image
      priority
      src={props.url ?? ""}
      alt={""}
      fill
      quality={100}
      sizes="(min-width: 808px) 100%, 100vh"
      style={{
        zIndex: "-1",
        objectFit: "cover",
      }}
    />
  ),
};

export const customComponents = {
  Form: ({ test }: FormProps) => <Form test={test} />,
  Slideshow: (props: SlideshowProps & { elements: any[] }) => {
    const elements = props.elements?.map((e) => (e as any).element) ?? [];
    return <Slideshow elements={elements} size={props.size} />;
  },
  Card: (props: CardProps) => {
    const { animation, content, size } = props;
    console.log("Size in Component: ", size);
    return <Card animation={animation} content={content} size={size} />;
  },
  Grid: (
    props: GridProps & {
      elements?: any;
      referenceField?: ReferencePath;
    }
  ) => {
    const { referenceField, variant } = props;

    let content: any = undefined;

    if (variant === GridVariant["Rich-Text"]) {
      content = props.elements?.map((e) => e.element) ?? [];
    }

    if (variant === GridVariant["Reference"]) {
      content = getReferenceRelativePathFromReferencePath(referenceField);
    }

    return <Grid content={content} variant={variant} />;
  },
};
