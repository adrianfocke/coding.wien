import { Text } from "@radix-ui/themes";
import Link from "next/link";
import type { Components } from "tinacms/dist/rich-text";
import Hero from "../components/Hero/Hero";
import Slideshow from "../components/Slideshow/Slideshow";
import Form from "../components/Form/Form";
import Grid from "../components/Grid/Grid";
import Image from "next/image";

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
  Slideshow: (props: any) => {
    return <Slideshow {...props} />;
  },
  /* Standard components */
  a(props) {
    return (
      <Link className="serif" href={props?.url ?? "/404"}>
        <Text>{props?.children.props.content[0].text}</Text>
      </Link>
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
