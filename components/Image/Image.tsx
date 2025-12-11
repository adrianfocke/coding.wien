import { AspectRatio, Flex, Box } from "@radix-ui/themes";
import { useContext } from "react";
import { LanguageContext } from "../../utils/context/language";
import NextImage from "next/image";
import { aspectRatioMap } from "../../tina/tina-fields/granular-fields";
import { tinaField } from "tinacms/dist/react";
import renderBlocks from "../../tina/tina-fields/renderBlocks";
import placeholders from "../placeholders";
import type { PageBlocksImage } from "../../tina/__generated__/types";

export default function Component(props: PageBlocksImage) {
  const language = useContext(LanguageContext);

  return (
    <Box
      mx={props.settings?.marginX ?? "0"}
      my={props.settings?.marginY ?? "0"}
      px={props.settings?.paddingX ?? "0"}
      py={props.settings?.paddingY ?? "0"}
    >
      <AspectRatio
        data-tina-field={tinaField(props.content ?? props)}
        ratio={
          props.settings?.aspectRatio
            ? aspectRatioMap[props.settings?.aspectRatio]
            : 16 / 9
        }
        style={{ overflow: "hidden" }}
      >
        <NextImage
          src={props.content?.image ?? placeholders.image}
          fill
          alt={"Image content"}
          role={"presentation"}
          style={{
            maxWidth: "100%",
            objectFit: "cover",
          }}
        />
        <Flex
          direction={"column"}
          position="absolute"
          inset="0"
          style={{ zIndex: 1 }}
        >
          {props.content?.blocks?.map((block, j) => {
            return renderBlocks(block, j);
          })}
        </Flex>
      </AspectRatio>
    </Box>
  );
}
