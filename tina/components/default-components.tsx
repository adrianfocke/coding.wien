import { Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import type { Components } from "tinacms/dist/rich-text";

export default {
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
    return <Heading className="serif" size={"9"} {...props} />;
  },
  h2(props) {
    return <Heading mt={"6"} className="serif" size={"8"} {...props} />;
  },
} as Components<{}>;
