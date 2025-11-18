import { Box, Button, Flex } from "@radix-ui/themes";
import { type Ref } from "react";
import type { PageBlocksSlideshowEn } from "../../tina/__generated__/types";
import styles from "./Slideshow.module.css";
import useSlideshow from "./hook";
import Image from "../Image/Image";

export default function Slideshow(props: PageBlocksSlideshowEn) {
  const { slideshow, scrollToSlide } = useSlideshow({
    numberOfSlides: props.slides?.length,
    nextSlideTimeout: (props as any).nextSlideTimeout,
  });

  if (!props.slides) {
    return null;
  }

  return (
    <Box position={"relative"}>
      <Flex
        className={styles.slideContainer}
        overflowX="auto"
        overflowY="hidden"
        wrap="nowrap"
        ref={slideshow as Ref<HTMLDivElement>}
      >
        {props.slides.map((slide, index) => (
          <Box
            className={styles.slide}
            key={index}
            minWidth={"100%"}
            flexShrink={"0"}
          >
            <Image image={slide?.image} text={slide?.text} />
          </Box>
        ))}
      </Flex>

      <Flex
        className={styles.controls}
        direction={"row"}
        position={"absolute"}
        bottom={{ initial: "4", md: "7" }}
        gap={"2"}
      >
        {props.slides.map((slide, index) => (
          <Button
            radius="full"
            key={index}
            onClick={() => scrollToSlide(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </Flex>
    </Box>
  );
}
