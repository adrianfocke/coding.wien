import { Box, Grid } from "@radix-ui/themes";
import { useEditState } from "tinacms/dist/react";
import type { PageBlocksGrid } from "../../tina/__generated__/types";
import renderBlocks, { EditHelper } from "../../tina/tina-fields/renderBlocks";

export default function Component(props: PageBlocksGrid) {
  const { edit } = useEditState();
  return (
    <Box
      mx={props.settings?.marginX ?? "0"}
      my={props.settings?.marginY ?? "0"}
      px={props.settings?.paddingX ?? "0"}
      py={props.settings?.paddingY ?? "0"}
    >
      {edit && <EditHelper {...props} />}
      <Grid columns={"2"}>
        {props.content?.items?.map((item, i) => (
          <Box key={i}>
            {item?.blocks?.map((block, j) => {
              return renderBlocks(block, j);
            })}
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
