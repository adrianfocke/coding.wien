import { Box, Flex, Grid as RadixGrid, Text } from "@radix-ui/themes";
import type { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";
import Image from "next/image";
import React from "react";
import {
  GroupListField,
  ReferenceField as TinaReferenceField,
  type Template,
} from "tinacms";
import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text";
import client from "../../tina/__generated__/client";
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
  content: TinaMarkdownContent[] | string | any;
  height?: Responsive<string>;
  width?: Responsive<string>;
};

export default async function Grid({
  variant = GridVariant["Rich-Text"],
  content = "",
  height = DEFAULT_HEIGHT,
  width = DEFAULT_WIDTH,
}: GridProps) {
  console.log("Grid content:  ", content);

  const reference = await client.queries.post({ relativePath: "capri.json" });

  const postList = (await client.queries.postConnection()).data;

  return (
    <>
      <p>{variant}</p>
      <RadixGrid
        columns={"2"}
        gap={"2"}
        className="no-scrollbar"
        width={width}
        height={height}
        style={{ maxWidth: "100vw" }}
      >
        {variant === GridVariant["Rich-Text"] &&
          (content as TinaMarkdownContent[]).map((item, i) => (
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

        {variant === GridVariant["Reference"] && reference.data.post.images
          ? reference.data.post.images.map((item, i) => (
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
            ))
          : null}

        {variant === GridVariant["Post-List"] &&
          postList.postConnection.edges?.map((item, i) => (
            <Box position={"relative"} className="test" key={i}>
              <Flex justify={"center"} align={"center"}>
                <Text color={"pink"}>{item?.node?.name}</Text>
                <Image
                  priority={i === 0}
                  src={item?.node?.images![0] ?? ""}
                  alt={""}
                  fill
                  sizes="100vw"
                  style={{
                    zIndex: "-1",
                    objectFit: "cover",
                  }}
                />
              </Flex>
            </Box>
          ))}
      </RadixGrid>
    </>
  );
}
