import { Box, Text } from "@radix-ui/themes";
import type { PageBlocksText } from "../../tina/__generated__/types";
import { useContext } from "react";
import { LanguageContext } from "../../utils/context/language";
import { tinaField } from "tinacms/dist/react";
import { findIntlValue } from "../../tina/tina-fields/component-fields";

export default function Component(props: PageBlocksText) {
  const language = useContext(LanguageContext);
  const text = findIntlValue(language, "text");

  return (
    <Box
      mx={props.settings?.marginX ?? "0"}
      my={props.settings?.marginY ?? "0"}
      px={props.settings?.paddingX ?? "0"}
      py={props.settings?.paddingY ?? "0"}
    >
      <Text
        data-tina-field={tinaField(props.content ?? props)}
        align={(props.settings?.align as any) ?? "left"}
        size={(props.settings?.textSize as any) ?? "4"}
      >
        {props.content?.[text] || "Add your text here"}
      </Text>
    </Box>
  );
}
