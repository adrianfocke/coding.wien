import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import { AccessibleIcon, Box, Flex, IconButton } from "@radix-ui/themes";
import type { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";
import Image from "next/image";
import type { LegacyRef } from "react";
import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text";
import "../../styles/main.css";
import { HeightField, RichTextField, WidthField } from "../../tina/fields";
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from "../../utils/constants";
import { useCalculatePixelWidth } from "../../utils/hooks";
import useSlideshow from "./hook";
import "./styles.css";

export const SlideshowTemplate = {
  name: "Slideshow",
  label: "Slideshow",
  fields: [WidthField, HeightField, RichTextField],
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

  console.log("Slideshow width: ", width);

  return (
    (<Box position={"relative"} width={width} height={height}>
      <Flex
        className="no-scrollbar"
        width={"100%"}
        height={"100%"}
        direction="row"
        overflowX="auto"
        overflowY="hidden"
        wrap="nowrap"
        ref={slideshow as LegacyRef<HTMLDivElement>}
        style={{ scrollSnapType: "x mandatory" }}
      >
        {slides.map((slide, i) => (
          <Flex
            className="slide"
            align={"center"}
            justify={"center"}
            position={"relative"}
            key={i}
            minWidth={width}
            style={{ scrollSnapAlign: "start" }}
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
                    priority={i === 0}
                    src={props.url ?? ""}
                    alt={""}
                    fill
                    sizes="100vw"
                    style={{
                      zIndex: "-1",
                      objectFit: "cover"
                    }} />
                ),
              }}
            />
          </Flex>
        ))}
      </Flex>
      <Flex
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
      </Flex>
    </Box>)
  );
}
