import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { AccessibleIcon, Box, Flex } from "@radix-ui/themes";
import type { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";
import type { Ref } from "react";
import { IconButton, type Template } from "tinacms";
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
  const { slideshow, slideshowContainer, nextSlide, previousSlide } =
    useSlideshow({
      nextSlideTimeout: 4000,
    });

  return (
    <>
      <Box
        position={"relative"}
        width={"100%"}
        height={height}
        ref={slideshowContainer as Ref<HTMLDivElement>}
      >
        <Flex
          className={styles.slideContainer}
          style={{ scrollSnapType: "x mandatory" }}
          overflowX="auto"
          overflowY="hidden"
          wrap="nowrap"
          ref={slideshow as Ref<HTMLDivElement>}
        >
          {elements.map((element, i) => (
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
                content={element}
                components={{ ...defaultComponents }}
              />
            </Flex>
          ))}
        </Flex>

        <Flex className={styles.slideControls}>
          <IconButton onClick={previousSlide}>
            <AccessibleIcon label={"Slideshow previous item control icon"}>
              <ArrowLeftIcon className={styles.slideControlsButton} />
            </AccessibleIcon>
          </IconButton>
          <IconButton onClick={nextSlide}>
            <AccessibleIcon label={"Slideshow next item control icon"}>
              <ArrowRightIcon className={styles.slideControlsButton} />
            </AccessibleIcon>
          </IconButton>
        </Flex>
      </Box>
    </>
  );
}
