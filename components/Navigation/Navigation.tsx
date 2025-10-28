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
      <Link key={"1"} href={`/`} aria-label={"About link"}>
        <Text>Home</Text>
      </Link>
      <Flex gap={"4"}>
        <Link key={"11"} href={`/about`} aria-label={"About link"}>
          <Text>Über mich</Text>
        </Link>
        <Link key={"12"} href={`/`} aria-label={"Classes link"}>
          <Text>Stories</Text>
        </Link>
      </Flex>
    </Flex>
  );
}
