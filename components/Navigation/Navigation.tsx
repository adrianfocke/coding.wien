import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { use } from "react";
import type { PageBodyNavigationFilter } from "../../tina/__generated__/types";
import { LanguageContext } from "../../utils/context/language";
import styles from "./Navigation.module.css";

export default function Navigation(props: PageBodyNavigationFilter) {
  const language = use(LanguageContext);

  return (
    <Flex className={styles.navContainer} p={"4"} justify={"between"}>
      <Text>{props?.[language]?.logo as any}</Text>
      <Flex gap={"4"}>
        {(
          props?.[language]?.links as [{ linksTo: string; linkText: string }]
        ).map((link, index) => {
          return (
            <Link key={index} href={`${link.linksTo}`}>
              <Text>{link.linkText}</Text>
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
}
