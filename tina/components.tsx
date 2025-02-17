import { Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import type { Template } from "tinacms";
import { type Components } from "tinacms/dist/rich-text";
import Card from "../components/Card/Card";
import CardTemplate from "../components/Card/CardTemplate";
import Slideshow from "../components/Slideshow/Slideshow";
import SlideshowTemplate from "../components/Slideshow/SlideshowTemplate";
import type { CustomComponentProps } from "./types";

export const templates: Template[] = [CardTemplate, SlideshowTemplate];

// TODO move
export type ReferencePath = `content/${string}/${string}.json`;
export type ReferenceRelativePath = `${string}.json`;

export const defaultComponents: Components<{}> = {
  p(props) {
    return <Text size={"4"} {...props} />;
  },
  h1(props) {
    return <Heading className="serif" size={"9"} {...props} />;
  },
  h2(props) {
    return <Heading className="serif" size={"8"} {...props} />;
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
    const { animation, componentSettings, content, size } = props;

    return (
      <Slideshow
        animation={animation}
        componentSettings={componentSettings}
        content={content}
        size={size}
      />
    );
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
