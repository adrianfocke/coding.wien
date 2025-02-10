import Image from "next/image";
import type { Template } from "tinacms";
import { type Components } from "tinacms/dist/rich-text";
import Card, { cardFields } from "../components/Card/Card";
import Slideshow, { slideshowFields } from "../components/Slideshow/Slideshow";
import animation from "./template-fields/animation";
import intl from "./template-fields/intl";
import size from "./template-fields/size";
import type { CustomComponentProps } from "./types";

export const templates: Template[] = [
  {
    name: "Card",
    fields: [animation, size, intl(cardFields)],
  },
  {
    name: "Slideshow",
    fields: [animation, size, intl(slideshowFields)],
  },
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
  Slideshow: (props: CustomComponentProps) => {
    const { animation, content, size } = props;
    return <Slideshow animation={animation} content={content} size={size} />;
  },
  Card: (props: CustomComponentProps) => {
    const { animation, content, size } = props;
    return <Card animation={animation} content={content} size={size} />;
  },
  // Grid: (
  //   props: GridProps & {
  //     elements?: any;
  //     referenceField?: ReferencePath;
  //   }
  // ) => {
  //   const { referenceField, variant } = props;

  //   let content: any = undefined;

  //   if (variant === GridVariant["Rich-Text"]) {
  //     content = props.elements?.map((e) => e.element) ?? [];
  //   }

  //   if (variant === GridVariant["Reference"]) {
  //     content = getReferenceRelativePathFromReferencePath(referenceField);
  //   }

  //   return <Grid content={content} variant={variant} />;
  // },
};
