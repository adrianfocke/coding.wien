import { Box, Flex } from "@radix-ui/themes";
import type { PageBlocksSlideshow } from "../../tina/__generated__/types";
import type { Ref } from "react";
import styles from "./Slideshow.module.css";
import useSlideshow from "./hook";
import { renderBlocks } from "../../tina/templating/utils";

export default function Component(props: PageBlocksSlideshow) {
  const { slideshow, scrollToSlide } = useSlideshow({
    numberOfSlides: props.content?.blocks?.length,
    numberOfSlidesShown: 1,
    nextSlideTimeout: (props as any).nextSlideTimeout,
  });

  return (
    <Box
      mx={props.settings?.marginX ?? "0"}
      my={props.settings?.marginY ?? "0"}
      px={props.settings?.paddingX ?? "0"}
      py={props.settings?.paddingY ?? "0"}
    >
      <Flex
        className={styles.slideContainer}
        overflowX="auto"
        overflowY="hidden"
        wrap="nowrap"
        ref={slideshow as Ref<HTMLDivElement>}
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          scrollSnapType: "x mandatory",
        }}
      >
        {props.content?.blocks?.map((slide, index) => (
          <Box
            key={index}
            flexShrink={"0"}
            width={"100%"}
            style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
          >
            {renderBlocks(slide, index)}
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
