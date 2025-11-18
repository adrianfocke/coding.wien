import { Text as RadixText } from "@radix-ui/themes";
import type { Components } from "tinacms/dist/rich-text";
import Slideshow from "../components/Slideshow/Slideshow";
import Form from "../components/Form/Form";
import Grid from "../components/Grid/Grid";
import Heading from "../components/Heading/Heading";
import Image from "../components/Image/Image";
import HeadingTemplate from "../components/Heading/HeadingTemplate";
import ImageTemplate from "../components/Image/ImageTemplate";
import TextTemplate from "../components/Text/TextTemplate";
import Text from "../components/Text/Text";
import GridTemplate from "../components/Grid/GridTemplate";
import SlideshowTemplate from "../components/Slideshow/SlideshowTemplate";
import FormTemplate from "../components/Form/FormTemplate";

export const templates = [
  FormTemplate,
  GridTemplate,
  HeadingTemplate,
  ImageTemplate,
  SlideshowTemplate,
  TextTemplate,
];

export default {
  /* Custom components */
  Form: (props: any) => {
    return <Form {...props} />;
  },
  Grid: (props: any) => {
    return <Grid {...props} />;
  },
  Heading: (props: any) => {
    return <Heading {...props} />;
  },
  Image: (props: any) => {
    return <Image {...props} />;
  },
  Text: (props: any) => {
    return <Text {...props} />;
  },
  Slideshow: (props: any) => {
    return <Slideshow {...props} />;
  },
  /* Standard components */
  p(props) {
    return (
      <RadixText size={{ initial: "4", md: "6" }}>{props?.children}</RadixText>
    );
  },
  span(props) {
    return (
      <RadixText size={{ initial: "4", md: "6" }}>{props?.children}</RadixText>
    );
  },
  a(props) {
    return (
      <RadixText size={{ initial: "4", md: "6" }}>{props?.children}</RadixText>
    );
  },
  img(props) {
    return (
      <Image
        // TODO
        //@ts-ignore
        src={props?.url ?? "/404"}
        alt={props?.alt ?? "Image"}
        height={400}
        width={200}
      />
    );
  },
} as Components<{}>;
