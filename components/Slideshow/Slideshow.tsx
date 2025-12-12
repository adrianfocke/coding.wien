import { Box, Button, Flex, Container } from "@radix-ui/themes";
import { type Ref, useMemo } from "react";
import type { PageBlocksSlideshowEn } from "../../tina/__generated__/types";
import styles from "./Slideshow.module.css";
import useSlideshow from "./hook";
import Image from "../Image/Image";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";
import useBreakpoint from "../../utils/useBreakpoint";

export default function Slideshow(props: PageBlocksSlideshowEn) {
  const breakpoint = useBreakpoint();
  const numberOfSlidesShown = props.numberOfSlidesShown || 1;
  const numberOfSlidesShownOnMobile =
    (props as any).numberOfSlidesShownOnMobile || 1;

  // Use mobile count on small screens, otherwise use desktop count
  const effectiveNumberOfSlides =
    breakpoint === "initial"
      ? numberOfSlidesShownOnMobile
      : numberOfSlidesShown;

  const slideshowSettings = useMemo(
    () => ({
      numberOfSlides: props.slides?.length,
      numberOfSlidesShown: effectiveNumberOfSlides,
      nextSlideTimeout: (props as any).nextSlideTimeout,
    }),
    [
      props.slides?.length,
      effectiveNumberOfSlides,
      (props as any).nextSlideTimeout,
    ]
  );

  const { slideshow, scrollToSlide, nextSlide } =
    useSlideshow(slideshowSettings);

  if (!props.slides) {
    return null;
  }

  const hasNextSlideHint = (props as any).hintNextSlide;
  const showNextSlidePreview =
    effectiveNumberOfSlides === 1 && hasNextSlideHint;

  let slideWidthPercent = 100 / effectiveNumberOfSlides;
  if (showNextSlidePreview) {
    slideWidthPercent = 80;
  }

  const content = (
    <Box
      style={{
        background: props.coloredBackground ? "var(--accent-9)" : undefined,
      }}
      position={"relative"}
      pt={props.margin?.top ?? "0"}
      pb={props.margin?.bottom ?? "0"}
      pr={props.margin?.right ?? "0"}
      pl={props.margin?.left ?? "0"}
    >
      <Flex
        gap={"4"}
        className={styles.slideContainer}
        overflowX="auto"
        overflowY="hidden"
        wrap="nowrap"
        ref={slideshow as Ref<HTMLDivElement>}
      >
        {props.slides.map((slide, index) => (
          <Box
            key={index}
            minWidth={`${slideWidthPercent}%`}
            flexShrink={"0"}
            style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
          >
            <Image
              {...slide}
              //@ts-expect-error this is to access via tinaField
              _content_source={(slide as any)?._content_source}
            />
          </Box>
        ))}
      </Flex>

      {(props as any).showControls && (
        <Flex
          display={{ initial: "flex", md: "none" }}
          direction={"row"}
          position={"absolute"}
          bottom={"50%"}
          gap={"2"}
          right={"8px"}
          style={{
            pointerEvents: "auto",
            zIndex: 1,
          }}
        >
          <Button
            radius="full"
            onClick={nextSlide}
            aria-label={`Go to next slide`}
          >
            <ArrowRightIcon />
          </Button>
        </Flex>
      )}
    </Box>
  );

  const fullwidth = (props as any).fullwidth ?? false;

  return fullwidth ? content : <Container>{content}</Container>;
}
