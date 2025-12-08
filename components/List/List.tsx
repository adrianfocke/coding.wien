"use client";
import Link from "next/link";
import { Grid, Container, Box, Heading } from "@radix-ui/themes";
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
    <Container py="9">
      <Grid columns={{ initial: "1", md: "2" }} gap="4">
        {items.map((edge, i) => {
          const item = edge?.node;
          if (!item) return null;

          const href = `${baseUrl}/${item._sys.filename}`;

          return (
            <Link key={i} href={href}>
              <Box>
                {item.image && (
                  <Image
                    image={item.image}
                    alt={item.alt || item.name || item._sys.filename}
                    aspectRatio={item.aspectRatio || "16/9"}
                  />
                )}
                <Box p="4">
                  <Heading as="h3">{item.name || item._sys.filename}</Heading>
                </Box>
              </Box>
            </Link>
          );
        })}
      </Grid>
    </Container>
  );
}
