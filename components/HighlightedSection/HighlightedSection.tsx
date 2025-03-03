import { Box, Flex } from "@radix-ui/themes";
import { useContext, type Ref } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { customComponents, defaultComponents } from "../../tina/components";
import type { CustomComponentProps } from "../../tina/types";
import useAnimation from "../../utils/animation/useAnimation";
import { LanguageContext } from "../../utils/context/language";
import { buildHeight, buildWidth } from "../../utils/radix-sizes";
import styles from "./HighlightedSection.module.css";

export default function HighlightedSection({
  animation,
  content,
  margin,
  size,
}: CustomComponentProps<any>) {
  const language = useContext(LanguageContext);
  const { animationContainer } = useAnimation(animation);

  return (
    <Box
      p={"4"}
      mt={margin?.marginTop}
      mb={margin?.marginBottom}
      className={styles.box}
      height={buildHeight(size)}
      width={buildWidth(size)}
      overflow={"scroll"}
      ref={animationContainer as Ref<HTMLDivElement>}
    >
      <Flex gap={"4"} direction={"column"}>
        <TinaMarkdown
          content={content?.[language]?.content}
          components={{
            ...defaultComponents,
            ...customComponents,
          }}
        />
      </Flex>
    </Box>
  );
}
