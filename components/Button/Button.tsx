import { Box, Button as RadixButton, type ButtonProps } from "@radix-ui/themes";
import { type Ref } from "react";
import type { PageBodyCardContentFilter } from "../../tina/__generated__/types";
import type { CustomComponentProps } from "../../tina/types";
import useAnimation from "../../utils/animation/useAnimation";
import { buildHeight, buildWidth } from "../../utils/radix-sizes";
import styles from "./Button.module.css";

export default function Button({
  animation,
  variant,
  size,
}: CustomComponentProps<PageBodyCardContentFilter> & {variant: ButtonProps["variant"]}) {
  const { animationContainer } = useAnimation(animation);

  return (
    <Box
      className={styles.box}
      height={buildHeight(size)}
      width={buildWidth(size)}
      overflow={"scroll"}
      ref={animationContainer as Ref<HTMLDivElement>}
    >
      <RadixButton variant={variant}>aaa</RadixButton>
    </Box>
  );
}
