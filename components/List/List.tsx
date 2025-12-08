"use client";
import Link from "next/link";
import { Grid, Container, Box } from "@radix-ui/themes";
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

export default function List({ items, baseUrl, emptyMessage = "No items found" }: ListProps) {
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
            <Link
              key={i}
              href={href}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Box
                style={{
                  border: "1px solid var(--gray-6)",
                  borderRadius: "var(--radius-2)",
                  overflow: "hidden",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-9)";
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--gray-6)";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {item.image && (
                  <Image
                    image={item.image}
                    alt={item.alt || item.name || item._sys.filename}
                    aspectRatio={item.aspectRatio || "16/9"}
                  />
                )}
                <Box p="4">
                  <h3 style={{ margin: 0 }}>
                    {item.name || item._sys.filename}
                  </h3>
                </Box>
              </Box>
            </Link>
          );
        })}
      </Grid>
    </Container>
  );
}
