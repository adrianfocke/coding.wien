import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { AccessibleIcon, Box, Flex } from "@radix-ui/themes";
import { useContext, type Ref } from "react";
import { IconButton, type Template } from "tinacms";
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
  const { slideshow, slideshowContainer, nextSlide, previousSlide } =
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
