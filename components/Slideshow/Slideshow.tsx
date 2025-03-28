import { Box, Button, Flex } from "@radix-ui/themes";
import { useContext, type Ref } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type {
  PageBodySlideshowContentFilter,
  PageBodySlideshowSettingsFilter,
} from "../../tina/__generated__/types";
import defaultComponents from "../../tina/components/default-components";
import { imageComponent } from "../../tina/components/variable-components";
import { getLayoutProps } from "../../tina/template-fields/layout";
import type { CustomComponentProps } from "../../tina/types";
import { LanguageContext } from "../../utils/context/language";
import styles from "./Slideshow.module.css";
import useSlideshow from "./hook";

export default function Slideshow({
  content,
  layout,
  settings,
}: CustomComponentProps<
  PageBodySlideshowContentFilter,
  PageBodySlideshowSettingsFilter
>) {
  const language = useContext(LanguageContext);
  const { slideshow, slideshowContainer, goToSlide, isActiveSlide } =
    useSlideshow(settings);

  return (
    <>
      <p>Slider</p>
      {/* <Box
        position={"relative"}
        height={getLayoutProps(layout)("height")}
        width={getLayoutProps(layout)("width")}
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
          {content?.[language]?.slides?.elements &&
            (content?.[language]?.slides?.elements as any).map((element, i) => (
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
                    components={{
                      ...defaultComponents,
                      ...imageComponent["responsive"],
                    }}
                  />
                </Flex>
              </Flex>
            ))}
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
            {content?.[language]?.slides?.elements &&
              (content?.[language]?.slides?.elements as []).map(
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
      </Box> */}
    </>
  );
}
