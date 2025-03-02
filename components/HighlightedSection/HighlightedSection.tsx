import { Box } from "@radix-ui/themes";
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
  size,
}: CustomComponentProps<any>) {
  const language = useContext(LanguageContext);
  const { animationContainer } = useAnimation(animation);

  return (
    <Box
      p={"4"}
      pt={"6"}
      pb={"6"}
      className={styles.box}
      height={buildHeight(size)}
      width={buildWidth(size)}
      overflow={"scroll"}
      ref={animationContainer as Ref<HTMLDivElement>}
    >
      <TinaMarkdown
        content={content?.[language]?.content}
        components={{
          ...defaultComponents,
          ...customComponents,
        }}
      />
    </Box>
  );
}
