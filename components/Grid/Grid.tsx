import { tinaField } from "tinacms/dist/react";
import type {
  PageBlocksGridEn,
  PageBlocksGridEnItems,
} from "../../tina/__generated__/types";
import { Grid as RadixGrid } from "@radix-ui/themes";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import components from "../../tina/components";
import { TinaEditContext } from "../../utils/context/tina";

export default function Grid(props: PageBlocksGridEn) {
  if (!props.items || props.items.length === 0) {
    return null;
  }

  return (
    <TinaEditContext.Provider value={{ isEditable: false }}>
      <RadixGrid columns={"2"}>
        {(props.items as PageBlocksGridEnItems[]).map((item, i) => {
          return (
            <div key={i} data-tina-field={tinaField(item)}>
              <TinaMarkdown content={item.content} components={components} />
            </div>
          );
        })}
      </RadixGrid>
    </TinaEditContext.Provider>
  );
}
