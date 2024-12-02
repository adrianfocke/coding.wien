import Image from "next/image";
import Accordion, {
  AccordionTemplate,
  type AccordionProps,
} from "../components/Accordion/Accordion";
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
  AccordionTemplate,
  FormTemplate,
  SlideshowTemplate,
  GridTemplate,
];

export type ReferencePath = `content/${string}/${string}.json`;
export type ReferenceRelativePath = `${string}.json`;

export default {
  Form: ({ title }: FormProps) => <Form title={title} />,
  Slideshow: (props: SlideshowProps & { elements: any[] }) => {
    const slides = props.elements?.map((e) => e.element) ?? [];
    return <Slideshow slides={slides} />;
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
  Accordion: (props: AccordionProps & { elements: any[] }) => {
    const { title, content } = props;

    return <Accordion title={title} content={content} />;
  },
};
