import type { PageBlocksImageEn } from "../../tina/__generated__/types";
import NextImage from "next/image";
import { Box, AspectRatio, Flex } from "@radix-ui/themes";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import components from "../../tina/components";
import placeholders from "../placeholders";

const aspectRatioMap: Record<string, number> = {
  "16/9": 16 / 9,
  "4/3": 4 / 3,
  "1/1": 1,
  "3/4": 3 / 4,
};

export default function Image(props: PageBlocksImageEn) {
  return (
    <Box position="relative">
      <AspectRatio
        ratio={aspectRatioMap[(props as any).aspectRatio] ?? 16 / 9}
        data-tina-field={tinaField(props, "image")}
      >
        <NextImage
          src={
            props.image && props.image !== "" ? props.image : placeholders.image
          }
          fill
          // TODO
          alt=""
        />
        <Flex position="absolute" inset="0" style={{ zIndex: 1 }}>
          <Box p={{ initial: "5", md: "9" }}>
            <div data-tina-field={tinaField(props, "text")}>
              <TinaMarkdown content={props.text} components={components} />
            </div>
          </Box>
        </Flex>
      </AspectRatio>
    </Box>
  );
}
