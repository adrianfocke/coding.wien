import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { useContext, type Ref } from "react";
import type {
  PageBodyNavigationContentFilter,
  PageBodyNavigationSettingsFilter,
} from "../../tina/__generated__/types";
import type { CustomComponentProps } from "../../tina/types";
import useAnimation from "../../utils/animation/useAnimation";
import { LanguageContext } from "../../utils/context/language";
import { buildHeight, buildWidth } from "../../utils/radix-sizes";
import styles from "./Navigation.module.css";

export default function Navigation({
  animation,
  content,
  size,
}: CustomComponentProps<
  PageBodyNavigationContentFilter,
  PageBodyNavigationSettingsFilter
>) {
  const language = useContext(LanguageContext);
  const { animationContainer } = useAnimation(animation);
  // const pathname = usePathname();

  return (
    <Flex
      p={"4"}
      className={styles.navigation}
      height={buildHeight(size)}
      width={buildWidth(size)}
      overflow={"scroll"}
      ref={animationContainer as Ref<HTMLDivElement>}
    >
      <Text size={"4"}>
        <Link className={styles.link} href={`/`}>
          {content?.[language]?.links?.logo as any}
        </Link>
      </Text>
      <Flex gap={"4"}>
        {(content?.[language]?.links?.links! as any).map((link, index) => (
          <Text size={"4"} key={index}>
            <Link
              className={`${styles.link} ${
                link.href === "about" && styles.activeLink
              }`}
              href={`/${link?.href}`}
            >
              {link?.text}
            </Link>
          </Text>
        ))}
      </Flex>
    </Flex>
  );
}
