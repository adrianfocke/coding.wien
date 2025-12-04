import { tinaField } from "tinacms/dist/react";
import type { PageBlocksHeadingEn } from "../../tina/__generated__/types";
import { Heading as RadixHeading } from "@radix-ui/themes";
import placeholders from "../placeholders";
import { TinaEditContext } from "../../utils/context/tina";
import { useContext } from "react";

export default function Heading(props: PageBlocksHeadingEn) {
  const { isEditable } = useContext(TinaEditContext);

  return (
    <RadixHeading
      align={(props as any).align ?? "left"}
      as={(props as any).as ?? "h1"}
      size={{
        initial: "8",
        md: "9",
      }}
    >
      <div data-tina-field={isEditable ? tinaField(props) : undefined}>
        {props.heading ?? placeholders.text}
      </div>
    </RadixHeading>
  );
}
