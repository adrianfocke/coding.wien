import { Text as RadixText, Heading as RadixHeading } from "@radix-ui/themes";
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
import Link from "next/link";

export const templates = [
  HeadingTemplate("forBlockRendering"),
  ImageTemplate("forBlockRendering"),
  SlideshowTemplate("forBlockRendering"),
  FormTemplate("forBlockRendering"),
  GridTemplate,
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
      <RadixText
        style={{ fontFamily: "var(--font-serif)" }}
        size={{ initial: "4", md: "5" }}
      >
        {props?.children}
      </RadixText>
    );
  },
  span(props) {
    return (
      <RadixText size={{ initial: "4", md: "6" }}>{props?.children}</RadixText>
    );
  },
  a(props) {
    console.log("Link props:", props);
    return (
      <RadixText size={{ initial: "4", md: "6" }} color="gold">
        <Link href={props?.url!}>{props?.children}</Link>
      </RadixText>
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
  /* Standard components that are replaced with custom ones and should not render */
  h1(props) {
    return (
      <RadixHeading
        as="h1"
        {...props}
        size={{
          initial: "8",
          md: "9",
        }}
        style={{ fontFamily: "var(--font-serif)" }}
      />
    );
  },
  h2(props) {
    return (
      <RadixHeading
        as="h2"
        {...props}
        size={{
          initial: "7",
          md: "8",
        }}
        style={{ fontFamily: "var(--font-serif)" }}
      />
    );
  },
  h3(props) {
    return (
      <RadixHeading
        as="h2"
        {...props}
        size={{
          initial: "6",
          md: "7",
        }}
        style={{ fontFamily: "var(--font-serif)" }}
      />
    );
  },
  h4(props) {
    return <></>;
  },
  h5(props) {
    return <></>;
  },
  h6(props) {
    return <></>;
  },
} as Components<{}>;
