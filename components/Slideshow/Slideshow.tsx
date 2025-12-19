import { Box, Flex } from "@radix-ui/themes";
import type { PageBlocksSlideshow } from "../../tina/__generated__/types";
import type { Ref } from "react";
import useSlideshow from "./hook";
import { renderBlocks } from "../../tina/templating/utils";
import useBreakpoint from "../../utils/hook/useBreakpoint";
import { findBreakpointValue } from "../../tina/templating/special-fields";
import { useEditState } from "tinacms/dist/react";

export default function Component(props: PageBlocksSlideshow) {
  const breakpoint = useBreakpoint();
  const numberOfSlidesShown = findBreakpointValue(
    breakpoint,
    "numberOfSlidesShown"
  );

  const { slideshow, scrollToSlide, activeSlide } = useSlideshow({
    numberOfSlides: props.content?.blocks?.length,
    numberOfSlidesShown: props.settings?.[numberOfSlidesShown] ?? 1,
    nextSlideTimeout: Number((props.settings as any)?.nextSlideTimeout) || null,
  });

  const { edit } = useEditState();

  return (
    <Box
      mx={props.settings?.marginX ?? "0"}
      my={props.settings?.marginY ?? "0"}
      mb={props.settings?.marginBottom ?? "inherit"}
      px={props.settings?.paddingX ?? "0"}
      py={props.settings?.paddingY ?? "0"}
      position={"relative"}
    >
      {/* {edit && <EditHelper {...props} />} */}
      <Flex
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

      {props.settings?.hasControls && (
        <Box
          p={"2"}
          mt={"-8"}
          mb={"0"}
          position={"absolute"}
          left={"50%"}
          style={{
            zIndex: 2,
            borderRadius: "9999px",
            transform: "translateX(-50%)",
            backgroundColor: "var(--gray-a1)",
          }}
        >
          <Flex>
            {props.content?.blocks?.map((block, index) => {
              return (
                <Box
                  onClick={() => {
                    scrollToSlide(index + 1);
                  }}
                  key={index}
                  mx={"1"}
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: "9999px",
                    backgroundColor:
                      activeSlide === index + 1
                        ? "var(--accent-1)"
                        : "var(--gray-12)",
                  }}
                />
              );
            })}
          </Flex>
        </Box>
      )}
    </Box>
  );
}
