import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { use } from "react";
import type { PageBodyNavigationFilter } from "../../tina/__generated__/types";
import { LanguageContext } from "../../utils/context/language";
import styles from "./Navigation.module.css";

export default function Navigation(props: PageBodyNavigationFilter) {
  const language = use(LanguageContext);

  // TODO use in layout

  return (
    <Flex
      className={styles.navContainer}
      p={"4"}
      justify={"between"}
      role="navigation"
      aria-label="Main Navigation"
    >
      <Text>{props?.[language]?.logo as any}</Text>
      <Flex gap={"4"}>
        {(
          props?.[language]?.links as [{ linksTo: string; linkText: string }]
        ).map((link, index) => {
          return (
            <Link
              key={index}
              href={`${link.linksTo}`}
              aria-label={link.linkText}
            >
              <Text>{link.linkText}</Text>
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
}
