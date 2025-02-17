import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, type Ref } from "react";
import { type Template } from "tinacms";
import animation from "../../tina/template-fields/animation";
import intl from "../../tina/template-fields/intl";
import size from "../../tina/template-fields/size";
import type { CustomComponentProps } from "../../tina/types";
import useAnimation from "../../utils/animation/useAnimation";
import { LanguageContext } from "../../utils/context/language";
import { buildHeight, buildWidth } from "../../utils/radix-sizes";
import styles from "./Navigation.module.css";

export const navigationFields: Template["fields"] = [
  {
    name: "navigation",
    label: "Navigation Links",
    type: "object",
    fields: [
      { name: "logo", label: "Logo", type: "string" },
      {
        name: "links",
        label: "Links",
        type: "object",
        list: true,
        ui: {
          itemProps(item) {
            return {
              label: item.link ? `${item.link}` : "Leer",
            };
          },
        },
        fields: [
          { name: "link", label: "Link Text", type: "string" },
          { name: "href", label: "Link Href", type: "string" },
        ],
      },
    ],
  },
];

export const NavigationTemplate: Template = {
  name: "Navigation",
  fields: [animation, size, intl(navigationFields)],
};

export default function Navigation({
  animation,
  content,
  size,
}: CustomComponentProps<any>) {
  const language = useContext(LanguageContext);
  const { animationContainer } = useAnimation(animation);
  const pathname = usePathname();

  return (
    <Flex
      className={styles.navigation}
      height={buildHeight(size)}
      width={buildWidth(size)}
      overflow={"scroll"}
      ref={animationContainer as Ref<HTMLDivElement>}
    >
      <Text size={"6"}>{content?.["de"]?.navigation?.logo as any}</Text>
      <Flex gap={"4"}>
        {content?.[language]?.navigation?.links?.map((link, index) => (
          <Link
            className={`${pathname === `/${link?.link}` && "active-link"}`}
            key={index}
            href={`/${link?.href}`}
          >
            <Text size={"6"}>{link?.link}</Text>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
