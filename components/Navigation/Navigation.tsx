import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <Flex
      className={styles.navContainer}
      p={"4"}
      justify={"between"}
      role="navigation"
      aria-label="Main Navigation"
    >
      <Link key={"1"} href={`/`}>
        <Text size={{ initial: "5", md: "7" }}>Start</Text>
      </Link>
      <Flex gap={"4"}>
        <Link key={"11"} href={`/about`}>
          <Text size={{ initial: "5", md: "7" }}>Über mich</Text>
        </Link>
        <Link key={"12"} href={`/`}>
          <Text size={{ initial: "5", md: "7" }}>Stories</Text>
        </Link>
      </Flex>
    </Flex>
  );
}
