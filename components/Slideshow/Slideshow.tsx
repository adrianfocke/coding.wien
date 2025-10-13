import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/legacy/image";
import Link from "next/link";
import { use, type Ref } from "react";
import type { PageBodySlideshowFilter } from "../../tina/__generated__/types";
import { getLayoutProp } from "../../tina/templates/layout";
import { LanguageContext } from "../../utils/context/language";
import styles from "./Slideshow.module.css";
import useSlideshow from "./hook";
import { useBreakpoint } from "../../utils/hooks/breakoint";
import { tinaField } from "tinacms/dist/react";
import { turnReferenceIntoLink } from "../../tina/utils";
import type { SlideshowType } from "./SlideshowTemplate";

export default function Slideshow(props: PageBodySlideshowFilter) {
  const language = use(LanguageContext);
  const breakpoint = useBreakpoint();

  const { slideshow, slideshowContainer, goToSlide, isActiveSlide, jumpSlide } =
    useSlideshow({ nextSlideTimeout: props.nextSlideTimeout });

  const slideshowType = props.variant as SlideshowType | undefined;

  return (
    <Box position={"relative"} ref={slideshowContainer as Ref<HTMLDivElement>}>
      {props?.[language]?.heading && (
        <Heading
          size={"8"}
          className={`fontNormal serif`}
          mb={"4"}
          data-tina-field={tinaField(props[language], "heading")}
        >
          {props?.[language]?.heading as any}
        </Heading>
      )}
      <Flex
        className={`${styles.slideContainer} scrollSnapMandatory`}
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
                linksToReference: string;
                linkText: string;
              }
            ]
          ).map((element, i) => (
            <Flex
              justify={"center"}
              position={"relative"}
              key={i}
              minWidth={"100%"}
              maxWidth={"100%"}
              className={
                slideshowType === "slideshow" ? `scrollSnapAlignStart` : ""
              }
              height={
                getLayoutProp((props as any).layout)("height")[breakpoint] +
                "px"
              }
              style={{ border: "1px solid red" }}
            >
              <Flex
                justify={"center"}
                align={"center"}
                direction={"column"}
                className={styles.slide}
                mt={"5"}
                mb={"9"}
                p={"5"}
                width={"80vw"}
              >
                <Heading
                  align={"center"}
                  size={"9"}
                  className={`fontNormal serif`}
                  data-tina-field={tinaField(
                    props[language]?.slides![i],
                    "heading"
                  )}
                >
                  {element.heading}
                </Heading>

                <Text
                  mt={"3"}
                  m={"3"}
                  align={"center"}
                  data-tina-field={tinaField(
                    props[language]?.slides![i],
                    "text"
                  )}
                >
                  {element.text}
                </Text>
                <Link
                  href={`${
                    element.linksToReference
                      ? turnReferenceIntoLink(element.linksToReference)
                      : element.linksTo
                  }`}
                >
                  <Button
                    size={"3"}
                    title={`Button link to ${element.linksTo}`}
                    className="serif secondaryButton"
                    variant={"outline"}
                    color={"gray"}
                    radius={"full"}
                    aria-label={element.linkText ?? element.linksTo}
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
                  alt={
                    element.heading
                      ? `Image for ${element.heading}`
                      : "Slideshow image"
                  }
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </Flex>
          ))}

        {slideshowType === "slideshow" ||
          (!slideshowType && (
            <Flex
              className={styles.slideControls}
              justify={"center"}
              position={"absolute"}
              p={"2"}
              gap={"1"}
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
          ))}

        {slideshowType === "testimonial" && (
          <Flex
            className={styles.testimonialControls}
            justify={"center"}
            position={"absolute"}
            p={"2"}
            gap={"1"}
          >
            <Button
              title={`Button link to next slide`}
              size={"1"}
              radius="full"
              onClick={() => jumpSlide()}
              className={`${styles.control}`}
            >
              <Box></Box>
            </Button>
          </Flex>
        )}
      </Flex>
    </Box>
  );
}
