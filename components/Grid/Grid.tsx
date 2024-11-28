import { Box, Grid as RadixGrid } from "@radix-ui/themes";
import type { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  GroupListField,
  ReferenceField as TinaReferenceField,
  type Template,
} from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../../tina/__generated__/client";
import type { PostConnectionEdges } from "../../tina/__generated__/types";
import type { ReferenceRelativePath } from "../../tina/components";
import {
  HeightField,
  ReferenceField,
  RichTextField,
  WidthField,
  type SpecialFieldKey,
} from "../../tina/fields";
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from "../../utils/constants";

export enum GridVariant {
  "Reference" = "Reference",
  "Rich-Text" = "Rich-Text",
  "Post-List" = "Post-List",
}

const specialFieldKeyToGridVariant: Record<SpecialFieldKey, GridVariant> = {
  referenceField: GridVariant.Reference,
  elements: GridVariant["Rich-Text"],
};

const fieldComponents: Record<GridVariant, (props: any) => JSX.Element> = {
  Reference: (props) => <TinaReferenceField {...props} />,
  "Rich-Text": (props) => <GroupListField {...props} />,
  "Post-List": () => <></>,
};

const doesTemplateKeyValueMatchCurrentFieldKey = (params: {
  templateKey: "variant";
  currentFieldKey: SpecialFieldKey;
  props: any;
}): boolean => {
  const { templateKey, currentFieldKey, props } = params;

  const currentReferenceFieldIndex = props.field.name.includes(currentFieldKey)
    ? props.field.name.match(/\d+/)?.[0]
    : undefined;

  const currentSelectedComponent =
    props.tinaForm.values.body.children[currentReferenceFieldIndex];

  const currentSelectedComponentVariant: GridVariant =
    currentSelectedComponent.props[templateKey];

  return (
    currentSelectedComponentVariant ===
    specialFieldKeyToGridVariant[currentFieldKey]
  );
};

const renderFieldBasedOnTemplateKey = (params: {
  templateKey: "variant";
  currentFieldKey: SpecialFieldKey;
  props: any;
}): JSX.Element | undefined => {
  const { templateKey, currentFieldKey, props } = params;

  return doesTemplateKeyValueMatchCurrentFieldKey({
    templateKey,
    currentFieldKey,
    props,
  })
    ? fieldComponents[specialFieldKeyToGridVariant[currentFieldKey]](props)
    : undefined;
};

export const GridTemplate = {
  name: "Grid",
  label: "Grid",
  ui: {
    defaultItem: {
      variant: GridVariant["Rich-Text"],
    },
  },
  fields: [
    {
      name: "variant",
      label: "Grid variant",
      type: "string",
      options: Object.keys(GridVariant),
    },
    {
      ...ReferenceField(["post"]),
      ui: {
        component(props: any) {
          return renderFieldBasedOnTemplateKey({
            templateKey: "variant",
            currentFieldKey: "referenceField",
            props,
          });
        },
      },
    },
    {
      ...RichTextField,
      ui: {
        component(props: any) {
          return renderFieldBasedOnTemplateKey({
            templateKey: "variant",
            currentFieldKey: "elements",
            props,
          });
        },
      },
    },
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
  ],
} as Template;

export type GridProps = {
  variant: GridVariant;
  content?: any | ReferenceRelativePath;
  height?: Responsive<string>;
  gridSettings: {
    columns: number;
  };
  width?: Responsive<string>;
};

export default function Grid({
  variant = GridVariant["Rich-Text"],
  content = undefined,
  height = DEFAULT_HEIGHT,
  // gridSettings = { columns: 2 },
  width = DEFAULT_WIDTH,
}: GridProps) {
  const [gridItems, setGridItems] = useState<any[] | undefined>(undefined);

  useEffect(() => {
    const getPosts = async () =>
      (await client.queries.postConnection()).data.postConnection.edges;

    const getReference = async () =>
      (
        await client.queries.post({
          relativePath: content as ReferenceRelativePath,
        })
      ).data;

    if (variant === GridVariant["Rich-Text"]) {
      setGridItems(content);
    }

    if (variant === GridVariant["Reference"]) {
      getReference()
        .then((reference) =>
          setGridItems(
            reference.post.images
              ? reference.post.images?.map((item) => item)
              : undefined
          )
        )
        .catch((e) => {
          console.error(e);
          setGridItems(undefined);
        });
    }

    if (variant === GridVariant["Post-List"]) {
      getPosts()
        .then((posts) => setGridItems(posts as any))
        .catch((e) => {
          console.error(e);
          setGridItems(undefined);
        });
    }
  }, [variant, content]);

  return (
    <>
      <p>
        {variant} {gridItems?.length}
      </p>
      <RadixGrid
        columns={"2"}
        gap={"2"}
        className="no-scrollbar"
        width={width}
        height={height}
        style={{ maxWidth: "100vw" }}
      >
        {variant === GridVariant["Rich-Text"] &&
          gridItems &&
          gridItems?.map((item: any, i) => (
            <Box position={"relative"} className="test" key={i}>
              <TinaMarkdown
                content={item}
                components={{
                  img: (props: {
                    url: string;
                    caption?: string;
                    alt?: string;
                  }) => (
                    <Image
                      priority={i === 0}
                      src={props.url ?? ""}
                      alt={""}
                      fill
                      sizes="100vw"
                      style={{
                        zIndex: "-1",
                        objectFit: "cover",
                      }}
                    />
                  ),
                }}
              />
            </Box>
          ))}

        {variant === GridVariant["Post-List"] &&
          gridItems &&
          (gridItems as any).map((item: PostConnectionEdges, i) => (
            <p key={i}>{item.node?.name}</p>
          ))}

        {variant === GridVariant["Reference"] &&
          gridItems &&
          typeof content === "string" &&
          (gridItems as string[]).map((item, i) => (
            <Box position={"relative"} className="test" key={i}>
              <Image
                priority={i === 0}
                src={item ?? ""}
                alt={""}
                fill
                sizes="100vw"
                style={{
                  zIndex: "-1",
                  objectFit: "cover",
                }}
              />
            </Box>
          ))}
      </RadixGrid>
    </>
  );
}
