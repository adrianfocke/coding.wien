import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import { AccessibleIcon, Box, Flex, IconButton } from "@radix-ui/themes";
import type { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";
import Image from "next/image";
import type { LegacyRef } from "react";
import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text";
import "../../styles/main.css";
import { ElementsField, HeightField, WidthField } from "../../tina/fields";
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from "../../utils/constants";
import { useCalculatePixelWidth } from "../../utils/hooks";
import useSlideshow from "./hook";
import "./styles.css";

export const SlideshowTemplate = {
  name: "Slideshow",
  label: "Slideshow",
  fields: [WidthField, HeightField, ElementsField],
};

export type SlideshowProps = {
  height?: Responsive<string>;
  slides: TinaMarkdownContent[];
  width?: Responsive<string>;
};

export default function Slideshow({
  height = DEFAULT_HEIGHT,
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
        height={height}
        direction="row"
        overflowX="auto"
        overflowY="hidden"
        wrap="nowrap"
        ref={slideshow as LegacyRef<HTMLDivElement>}
        style={{ scrollSnapType: "x mandatory" }} // Optional for snapping behavior
      >
        {slides.map((slide, i) => (
          <Flex
            className="slide"
            align={"center"}
            justify={"center"}
            position={"relative"}
            key={i}
            width={width}
            height={height}
            minWidth={width}
            style={{ scrollSnapAlign: "start" }} // Optional for snapping behavior
          >
            <TinaMarkdown
              content={slide}
              components={{
                img: (props: {
                  url: string;
                  caption?: string;
                  alt?: string;
                }) => (
                  <Image
                    style={{ zIndex: "-1" }}
                    priority={i === 0}
                    src={props.url ?? ""}
                    layout="fill"
                    objectFit="cover"
                    alt={""}
                  />
                ),
              }}
            />
          </Flex>
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
