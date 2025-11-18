import { tinaField } from "tinacms/dist/react";
import type { PageBlocksHeadingEn } from "../../tina/__generated__/types";
import { Heading as RadixHeading } from "@radix-ui/themes";
import type { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";

export default function Heading(
  props: PageBlocksHeadingEn
) {
  return (
    <RadixHeading
      align={(props as any).align as Responsive<"left" | "center" | "right">}
      as="h1"
      size={{
        initial: "8",
        md: "9",
      }}
      data-tina-field={tinaField(props)}
    >
      {props.heading}
    </RadixHeading>
  );
}
