import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import { AccessibleIcon, Box, Flex, IconButton } from "@radix-ui/themes";
import Image from "next/image";
import { type LegacyRef } from "react";
import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text";
import "../../styles/main.css";
import { RichTextField } from "../../tina/fields";
import useSlideshow from "./hook";
import "./styles.css";

export const SlideshowTemplate = {
  name: "Slideshow",
  label: "Slideshow",
  fields: [RichTextField],
};

export type SlideshowProps = {
  slides: TinaMarkdownContent[];
};

export default function Slideshow({ slides = [] }: SlideshowProps) {
  const { nextSlide, previousSlide, slideshow, slideshowContainer } =
    useSlideshow();

  return (
    <Box
      position={"relative"}
      width={"100%"}
      height={`calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))`}
      ref={slideshowContainer as LegacyRef<HTMLDivElement>}
    >
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
            minWidth={"100%"}
            maxWidth={"100%"}
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
                      objectFit: "cover",
                    }}
                  />
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
    </Box>
  );
}
