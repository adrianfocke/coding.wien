import { Box, Container, Grid as RadixGrid, Text } from "@radix-ui/themes";
import { use } from "react";
import type { PageBodyGridFilter } from "../../tina/__generated__/types";
import { LanguageContext } from "../../utils/context/language";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useBreakpoint } from "../../utils/hooks/breakoint";
import { getLayoutProp } from "../../tina/templates/layout";
import { tinaField } from "tinacms/dist/react";

export default function Grid(props: PageBodyGridFilter) {
  const language = use(LanguageContext);
  const breakpoint = useBreakpoint();

  console.log(
    "props",
    getLayoutProp((props as any).layout)("columns")[breakpoint]
  );

  if (!props?.[language]?.gridItems) {
    return <Box>Grid component: Please add your grid items.</Box>;
  }

  return (
    <Container py={"8"}>
      <RadixGrid
        columns={
          getLayoutProp((props as any).layout)("columns")[breakpoint] ?? "2"
        }
        gap={"4"}
      >
        {(props?.[language]?.gridItems as []).map((item, i) => (
          <div key={i} style={{ width: "100%", position: "relative" }}>
            {item ? (
              <div data-tina-field={tinaField(props[language]?.gridItems![i]!)}>
                <TinaMarkdown content={(item as any).gridItem} />
              </div>
            ) : (
              <Text>No content</Text>
            )}
          </div>
        ))}
      </RadixGrid>
    </Container>
  );
}
