import { Box, Button as RadixButton } from "@radix-ui/themes";
import { type Ref } from "react";
import type { PageBodyCardContentFilter } from "../../tina/__generated__/types";
import { getLayoutProps } from "../../tina/template-fields/layout";
import type { CustomComponentProps } from "../../tina/types";
import useAnimation from "../../utils/animation/useAnimation";
import styles from "./Button.module.css";

export default function Button({
  animation,
  settings,
  layout,
}: CustomComponentProps<PageBodyCardContentFilter>) {
  const { animationContainer } = useAnimation(animation);

  return (
    <Box
      className={styles.box}
      height={getLayoutProps(layout)("height")}
      width={getLayoutProps(layout)("width")}
      overflow={"scroll"}
      ref={animationContainer as Ref<HTMLDivElement>}
    >
      <RadixButton variant={"classic"}>aaa</RadixButton>
    </Box>
  );
}
