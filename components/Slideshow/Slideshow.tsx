import { Box, Button, Flex } from "@radix-ui/themes";
import { useContext, type Ref } from "react";
import { type Template } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { PageBodySlideshowContentFilter } from "../../tina/__generated__/types";
import { defaultComponents } from "../../tina/components";
import { default as rtElements } from "../../tina/template-fields/rt-elements";
import type { CustomComponentProps } from "../../tina/types";
import { LanguageContext } from "../../utils/context/language";
import { buildHeight } from "../../utils/radix-sizes";
import styles from "./Slideshow.module.css";
import useSlideshow from "./hook";

export const slideshowFields: Template["fields"] = [
  {
    name: "slideshow",
    label: "Slides",
    type: "object",
    fields: [rtElements],
  },
];

export default function Slideshow({
  content,
  size,
}: CustomComponentProps<PageBodySlideshowContentFilter>) {
  const language = useContext(LanguageContext);
  const { slideshow, slideshowContainer, goToSlide, isActiveSlide } =
    useSlideshow({
      nextSlideTimeout: 4000,
    });

  return (
    <>
      <Box
        position={"relative"}
        width={"100%"}
        height={buildHeight(size)}
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
          {content?.[language]?.slideshow?.elements &&
            (content?.[language]?.slideshow?.elements as any).map(
              (element, i) => (
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
                    content={element.element}
                    components={{ ...defaultComponents }}
                  />
                </Flex>
              )
            )}
        </Flex>

        <Flex justify={"center"}>
          <Flex
            justify={"center"}
            position={"absolute"}
            bottom={"16px"}
            p={"2"}
            gap={"1"}
            className={styles.slideControls}
          >
            {(content?.[language]?.slideshow?.elements as []).map(
              (element, index) => (
                <Button
                  size={"1"}
                  radius="full"
                  onClick={() => goToSlide(index + 1)}
                  key={index}
                  className={`${
                    index === isActiveSlide
                      ? styles.activeSlideControl
                      : styles.slideControl
                  } ${styles.control}`}
                >
                  <Box></Box>
                </Button>
              )
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
