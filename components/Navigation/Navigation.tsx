import { Box } from "@radix-ui/themes";
import type { Ref } from "react";
import { type Template } from "tinacms";
import type { PageBodyNavigationContentFilter } from "../../tina/__generated__/types";
import type { CustomComponentProps } from "../../tina/types";
import useAnimation from "../../utils/animation/useAnimation";
import { buildHeight, buildWidth } from "../../utils/radix-sizes";
import styles from "./Navigation.module.css";

export const NavigationFields: Template["fields"] = [
  {
    name: "navItems",
    label: "Items",
    type: "object",
    fields: [
      { name: "logo", label: "Logo", type: "string" },
      { name: "links", label: "Links", type: "string", list: true },
    ],
  },
];

export default function Navigation({
  animation,
  content,
  size,
}: CustomComponentProps<PageBodyNavigationContentFilter>) {
  const { animationContainer, animationController } = useAnimation(animation);

  console.log("Navigation component content: ", content, animationController);

  return (
    <Box
      className={styles.box}
      height={buildHeight(size)}
      width={buildWidth(size)}
      style={{ border: "2px solid red" }}
      overflow={"scroll"}
      ref={animationContainer as Ref<HTMLDivElement>}
    >
      <p>{content?.["de"]?.navItems?.logo as any}</p>
    </Box>
  );
}
