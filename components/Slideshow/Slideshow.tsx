import {
  Box,
  Button,
  Callout,
  Container,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@radix-ui/themes";
import Image from "next/legacy/image";
import Link from "next/link";
import { use, type Ref } from "react";
import type {
  InputMaybe,
  PageBodySlideshowFilter,
  StringFilter,
} from "../../tina/__generated__/types";
import { getLayoutProp } from "../../tina/templates/layout";
import { LanguageContext } from "../../utils/context/language";
import styles from "./Slideshow.module.css";
import useSlideshow from "./hook";
import { useBreakpoint } from "../../utils/hooks/breakoint";
import { tinaField } from "tinacms/dist/react";
import { turnReferenceIntoLink } from "../../tina/utils";
import type { SlideshowType } from "./SlideshowTemplate";
import { ArrowRightIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { displayTextOrPlaceholder, placeholders } from "../helpers";

export default function Slideshow(props: PageBodySlideshowFilter) {
  const language = use(LanguageContext);
  const breakpoint = useBreakpoint();

  const { slideshow, slideshowContainer, goToSlide, isActiveSlide, jumpSlide } =
    useSlideshow({ nextSlideTimeout: props.nextSlideTimeout });

  const slideshowType = props.variant as SlideshowType | undefined;

  if (!props?.[language]?.slides) {
    return (
      <Callout.Root m={"4"} data-tina-field={tinaField(props)}>
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>
          Add your slides in the component to see something here.
        </Callout.Text>
      </Callout.Root>
    );
  }

  return (
    <Box
      position={"relative"}
      ref={slideshowContainer as Ref<HTMLDivElement>}
      my={getLayoutProp((props as any).layout)("marginY")[breakpoint] ?? "6"}
    >
      {props?.[language]?.heading && (
        <Container>
          <Heading
            size={"8"}
            m={"4"}
            className={`fontNormal serif`}
            data-tina-field={tinaField(props[language], "heading")}
          >
            {props?.[language]?.heading as any}
          </Heading>
        </Container>
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
                images: { image: string; portraitImage: string };
                text: InputMaybe<StringFilter> | undefined;
                heading: InputMaybe<StringFilter> | undefined;
                linksTo: InputMaybe<StringFilter> | undefined;
                linksToReference: string;
                linkText: any;
              }
            ]
          ).map((element, i) => (
            <Flex
              justify={"center"}
              position={"relative"}
              key={i}
              minWidth={slideshowType === "testimonial" ? "80%" : "100%"}
              maxWidth={slideshowType === "testimonial" ? "80%" : "100%"}
              className={`scrollSnapAlignStart`}
              minHeight={
                getLayoutProp((props as any).layout)("height")[breakpoint] +
                "px"
              }
              mr={slideshowType === "testimonial" ? "4" : "0"}
            >
              <Flex
                justify={"center"}
                align={"center"}
                direction={"column"}
                className={styles.slide}
                mt={"5"}
                mb={"9"}
                p={"6"}
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
                  {displayTextOrPlaceholder(
                    element.heading,
                    placeholders.heading
                  )}
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
                  {displayTextOrPlaceholder(element.text, placeholders.text)}
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
                      {displayTextOrPlaceholder(
                        element.linkText,
                        placeholders.link
                      )}
                    </Text>
                  </Button>
                </Link>
              </Flex>

              {element.images && (
                <Image
                  priority={i === 0}
                  src={
                    breakpoint === "xs"
                      ? element.images.portraitImage
                      : element.images.image
                  }
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
          (slideshowType === undefined && (
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
            <IconButton
              variant="surface"
              title={`Button link to next slide`}
              size={"1"}
              radius="full"
              onClick={() => jumpSlide()}
            >
              <ArrowRightIcon />
            </IconButton>
          </Flex>
        )}
      </Flex>
    </Box>
  );
}
