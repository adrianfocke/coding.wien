import { Box, Button } from "@radix-ui/themes";
import type {
  PageBlocksButton,
  PageBlocksText,
} from "../../tina/__generated__/types";
import { useContext } from "react";
import { LanguageContext } from "../../utils/context/language";
import { tinaField } from "tinacms/dist/react";
import { findIntlValue } from "../../tina/templating/special-fields";
import Link from "next/link";

export default function Component(props: PageBlocksButton) {
  const language = useContext(LanguageContext);
  const text = findIntlValue(language, "text");

  const content = (
    <Button
      data-tina-field={tinaField(props.content ?? props)}
      variant={(props.settings?.variant as any) ?? "solid"}
      size={(props.settings?.textSize as any) ?? "2"}
      mt="4"
    >
      {props.content?.[text] || "Add your text here"}
    </Button>
  );

  return (
    <Box
      mx={props.settings?.marginX ?? "0"}
      my={props.settings?.marginY ?? "0"}
      px={props.settings?.paddingX ?? "0"}
      py={props.settings?.paddingY ?? "0"}
    >
      {props.link ? <Link href={props.link}>{content}</Link> : content}
    </Box>
  );
}
