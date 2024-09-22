import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import { AccessibleIcon, Box, Flex, IconButton } from "@radix-ui/themes";
import type { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";
import type { LegacyRef, ReactElement } from "react";
import type { Template } from "tinacms";
import "../../styles/main.css";
import { WidthField } from "../../tina/fields";
import { DEFAULT_WIDTH } from "../../utils/constants";
import { useCalculatePixelWidth } from "../../utils/hooks";
import useSlideshow from "./hook";

export const SlideshowTemplate: Template = {
  name: "Slideshow",
  label: "Slideshow",
  fields: [WidthField],
};

export type SlideshowProps = {
  height?: Responsive<string>;
  slides: ReactElement[];
  width: Responsive<string>;
};

export default function Slideshow({
  height = {
    initial: "260px",
    xs: "260px",
    sm: "360px",
    md: "360px",
    lg: "460px",
    xl: "460px",
  },
  slides = [],
  width = DEFAULT_WIDTH,
}: SlideshowProps) {
  const slideWidth = useCalculatePixelWidth(width);
  const { slideshow, nextSlide, previousSlide } = useSlideshow(slideWidth);

  return (
    <Box position={"relative"} width={width}>
      <Flex
        className="no-scrollbar"
        width={width}
        direction="row"
        overflowX="auto"
        overflowY="hidden"
        wrap="nowrap"
        ref={slideshow as LegacyRef<HTMLDivElement>}
      >
        {slides.map((slide, i) => (
          <Box
            key={i}
            width={width}
            height={height}
            style={{
              flex: "0 0 auto",
            }}
          >
            {slide}
          </Box>
        ))}
      </Flex>

      <Flex
        className="pointer-events-none"
        align={"center"}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
        }}
      >
        <IconButton
          ml={"2"}
          className="pointer-events-auto"
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
        className="pointer-events-none"
        align={"center"}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <IconButton
          mr={"2"}
          className="pointer-events-auto"
          onClick={nextSlide}
          radius="full"
          variant="surface"
        >
          <AccessibleIcon label={"Slideshow next item control icon"}>
            <CaretRightIcon width={20} height={20}></CaretRightIcon>
          </AccessibleIcon>
        </IconButton>
      </Flex>
    </Box>
  );
}
