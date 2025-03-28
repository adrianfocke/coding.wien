import { Box, Flex } from "@radix-ui/themes";
import { useContext, type Ref } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import customComponents from "../../tina/components/custom-components";
import defaultComponents from "../../tina/components/default-components";
import { getLayoutProps } from "../../tina/template-fields/layout";
import type { CustomComponentProps } from "../../tina/types";
import useAnimation from "../../utils/animation/useAnimation";
import { LanguageContext } from "../../utils/context/language";
import styles from "./HighlightedSection.module.css";

export default function HighlightedSection({
  animation,
  content,
  layout,
}: CustomComponentProps<any>) {
  const language = useContext(LanguageContext);
  const { animationContainer } = useAnimation(animation);

  return (
    <Box
      p={"4"}
      className={styles.box}
      height={getLayoutProps(layout)("height")}
      width={getLayoutProps(layout)("width")}
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
