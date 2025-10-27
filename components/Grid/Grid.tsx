import {
  Box,
  Container,
  Grid as RadixGrid,
  Heading,
  Callout,
} from "@radix-ui/themes";
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
import { InfoCircledIcon } from "@radix-ui/react-icons";

export default function Grid(props: PageBodyGridFilter) {
  const language = use(LanguageContext);
  const breakpoint = useBreakpoint();

  const gridType = props.variant as GridType | undefined;

  if (!props?.[language]?.gridItems) {
    return (
      <Callout.Root m={"4"} data-tina-field={tinaField(props)}>
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>
          Add your grid items in the component to see something here.
        </Callout.Text>
      </Callout.Root>
    );
  }

  return (
    <Container my={getLayoutProp((props as any).layout)("marginY")[breakpoint]}>
      {props?.[language]?.heading && (
        <Heading
          size={"8"}
          m={"4"}
          className={`fontNormal serif`}
          data-tina-field={tinaField(props[language], "heading")}
        >
          {props?.[language]?.heading as any}
        </Heading>
      )}

      <RadixGrid
        className={gridType === "card" ? styles.grid : ""}
        columns={
          getLayoutProp((props as any).layout)("columns")[breakpoint] ?? "2"
        }
        gap={getLayoutProp((props as any).layout)("gap")[breakpoint] ?? "4"}
        mx={"4"}
      >
        {(props?.[language]?.gridItems as []).map((item, i) => (
          <Box
            className={styles.gridItem}
            key={i}
            data-tina-field={tinaField(props[language]?.gridItems![i]!)}
          >
            <TinaMarkdown
              content={(item as any).gridItem}
              components={components}
            />
          </Box>
        ))}
      </RadixGrid>
    </Container>
  );
}
