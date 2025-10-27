import { use } from "react";
import type { PageBodyHighlightFilter } from "../../tina/__generated__/types";
import { LanguageContext } from "../../utils/context/language";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { tinaField } from "tinacms/dist/react";
import Image from "next/legacy/image";
import { displayTextOrPlaceholder, placeholders } from "../helpers";

export default function Highlight(props: PageBodyHighlightFilter) {
  const language = use(LanguageContext);

  return (
    <Box>
      {props?.[language]?.heading && (
        <Heading
          size={"8"}
          m={"4"}
          className={`fontNormal serif`}
          data-tina-field={tinaField(props[language], "heading")}
        >
          {props?.[language]?.heading as any}
        </Heading>
      )}
      <Box position={"relative"}>
        <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
          <Image
            priority={true}
            src={
              (props as any)?.[language]?.images?.image || placeholders.image
            }
            alt={""}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <Box py={"4"} style={{ position: "relative", zIndex: 1 }}>
          <Flex gap={"4"} mx={"4"} direction={"column"}>
            <Heading
              size={"8"}
              className={`fontNormal serif`}
              data-tina-field={tinaField(props[language], "punchline")}
            >
              {displayTextOrPlaceholder(
                props?.[language]?.punchline,
                placeholders.punchline
              )}
            </Heading>
            <Text data-tina-field={tinaField(props[language], "text")}>
              {displayTextOrPlaceholder(
                props?.[language]?.text,
                placeholders.text
              )}
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
