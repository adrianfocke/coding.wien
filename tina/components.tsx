import Image from "next/image";
import type { Template } from "tinacms";
import { type Components } from "tinacms/dist/rich-text";
import Card, { CardFields } from "../components/Card/Card";
import type { FormProps } from "../components/Form/Form";
import Form, { FormTemplate } from "../components/Form/Form";
import type { GridProps } from "../components/Grid/Grid";
import Grid, { GridTemplate, GridVariant } from "../components/Grid/Grid";
import Slideshow, { SlideshowFields } from "../components/Slideshow/Slideshow";
import Animation from "./template-fields/animation";
import Intl from "./template-fields/intl";
import Size from "./template-fields/size";
import type { CustomComponentProps } from "./types";
import { getReferenceRelativePathFromReferencePath } from "./utils";

export const templates: Template[] = [
  {
    name: "Card",
    fields: [Animation, Size, Intl(CardFields)],
  },
  {
    name: "Slideshow",
    fields: [Animation, Size, Intl(SlideshowFields)],
  },
  FormTemplate,
  GridTemplate,
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
  Slideshow: (props: CustomComponentProps) => {
    const { animation, content, size } = props;
    return <Slideshow animation={animation} content={content} size={size} />;
  },
  Card: (props: CustomComponentProps) => {
    const { animation, content, size } = props;
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
