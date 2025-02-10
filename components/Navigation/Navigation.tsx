import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Ref } from "react";
import { type Template } from "tinacms";
import type { PageContent } from "../../tina/__generated__/types";
import type { CustomComponentProps } from "../../tina/types";
import useAnimation from "../../utils/animation/useAnimation";
import { buildHeight, buildWidth } from "../../utils/radix-sizes";
import styles from "./Navigation.module.css";

export const NavigationFields: Template["fields"] = [
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

export default function Navigation({
  animation,
  content,
  size,
}: CustomComponentProps<PageContent>) {
  const { animationContainer } = useAnimation(animation);
  const pathname = usePathname();

  console.log("Navigation component content: ", content);

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
        {content?.["de"]?.navigation?.links?.map((link, index) => (
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
