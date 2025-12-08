"use client";
import Link from "next/link";
import { Grid, Container, Box } from "@radix-ui/themes";
import Image from "../../components/Image/Image";
import Navigation from "../../components/Navigation/Navigation";
import { LanguageContext } from "../../utils/context/language";

interface SpaceEdge {
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
  props: SpaceEdge[] | undefined;
  navigation?: any;
  language?: string;
}

export default function ClientPage({
  props,
  navigation,
  language,
}: ClientPageProps) {
  const currentLang = language || "en";

  if (!props || props.length === 0) {
    return (
      <Container>
        <p>No spaces found</p>
      </Container>
    );
  }

  return (
    <LanguageContext.Provider value={currentLang}>
      <Navigation {...navigation?.[currentLang]} />
      <Container py="9">
        <Grid columns={{ initial: "1", md: "2" }} gap="4">
          {props.map((edge, i) => {
            const space = edge?.node;
            if (!space) return null;

            const href = `/spaces/${space._sys.filename}`;

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
                  {space.image && (
                    <Image
                      image={space.image}
                      alt={space.alt || space.name || space._sys.filename}
                      aspectRatio={space.aspectRatio || "16/9"}
                    />
                  )}
                  <Box p="4">
                    <h3 style={{ margin: 0 }}>
                      {space.name || space._sys.filename}
                    </h3>
                  </Box>
                </Box>
              </Link>
            );
          })}
        </Grid>
      </Container>
    </LanguageContext.Provider>
  );
}

