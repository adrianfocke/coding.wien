import type { PageBlocksImageEn } from "../../tina/__generated__/types";
import NextImage from "next/image";
import { Box, AspectRatio, Flex } from "@radix-ui/themes";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import components from "../../tina/components";
import placeholders from "../placeholders";
import { TinaEditContext } from "../../utils/context/tina";
import { useContext } from "react";

export const allowedAspectRatios = ["16/9", "4/3", "1/1", "3/4", "5/1"];

export const aspectRatioMap: Record<
  (typeof allowedAspectRatios)[number],
  number
> = {
  "16/9": 16 / 9,
  "4/3": 4 / 3,
  "1/1": 1,
  "3/4": 3 / 4,
  "5/1": 5 / 1,
};

export default function Image(
  props: PageBlocksImageEn & { hideImage?: boolean }
) {
  const { isEditable } = useContext(TinaEditContext);

  return (
    <Box position="relative">
      <AspectRatio
        ratio={aspectRatioMap[(props as any).aspectRatio] ?? 16 / 9}
        data-tina-field={isEditable ? tinaField(props, "image") : undefined}
        style={{ overflow: "hidden" }}
      >
        {!props.hideImage && (
          <NextImage
            src={
              props.image && props.image !== ""
                ? props.image
                : placeholders.image
            }
            fill
            objectFit="cover"
            alt={props.alt ?? ""}
          />
        )}

        <Flex position="absolute" inset="0" style={{ zIndex: 1 }}>
          <Box p={{ initial: "5", md: "9" }}>
            <div
              data-tina-field={
                isEditable ? tinaField(props, "text") : undefined
              }
              style={{
                color: props.whiteTextOverlay ? "white" : "var(--text-12)",
              }}
            >
              <TinaMarkdown content={props.text} components={components} />
            </div>
          </Box>
        </Flex>
      </AspectRatio>
    </Box>
  );
}
