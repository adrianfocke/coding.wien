import { Box, Container, Grid as RadixGrid, Heading } from "@radix-ui/themes";
import { use } from "react";
import type { PageBodyGridFilter } from "../../tina/__generated__/types";
import { LanguageContext } from "../../utils/context/language";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useBreakpoint } from "../../utils/hooks/breakoint";
import { getLayoutProp, layoutDefaults } from "../../tina/templates/layout";
import { tinaField } from "tinacms/dist/react";
import styles from "./Grid.module.css";
import components from "../../tina/components";

export default function Grid(props: PageBodyGridFilter) {
  const language = use(LanguageContext);
  const breakpoint = useBreakpoint();

  if (!props?.[language]?.gridItems) {
    return <Box>Grid component: Please add your grid items.</Box>;
  }

  return (
    <Container py={layoutDefaults.paddingY} px={layoutDefaults.paddingX}>
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
        columns={
          getLayoutProp((props as any).layout)("columns")[breakpoint] ??
          layoutDefaults.columns
        }
        gap={
          getLayoutProp((props as any).layout)("gap")[breakpoint] ??
          layoutDefaults.gap
        }
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
