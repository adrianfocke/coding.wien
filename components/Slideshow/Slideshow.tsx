import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/legacy/image";
import Link from "next/link";
import { use, type Ref } from "react";
import type { PageBodySlideshowFilter } from "../../tina/__generated__/types";
import { getLayoutProps } from "../../tina/templates/layout";
import { LanguageContext } from "../../utils/context/language";
import styles from "./Slideshow.module.css";
import useSlideshow from "./hook";

export default function Slideshow(props: PageBodySlideshowFilter) {
  const language = use(LanguageContext);
  const { layout } = props as any;

  const { slideshow, slideshowContainer, goToSlide, isActiveSlide } =
    useSlideshow({ nextSlideTimeout: props.nextSlideTimeout });

  return (
    <Box
      position={"relative"}
      height={getLayoutProps(props.layout as any)("height")}
      width={getLayoutProps(props.layout as any)("width")}
      pt={getLayoutProps(layout)("paddingTop")}
      pb={getLayoutProps(layout)("paddingBottom")}
      pr={getLayoutProps(layout)("paddingRight")}
      pl={getLayoutProps(layout)("paddingLeft")}
      mt={getLayoutProps(layout)("marginTop")}
      mb={getLayoutProps(layout)("marginBottom")}
      mr={getLayoutProps(layout)("marginRight")}
      ml={getLayoutProps(layout)("marginLeft")}
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
        {props?.[language]?.slides &&
          (
            props?.[language]?.slides as [
              {
                image: string;
                text: string;
                heading: string;
                linksTo: string;
                linkText: string;
              }
            ]
          ).map((element, i) => (
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
                mx={"5"}
                p={"6"}
                justify={"center"}
                align={"center"}
                direction={"column"}
                className={styles.slide}
              >
                <Heading
                  className="serif"
                  size={"9"}
                  style={{ fontWeight: "normal" }}
                >
                  {element.heading}
                </Heading>

                <Text mt={"3"} mb={"3"} align={"center"}>
                  {element.text}
                </Text>
                <Link href={`${element.linksTo}`}>
                  <Button
                    size={"3"}
                    title={`Button link to ${element.linksTo}`}
                    className="serif secondaryButton"
                    variant={"outline"}
                    color={"gray"}
                    radius={"full"}
                  >
                    <Text size={"5"}>
                      {element.linkText ?? element.linksTo}
                    </Text>
                  </Button>
                </Link>
              </Flex>

              {element.image && (
                <Image
                  priority={i === 0}
                  src={element.image}
                  alt={`Slider image for ${element.heading}`}
                  layout="fill"
                  objectFit="cover"
                  style={{ zIndex: "-1" }}
                />
              )}
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
          {props?.[language]?.slides &&
            (props?.[language]?.slides as []).map((element, index) => (
              <Button
                title={`Button link to next slide`}
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
            ))}
        </Flex>
      </Flex>
    </Box>
  );
}
