"use client";
import Link from "next/link";
import { Grid, Container, Box } from "@radix-ui/themes";
import Image from "../../components/Image/Image";

interface EventEdge {
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

interface ClientPageProps {
  props: EventEdge[] | undefined;
  language?: string;
}

export default function ClientPage({ props }: ClientPageProps) {
  if (!props || props.length === 0) {
    return (
      <Container>
        <p>No events found</p>
      </Container>
    );
  }

  return (
    <Container py="9">
      <Grid columns={{ initial: "1", md: "2" }} gap="4">
        {props.map((edge, i) => {
          const event = edge?.node;
          if (!event) return null;

          const href = `/events/${event._sys.filename}`;

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
                {event.image && (
                  <Image
                    image={event.image}
                    alt={event.alt || event.name || event._sys.filename}
                    aspectRatio={event.aspectRatio || "16/9"}
                  />
                )}
                <Box p="4">
                  <h3 style={{ margin: 0 }}>
                    {event.name || event._sys.filename}
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

