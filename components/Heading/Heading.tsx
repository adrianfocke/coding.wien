import { tinaField } from "tinacms/dist/react";
import type { PageBlocksHeadingEn } from "../../tina/__generated__/types";
import { Box, Heading as RadixHeading } from "@radix-ui/themes";
import placeholders from "../placeholders";
import { TinaEditContext } from "../../utils/context/tina";
import { useContext } from "react";

const headingSizes: Record<string, { initial: string; md: string }> = {
  h1: { initial: "8", md: "9" },
  h2: { initial: "7", md: "8" },
  h3: { initial: "6", md: "7" },
};

export default function Heading(
  props: PageBlocksHeadingEn & { isEditable?: boolean }
) {
  const contextIsEditable = useContext(TinaEditContext);
  const isEditable = props.isEditable ?? contextIsEditable;

  return (
    <Box>
      <RadixHeading
        align={(props as any).align ?? "left"}
        as={(props as any).as ?? "h1"}
        size={headingSizes[(props.as as any) ?? "h1"] as any}
        style={{ fontFamily: "var(--font-serif)" }}
      >
        <div
          data-tina-field={isEditable ? tinaField(props) : undefined}
          style={{ display: "inline-block" }}
        >
          {props.heading ?? placeholders.text}
        </div>
      </RadixHeading>
    </Box>
  );
}
