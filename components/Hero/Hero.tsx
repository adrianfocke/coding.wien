import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { useContext, type Ref } from "react";
import type { PageBodyHeroContentFilter } from "../../tina/__generated__/types";
import type { CustomComponentProps } from "../../tina/types";
import useAnimation from "../../utils/animation/useAnimation";
import { LanguageContext } from "../../utils/context/language";
import { buildHeight, buildWidth } from "../../utils/radix-sizes";
import styles from "./Hero.module.css";

export default function Hero({
  animation,
  content,
  size,
}: CustomComponentProps<PageBodyHeroContentFilter>) {
  const language = useContext(LanguageContext);
  const { animationContainer } = useAnimation(animation);

  return (
    <Box
      pt={"9"}
      pb={"9"}
      className={styles.box}
      height={buildHeight(size)}
      width={buildWidth(size)}
      overflow={"scroll"}
      ref={animationContainer as Ref<HTMLDivElement>}
    >
      <Flex direction={"column"} align={"center"}>
        <Heading className="serif" size={"9"}>
          {content?.[language]?.content?.punchline as any}
        </Heading>
        <Text className="sans" mt={"2"} size={"4"}>
          {content?.[language]?.content?.additionalPunchline as any}
        </Text>
        <Flex>
          {content?.[language]?.content?.cta && (
            <Flex mt={"5"} gap={"2"}>
              <Button radius="full"  key={1}>
                <Text size={"6"} className="serif">
                  {content?.[language]?.content?.cta[0].text}
                </Text>
              </Button>
              <Button radius={"full"} variant={"outline"} key={2}>
                <Text size={"6"} className="serif">
                  {content?.[language]?.content?.cta[1].text}
                </Text>
              </Button>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
