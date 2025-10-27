import { use } from "react";
import type { PageBodyHeroFilter } from "../../tina/__generated__/types";
import { LanguageContext } from "../../utils/context/language";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { tinaField } from "tinacms/dist/react";

export default function Highlight(props: PageBodyHeroFilter) {
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

      <Flex>
        <Text data-tina-field={tinaField(props[language], "text")}>
          {props?.[language]?.text as any}
        </Text>
      </Flex>
    </Box>
  );
}
