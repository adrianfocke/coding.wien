"use client";
import Link from "next/link";
import { Grid, Container, Box, Heading, Text } from "@radix-ui/themes";
import Image from "../Image/Image";

export interface ListItem {
  node?: {
    _sys: {
      filename: string;
      breadcrumbs: string[];
    };
    name?: string;
    image?: string;
    alt?: string;
    aspectRatio?: string;
  };
}

interface ListProps {
  items: ListItem[] | undefined;
  baseUrl: string;
  emptyMessage?: string;
}

export default function List({
  items,
  baseUrl,
  emptyMessage = "No items found",
}: ListProps) {
  if (!items || items.length === 0) {
    return (
      <Container>
        <p>{emptyMessage}</p>
      </Container>
    );
  }

  return (
    <Container>
      <Grid columns={{ initial: "1", md: "2" }} gap="4">
        {items.map((edge, i) => {
          const item = edge?.node;
          if (!item) return null;

          const filenameWithoutExtension = item._sys.filename.replace(
            /\.(mdx|json)$/,
            ""
          );
          const href = `${baseUrl}/${filenameWithoutExtension}`;

          return (
            <Box key={i}>
              {item.image && (
                <Image
                  fallbackHref={href}
                  image={item.image}
                  alt={item.alt || item.name || item._sys.filename}
                  aspectRatio={item.aspectRatio || "16/9"}
                />
              )}
              <Text size={{ initial: "4", md: "5" }}>
                {item.name || item._sys.filename}
              </Text>
            </Box>
          );
        })}
      </Grid>
    </Container>
  );
}
