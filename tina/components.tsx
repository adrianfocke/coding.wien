import { Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import type { Components } from "tinacms/dist/rich-text";
import Hero from "../components/Hero/Hero";
import Navigation from "../components/Navigation/Navigation";
import Slideshow from "../components/Slideshow/Slideshow";

export default {
  /* Custom components */
  Navigation: (props: any) => {
    console.log("Slideshow props: ", props);
    return <Navigation {...props} />;
  },
  Hero: (props: any) => {
    console.log("Hero props: ", props);
    return <Hero {...props} />;
  },
  Slideshow: (props: any) => {
    console.log("Slideshow props: ", props);
    return <Slideshow {...props} />;
  },
  /* Standard components */
  p(props) {
    return <Text className="sans" size={"4"} {...props} />;
  },
  a(props) {
    return (
      <Link className="serif" href={props?.url ?? "/404"}>
        <Text>{props?.children.props.content[0].text}</Text>
      </Link>
    );
  },
  h1(props) {
    return (
      <Heading size={"9"} my={"6"} className={`fontNormal serif`} {...props} />
    );
  },
  h2(props) {
    return (
      <Heading
        mt={"6"}
        mb={"4"}
        size={"6"}
        className={`fontWeight500 sans`}
        {...props}
      />
    );
  },
} as Components<{}>;