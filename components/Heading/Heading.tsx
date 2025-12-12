import { Heading, Box } from "@radix-ui/themes";
import { tinaField } from "tinacms/dist/react";
import { useContext } from "react";
import { LanguageContext } from "../../utils/context/language";
import type { PageBlocksHeading } from "../../tina/__generated__/types";
import { findIntlValue } from "../../tina/tina-fields/component-fields";

export default function Component(props: PageBlocksHeading) {
  const language = useContext(LanguageContext);
  const text = findIntlValue(language, "text");

  return (
    <Box
      mx={props.settings?.marginX ?? "0"}
      my={props.settings?.marginY ?? "0"}
      px={props.settings?.paddingX ?? "0"}
      py={props.settings?.paddingY ?? "0"}
    >
      <Heading
        data-tina-field={tinaField(props.content ?? props)}
        align={(props.settings?.align as any) ?? "left"}
        size={(props.settings?.textSize as any) ?? "9"}
      >
        {props.content?.[text] || "Add your heading here"}
      </Heading>
    </Box>
  );
}
