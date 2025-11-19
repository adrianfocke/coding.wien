import { tinaField } from "tinacms/dist/react";
import type { PageBlocksHeadingEn } from "../../tina/__generated__/types";
import { Heading as RadixHeading } from "@radix-ui/themes";
import placeholders from "../placeholders";

export default function Heading(props: PageBlocksHeadingEn) {
  return (
    <RadixHeading
      align={(props as any).align ?? "left"}
      as={(props as any).as ?? "h1"}
      size={{
        initial: "8",
        md: "9",
      }}
    >
      <div data-tina-field={tinaField(props)}>
        {props.heading ?? placeholders.text}
      </div>
    </RadixHeading>
  );
}
