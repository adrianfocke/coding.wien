import type { ButtonProps } from "@radix-ui/themes";
import type { Components } from "tinacms/dist/rich-text";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Hero from "../../components/Hero/Hero";
import HighlightedSection from "../../components/HighlightedSection/HighlightedSection";
import Navigation from "../../components/Navigation/Navigation";
import Slideshow from "../../components/Slideshow/Slideshow";
import type { CustomComponentProps } from "../types";

export default {
  Slideshow: (props: CustomComponentProps) => {
    const { animation, settings, content, margin, size } = props;
    return (
      <Slideshow
        animation={animation}
        settings={settings}
        content={content}
        margin={margin}
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
    const { animation, content, settings, margin, size } = props;
    return (
      <Hero
        animation={animation}
        content={content}
        settings={settings}
        size={size}
        margin={margin}
      />
    );
  },
  HighlightedSection: (props: CustomComponentProps) => {
    const { animation, content, settings, size, margin } = props;
    return (
      <HighlightedSection
        animation={animation}
        content={content}
        settings={settings}
        size={size}
        margin={margin}
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
} as Components<{}>;
