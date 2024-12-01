import { Flex, Grid as RadixGrid } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState, type LegacyRef } from "react";
import {
  GroupListField,
  ReferenceField as TinaReferenceField,
  type Template,
} from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../../tina/__generated__/client";
import type { WorkConnectionEdges } from "../../tina/__generated__/types";
import type { ReferenceRelativePath } from "../../tina/components";
import {
  ReferenceField,
  RichTextField,
  type SpecialFieldKey,
} from "../../tina/fields";
import "./styles.css";

void React; // Making sure it's imported

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
      ...ReferenceField(["work"]), // TODO think of a solution for this
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
    // WidthField,
    // HeightField,
  ],
} as Template;

export type GridProps = {
  variant: GridVariant;
  content?: any | ReferenceRelativePath;
};

export default function Grid({
  variant = GridVariant["Rich-Text"],
  content = undefined,
}: GridProps) {
  const [gridItems, setGridItems] = useState<any[] | undefined>(undefined);
  const gridItemContainer = useRef<HTMLElement>(null);
  const [gridItemHeight, setGridItemHeight] = useState<number>(200);

  useEffect(() => {
    console.log(gridItemContainer.current);
    setGridItemHeight(gridItemContainer.current?.offsetWidth ?? 200);
  }, [gridItems]);

  useEffect(() => {
    const getPosts = async () =>
      (await client.queries.workConnection()).data.workConnection.edges;

    const getReference = async () =>
      (
        await client.queries.work({
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
            reference.work.images
              ? reference.work.images?.map((item) => item)
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
    <RadixGrid
      py={"2"}
      columns={{ xs: "1", md: "2" }}
      gap={"2"}
      className="no-scrollbar"
      style={{ maxWidth: "100vw" }}
    >
      {gridItems &&
        gridItems?.map((item: any, i) => (
          <Flex
            justify={"center"}
            align={"center"}
            height={`${gridItemHeight}px`}
            position={"relative"}
            overflowX={"hidden"}
            key={i}
            ref={gridItemContainer as LegacyRef<HTMLDivElement>}
          >
            {variant === GridVariant["Rich-Text"] &&
              renderRichTextItem(item, i)}

            {variant === GridVariant["Post-List"] &&
              renderPostListItem(item, i)}

            {variant === GridVariant["Reference"] &&
              typeof content === "string" &&
              renderReferenceItem(item, i)}
          </Flex>
        ))}
    </RadixGrid>
  );
}

const renderRichTextItem = (item: any, i: number) => (
  <TinaMarkdown
    content={item}
    components={{
      img: (props: { url: string; caption?: string; alt?: string }) => (
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
);

const renderPostListItem = (item: WorkConnectionEdges, i: number) => {
  console.log("Post item: ", item);
  return (
    <Flex
      align={"center"}
      justify={"center"}
      key={i}
      width={"100%"}
      height={"100%"}
    >
      <Link className="colored" href={`/posts/${item.node?._sys.filename}`}>
        {item.node?.name}
      </Link>

      {item.node?.images && (
        <Image
          priority={i === 0}
          src={item.node.images[0] as string}
          alt={""}
          fill
          sizes="100vw"
          style={{
            zIndex: "-1",
            objectFit: "cover",
          }}
        />
      )}
    </Flex>
  );
};

const renderReferenceItem = (item: any, i: number) => (
  <Image
    priority={i === 0}
    src={item}
    alt={""}
    fill
    sizes="100vw"
    style={{
      zIndex: "-1",
      objectFit: "cover",
    }}
  />
);
