import { Box, Container, Grid as RadixGrid, Heading } from "@radix-ui/themes";
import { use } from "react";
import type { PageBodyGridFilter } from "../../tina/__generated__/types";
import { LanguageContext } from "../../utils/context/language";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useBreakpoint } from "../../utils/hooks/breakoint";
import { getLayoutProp } from "../../tina/templates/layout";
import { tinaField } from "tinacms/dist/react";
import styles from "./Grid.module.css";
import components from "../../tina/components";
import type { GridType } from "./GridTemplate";

export default function Grid(props: PageBodyGridFilter) {
  const language = use(LanguageContext);
  const breakpoint = useBreakpoint();

  const gridType = props.variant as GridType | undefined;

  console.log("Props: ", gridType);

  if (!props?.[language]?.gridItems) {
    return <Box>Grid component: Please add your grid items.</Box>;
  }

  return (
    <Container
      my={getLayoutProp((props as any).layout)("marginY")[breakpoint]}
      px={"5"}
    >
      {props?.[language]?.heading && (
        <Heading
          size={"8"}
          className={`fontNormal serif`}
          mb={"4"}
          data-tina-field={tinaField(props[language], "heading")}
        >
          {props?.[language]?.heading as any}
        </Heading>
      )}
      <RadixGrid
        p={gridType === "card" ? "4" : undefined}
        className={gridType === "card" ? styles.grid : ""}
        columns={
          getLayoutProp((props as any).layout)("columns")[breakpoint] ?? "2"
        }
        gap={getLayoutProp((props as any).layout)("gap")[breakpoint] ?? "2"}
      >
        {(props?.[language]?.gridItems as []).map((item, i) => (
          <div
            className={styles.gridItem}
            key={i}
            data-tina-field={tinaField(props[language]?.gridItems![i]!)}
          >
            <TinaMarkdown
              content={(item as any).gridItem}
              components={components}
            />
          </div>
        ))}
      </RadixGrid>
    </Container>
  );
}
