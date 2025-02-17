import { Box, Button, Flex } from "@radix-ui/themes";
import { useContext, type Ref } from "react";
import { type Template } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type {
  PageBodySlideshowComponentSettingsFilter,
  PageBodySlideshowContentFilter,
} from "../../tina/__generated__/types";
import { defaultComponents } from "../../tina/components";
import animation from "../../tina/template-fields/animation";
import intl from "../../tina/template-fields/intl";
import { default as rtElements } from "../../tina/template-fields/rt-elements";
import size from "../../tina/template-fields/size";
import type { CustomComponentProps } from "../../tina/types";
import { LanguageContext } from "../../utils/context/language";
import { buildHeight } from "../../utils/radix-sizes";
import styles from "./Slideshow.module.css";
import useSlideshow from "./hook";

export const slideshowSettings: Template["fields"][number] = {
  name: "componentSettings",
  label: "Slideshow settings",
  type: "object",
  fields: [
    {
      name: "nextSlideTimeout",
      label: "Next slide timeout",
      type: "number",
    },
  ],
};

export const slideshowFields: Template["fields"] = [
  {
    name: "slideshow",
    label: "Slides",
    type: "object",
    fields: [rtElements],
  },
];

export const SlideshowTemplate: Template = {
  name: "Slideshow",
  fields: [animation, size, slideshowSettings, intl(slideshowFields)],
};

export default function Slideshow({
  content,
  size,
  componentSettings,
}: CustomComponentProps<
  PageBodySlideshowContentFilter,
  PageBodySlideshowComponentSettingsFilter
>) {
  const language = useContext(LanguageContext);
  const { slideshow, slideshowContainer, goToSlide, isActiveSlide } =
    useSlideshow(componentSettings);

  console.log(componentSettings);

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
                  <Flex
                    direction={"column"}
                    align={"center"}
                    p={"4"}
                    gap={"2"}
                    className={styles.slideshowOverlay}
                  >
                    <TinaMarkdown
                      content={element.element}
                      components={{ ...defaultComponents }}
                    />
                  </Flex>
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
            {content?.[language]?.slideshow?.elements &&
              (content?.[language]?.slideshow?.elements as []).map(
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
