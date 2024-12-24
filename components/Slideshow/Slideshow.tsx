import { Box, Flex } from "@radix-ui/themes";
import type { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";
import type { LegacyRef } from "react";
import type { Template } from "tinacms";
import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text";
import { defaultComponents } from "../../tina/components";
import { Height, JSXElements } from "../../tina/types";
import styles from "./Slideshow.module.css";
import useSlideshow from "./hook";

export const SlideshowTemplate: Template = {
  name: "Slideshow",
  fields: [...[Height], ...[JSXElements]],
};

export type SlideshowProps = {
  elements: TinaMarkdownContent[];
  height?: Responsive<string>;
};

export default function Slideshow({
  elements = [],
  height = "100vh",
}: SlideshowProps) {
  const { slideshow, slideshowContainer } = useSlideshow({
    nextSlideTimeout: 4000,
  });

  return (
    <>
      <Box
        position={"relative"}
        width={"100%"}
        height={height}
        ref={slideshowContainer as LegacyRef<HTMLDivElement>}
      >
        <Flex
          className={styles.slideContainer}
          style={{ scrollSnapType: "x mandatory" }}
          width={"100%"}
          height={"100%"}
          direction="row"
          overflowX="auto"
          overflowY="hidden"
          wrap="nowrap"
          ref={slideshow as LegacyRef<HTMLDivElement>}
        >
          {elements.map((slide, i) => (
            <Flex
              align={"center"}
              justify={"center"}
              position={"relative"}
              key={i}
              minWidth={"100%"}
              maxWidth={"100%"}
              style={{ scrollSnapAlign: "start" }}
            >
              <TinaMarkdown
                content={slide}
                components={{ ...defaultComponents }}
              />
            </Flex>
          ))}
        </Flex>
        {/* <Flex
      align={"center"}
      style={{
        pointerEvents: "none",
        position: "absolute",
        top: 0,
        bottom: 0,
      }}
    >
      <IconButton
        ml={"2"}
        style={{ pointerEvents: "auto" }}
        onClick={previousSlide}
        radius="full"
        variant="surface"
      >
        <AccessibleIcon label={"Slideshow previous item control icon"}>
          <CaretLeftIcon width={20} height={20}></CaretLeftIcon>
        </AccessibleIcon>
      </IconButton>
    </Flex>
    <Flex
      align={"center"}
      style={{
        pointerEvents: "none",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <IconButton
        mr={"2"}
        style={{ pointerEvents: "auto" }}
        onClick={nextSlide}
        radius="full"
        variant="surface"
      >
        <AccessibleIcon label={"Slideshow next item control icon"}>
          <CaretRightIcon width={20} height={20}></CaretRightIcon>
        </AccessibleIcon>
      </IconButton>
    </Flex> */}
      </Box>
    </>
  );
}
