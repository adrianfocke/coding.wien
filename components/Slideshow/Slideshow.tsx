import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import { AccessibleIcon, Box, Flex, IconButton } from "@radix-ui/themes";
import Image from "next/image";
import "../../styles/main.css";
import useSlideshow from "./hook";

export default ({
  images = [],
  imageWidth,
  imageHeight,
}: {
  images: { image: string; altText: string }[];
  imageWidth: number;
  imageHeight: number;
}) => {
  const { slideshow, nextSlide, previousSlide } = useSlideshow(imageWidth);
  const controlsPostion = { top: imageHeight * 0.5 + 40 };

  return (
    <Box maxWidth={{ md: "90vw", lg: "700px" }}>
      <Flex
        className="no-scrollbar"
        maxWidth={"500"}
        position={"relative"}
        height={`${imageHeight}`}
        direction={"row"}
        overflowX={"auto"}
        wrap={"nowrap"}
        ref={slideshow as any}
      >
        {images.map((image, i) => (
          <Image
            priority={i === 0 ? true : false}
            key={i}
            src={image.image}
            style={{ objectFit: "cover", flexShrink: 0 }}
            width={imageWidth}
            height={500}
            alt={image.altText}
          />
        ))}
      </Flex>

      <Flex
        justify={"between"}
        position={"absolute"}
        style={{
          top: controlsPostion.top,
          left: 20,
          right: 20,
        }}
      >
        <IconButton onClick={previousSlide} radius="full" variant="surface">
          <AccessibleIcon label={"Slideshow previous item control icon"}>
            <CaretLeftIcon width={20} height={20}></CaretLeftIcon>
          </AccessibleIcon>
        </IconButton>

        <IconButton onClick={nextSlide} radius="full" variant="surface">
          <AccessibleIcon label={"Slideshow next item control icon"}>
            <CaretRightIcon width={20} height={20}></CaretRightIcon>
          </AccessibleIcon>
        </IconButton>
      </Flex>
    </Box>
  );
};
