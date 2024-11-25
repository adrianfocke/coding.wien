import { Box, Grid as RadixGrid } from "@radix-ui/themes";
import type { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";
import Image from "next/legacy/image";
import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text";
import { ElementsField, HeightField, WidthField } from "../../tina/fields";
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from "../../utils/constants";

export const GridTemplate = {
  name: "Grid",
  label: "Grid",
  fields: [
    {
      name: "gridSettings",
      label: "Grid Settings",
      type: "object",
      fields: [
        {
          name: "columns",
          label: "Columns",
          type: "number",
        },
      ],
    },
    WidthField,
    HeightField,
    ElementsField,
  ],
};

export type GridProps = {
  height?: Responsive<string>;
  gridItems: TinaMarkdownContent[];
  gridSettings: {
    columns: number;
  };
  width?: Responsive<string>;
};

export default function Grid({
  height = DEFAULT_HEIGHT,
  gridItems = [],
  gridSettings = { columns: 2 },
  width = DEFAULT_WIDTH,
}: GridProps) {
  console.log("Grid settings: ", gridSettings);

  return (
    <RadixGrid
      columns={"2"}
      gap={"2"}
      className="no-scrollbar"
      width={width}
      height={height}
      style={{ maxWidth: "100vw" }}
    >
      {gridItems.map((gridItem, i) => (
        <Box position={"relative"} className="test" key={i}>
          <TinaMarkdown
            content={gridItem}
            components={{
              img: (props: { url: string; caption?: string; alt?: string }) => (
                <Image
                  style={{ zIndex: "-1" }}
                  priority={i === 0}
                  src={props.url ?? ""}
                  layout="fill"
                  objectFit="cover"
                  alt={""}
                />
              ),
            }}
          />
        </Box>
      ))}
    </RadixGrid>
  );
}
