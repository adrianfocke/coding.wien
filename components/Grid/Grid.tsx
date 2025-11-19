import { tinaField } from "tinacms/dist/react";
import type {
  PageBlocksGridEn,
  PageBlocksGridEnItems,
} from "../../tina/__generated__/types";
import { Grid as RadixGrid } from "@radix-ui/themes";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import components from "../../tina/components";

export default function Grid(props: PageBlocksGridEn) {
  if (!props.items || props.items.length === 0) {
    return null;
  }
  
  return (
    <RadixGrid columns={"2"}>
      {(props.items as PageBlocksGridEnItems[]).map((item, i) => {
        return (
          <div data-tina-field={tinaField(props)} key={i}>
            <TinaMarkdown content={item.content} components={components} />
          </div>
        );
      })}
    </RadixGrid>
  );
}
