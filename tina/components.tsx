import { Heading, Text } from "@radix-ui/themes";
import type { Components } from "tinacms/dist/rich-text";
import Hero from "../components/Hero/Hero";
import Slideshow from "../components/Slideshow/Slideshow";
import Form from "../components/Form/Form";
import Grid from "../components/Grid/Grid";
import Image from "next/image";
import Highlight from "../components/Highlight/Highlight";

export default {
  /* Custom components */
  Form: (props: any) => {
    return <Form {...props} />;
  },
  Grid: (props: any) => {
    return <Grid {...props} />;
  },
  Hero: (props: any) => {
    return <Hero {...props} />;
  },
  Highlight: (props: any) => {
    return <Highlight {...props} />;
  },
  Slideshow: (props: any) => {
    return <Slideshow {...props} />;
  },
  h1(props) {
    return (
      <Heading align={"center"} size={"9"} className={`fontNormal serif`}>
        {props?.children}
      </Heading>
    );
  },
  h2(props) {
    return (
      <Heading align={"center"} size={"6"} className={`fontNormal serif`}>
        {props?.children}
      </Heading>
    );
  },
  h3(props) {
    return (
      <Heading align={"center"} size={"5"} className={`fontNormal serif`}>
        {props?.children}
      </Heading>
    );
  },
  h4(props) {
    return (
      <Text as="p" size={"5"}>
        {props?.children}
      </Text>
    );
  },
  h5(props) {
    return <Text as="p">Heading 5 not supported</Text>;
  },
  h6(props) {
    return <Text as="p">Heading 6 not supported</Text>;
  },
  /* Standard components */
  p(props) {
    return (
      <Text as="p" mb={"2"}>
        {props?.children}
      </Text>
    );
  },
  span(props) {
    return (
      <Text as="p" mb={"2"}>
        {props?.children}
      </Text>
    );
  },
  a(props) {
    return (
      <Heading align={"center"} size={"5"} className={`fontNormal serif`}>
        {props?.children}
      </Heading>
    );
  },
  img(props) {
    return (
      <Image
        src={props?.url ?? "/404"}
        alt={props?.alt ?? "Image"}
        height={400}
        width={200}
      />
    );
  },
} as Components<{}>;
