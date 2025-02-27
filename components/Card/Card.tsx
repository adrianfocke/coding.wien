import { Box, Button } from "@radix-ui/themes";
import { useContext, type Ref } from "react";
import type { PageBodyCardContentFilter } from "../../tina/__generated__/types";
import type { CustomComponentProps } from "../../tina/types";
import useAnimation from "../../utils/animation/useAnimation";
import { LanguageContext } from "../../utils/context/language";
import { buildHeight, buildWidth } from "../../utils/radix-sizes";
import styles from "./Card.module.css";

export default function Card({
  animation,
  content,
  size,
}: CustomComponentProps<PageBodyCardContentFilter>) {
  const language = useContext(LanguageContext);
  const { animationContainer, animationController } = useAnimation(animation);

  return (
    <Box
      className={styles.box}
      height={buildHeight(size)}
      width={buildWidth(size)}
      overflow={"scroll"}
      ref={animationContainer as Ref<HTMLDivElement>}
    >
      <p>{(content?.[language]?.content?.name as any) || "name"}</p>
      <p>{(content?.[language]?.content?.pronouns as any) || "pronouns"}</p>
      <p>{(content?.[language]?.content?.profession as any) || "profession"}</p>
      <p>{(content?.[language]?.content?.email as any) || "email"}</p>

      <div ref={animationController as Ref<HTMLDivElement>}>
        <Button>Flip me!</Button>
      </div>

      <p>{(content?.[language]?.content?.statement as any) || "statement"}</p>
      <p>{(content?.[language]?.content?.portrait as any) || "portrait"}</p>
    </Box>
  );
}
