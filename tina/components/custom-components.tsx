import type { Template } from "tinacms";
import type { Components } from "tinacms/dist/rich-text";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Hero from "../../components/Hero/Hero";
import HighlightedSection from "../../components/HighlightedSection/HighlightedSection";
import Navigation from "../../components/Navigation/Navigation";
import Slideshow from "../../components/Slideshow/Slideshow";
import animation from "../template-fields/animation";
import intl from "../template-fields/intl";
import layout from "../template-fields/layout";
import type { CustomComponentProps } from "../types";

export default {
  Slideshow: (props: CustomComponentProps) => (
    <Slideshow
      animation={props.animation}
      content={props.content}
      layout={props.layout}
      settings={props.settings}
    />
  ),
  Button: (props: CustomComponentProps) => (
    <Button
      animation={props.animation}
      content={props.content}
      layout={props.layout}
      settings={props.settings}
    />
  ),
  Card: (props: CustomComponentProps) => (
    <Card
      animation={props.animation}
      content={props.content}
      layout={props.layout}
      settings={props.settings}
    />
  ),
  Hero: (props: CustomComponentProps) => (
    <Hero
      animation={props.animation}
      content={props.content}
      layout={props.layout}
      settings={props.settings}
    />
  ),
  HighlightedSection: (props: CustomComponentProps) => (
    <HighlightedSection
      animation={props.animation}
      content={props.content}
      layout={props.layout}
      settings={props.settings}
    />
  ),
  Navigation: (props: CustomComponentProps) => (
    <Navigation
      animation={props.animation}
      content={props.content}
      layout={props.layout}
      settings={props.settings}
    />
  ),

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
