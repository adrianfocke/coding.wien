import { Heading, Text, type ButtonProps } from "@radix-ui/themes";
import Image from "next/image";
import type { Template } from "tinacms";
import { type Components } from "tinacms/dist/rich-text";
import Button from "../components/Button/Button";
import ButtonTemplate from "../components/Button/ButtonTemplate";
import Card from "../components/Card/Card";
import CardTemplate from "../components/Card/CardTemplate";
import Hero from "../components/Hero/Hero";
import HeroTemplate from "../components/Hero/HeroTemplate";
import HighlightedSection from "../components/HighlightedSection/HighlightedSection";
import HighlightedSectionTemplate from "../components/HighlightedSection/HighlightedSectionTemplate";
import Navigation from "../components/Navigation/Navigation";
import NavigationTemplate from "../components/Navigation/NavigationTemplate";
import Slideshow from "../components/Slideshow/Slideshow";
import SlideshowTemplate from "../components/Slideshow/SlideshowTemplate";
import type { CustomComponentProps } from "./types";

export const templates: Template[] = [
  ButtonTemplate,
  CardTemplate,
  HeroTemplate,
  HighlightedSectionTemplate,
  NavigationTemplate,
  SlideshowTemplate,
];

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
    const { animation, settings, content, size } = props;

    console.log("Props: ", (props as any).settings);

    return (
      <Slideshow
        animation={animation}
        settings={settings}
        content={content}
        size={size}
      />
    );
  },
  Button: (
    props: CustomComponentProps & { variant: ButtonProps["variant"] }
  ) => {
    const { animation, content, settings, size, variant } = props;
    return (
      <Button
        animation={animation}
        content={content}
        variant={variant}
        settings={settings}
        size={size}
      />
    );
  },
  Card: (props: CustomComponentProps) => {
    const { animation, content, settings, size } = props;
    return (
      <Card
        animation={animation}
        content={content}
        settings={settings}
        size={size}
      />
    );
  },
  Hero: (props: CustomComponentProps) => {
    const { animation, content, settings, size } = props;
    return (
      <Hero
        animation={animation}
        content={content}
        settings={settings}
        size={size}
      />
    );
  },
  HighlightedSection: (props: CustomComponentProps) => {
    const { animation, content, settings, size } = props;
    return (
      <HighlightedSection
        animation={animation}
        content={content}
        settings={settings}
        size={size}
      />
    );
  },
  Navigation: (props: CustomComponentProps) => {
    const { animation, content, settings, size } = props;
    return (
      <Navigation
        animation={animation}
        settings={settings}
        content={content}
        size={size}
      />
    );
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
