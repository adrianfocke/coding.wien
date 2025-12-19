import { Box, Container, Grid } from "@radix-ui/themes";
import { useEditState } from "tinacms/dist/react";
import type { PageBlocksGrid } from "../../tina/__generated__/types";
import EditHelper from "../../tina/templating/EditHelper";
import { renderBlocks } from "../../tina/templating/utils";

export default function Component(props: PageBlocksGrid) {
  const { edit } = useEditState();

  const content = (
    <Grid
      columns={{
        initial: props.settings?.columns_initial || "1",
        md: props.settings?.columns_md || "2",
      }}
      gap={props.settings?.gap ?? "0"}
    >
      {props.content?.items?.map((item, i) => (
        <Box key={i}>
          {item?.blocks?.map((block, j) => {
            return renderBlocks(block, j);
          })}
        </Box>
      ))}
    </Grid>
  );

  const box = (
    <Box
      mx={props.settings?.marginX ?? "0"}
      my={props.settings?.marginY ?? "0"}
      mb={props.settings?.marginBottom ?? "inherit"}
      px={props.settings?.paddingX ?? "0"}
      py={props.settings?.paddingY ?? "0"}
    >
      {edit && <EditHelper {...props} />}
      {content}
    </Box>
  );

  return props.settings?.hasContainer ? <Container>{box}</Container> : box;
}
