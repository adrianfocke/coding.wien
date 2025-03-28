import { Button, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, type Ref } from "react";
import type {
  PageBodyNavigationContentFilter,
  PageBodyNavigationSettingsFilter,
} from "../../tina/__generated__/types";
import { getLayoutProps } from "../../tina/template-fields/layout";
import type { CustomComponentProps } from "../../tina/types";
import useAnimation from "../../utils/animation/useAnimation";
import { LanguageContext } from "../../utils/context/language";
import styles from "./Navigation.module.css";

export default function Navigation({
  animation,
  content,
  layout,
}: CustomComponentProps<
  PageBodyNavigationContentFilter,
  PageBodyNavigationSettingsFilter
>) {
  const language = useContext(LanguageContext);
  const { animationContainer } = useAnimation(animation);
  const pathname = usePathname();

  const componentContent = content?.[language ?? "en"];

  return (
    <Flex
      p={"4"}
      className={styles.navigation}
      height={getLayoutProps(layout)("height")}
      width={getLayoutProps(layout)("width")}
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
          <Button variant={"ghost"} key={index}>
            <Text size={"4"}>
              <Link className={`${styles.link}`} href={`/${link?.href}`}>
                {link?.text}
              </Link>
            </Text>
          </Button>
        ))}
      </Flex>
    </Flex>
  );
}
