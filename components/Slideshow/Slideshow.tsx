import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import { AccessibleIcon, Box, Flex, IconButton } from "@radix-ui/themes";
import type { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";
import type { ReactElement } from "react";
import "../../styles/main.css";
import useSlideshow from "./hook";
import { calculateWidthInPixelsForCurrentScreen } from "./logic";

export default ({
  controlsPosition = "block",
  height = {
    initial: "260px",
    xs: "260px",
    sm: "360px",
    md: "360px",
    lg: "460px",
    xl: "460px",
  },
  numberOfSlidesShown = 1,
  slides = [],
  width,
}: {
  controlsPosition?: "overlay" | "block";
  height?: Responsive<string>;
  numberOfSlidesShown?: number;
  slides: ReactElement[];
  width: Responsive<string>;
}) => {
  const slideWidth = calculateWidthInPixelsForCurrentScreen(width);
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
        ref={slideshow as any}
      >
        {slides.map((slide, i) => (
          <Box
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
};
