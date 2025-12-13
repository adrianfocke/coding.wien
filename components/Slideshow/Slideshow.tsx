import { Box, Flex } from "@radix-ui/themes";
import type { PageBlocksSlideshow } from "../../tina/__generated__/types";
import type { Ref } from "react";
import styles from "./Slideshow.module.css";
import useSlideshow from "./hook";
import { renderBlocks } from "../../tina/templating/utils";
import useBreakpoint from "../../utils/hook/useBreakpoint";
import { findBreakpointValue } from "../../tina/templating/special-fields";
import { useEditState } from "tinacms/dist/react";
import EditHelper from "../../tina/templating/EditHelper";

export default function Component(props: PageBlocksSlideshow) {
  const breakpoint = useBreakpoint();
  const numberOfSlidesShown = findBreakpointValue(
    breakpoint,
    "numberOfSlidesShown"
  );

  const { slideshow } = useSlideshow({
    numberOfSlides: props.content?.blocks?.length,
    numberOfSlidesShown: props.settings?.[numberOfSlidesShown] ?? 1,
    nextSlideTimeout: Number((props.settings as any)?.nextSlideTimeout) || null,
  });

  const { edit } = useEditState();

  return (
    <Box
      mx={props.settings?.marginX ?? "0"}
      my={props.settings?.marginY ?? "0"}
      px={props.settings?.paddingX ?? "0"}
      py={props.settings?.paddingY ?? "0"}
    >
      {edit && <EditHelper {...props} />}
      <Flex
        className={styles.slideContainer}
        overflowX="auto"
        overflowY="hidden"
        wrap="nowrap"
        ref={slideshow as Ref<HTMLDivElement>}
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          scrollSnapType: "x mandatory",
        }}
      >
        {props.content?.blocks?.map((slide, index) => (
          <Box
            key={index}
            flexShrink={"0"}
            width={"100%"}
            style={{ scrollSnapAlign: "start", scrollSnapStop: "always" }}
          >
            {renderBlocks(slide, index)}
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
