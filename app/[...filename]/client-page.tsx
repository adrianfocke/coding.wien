"use client";
import { Container } from "@radix-ui/themes";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import "../../styles/main.css";
import type { PageQuery } from "../../tina/__generated__/types";
import { customComponents, defaultComponents } from "../../tina/components";

type ClientPageProps = {
  query: string;
  variables: {
    relativePath: string;
  };
  data: { page: PageQuery["page"] };
};

export default function ClientPage(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const { body } = data.page;

  return (
    <div
      style={{
        marginTop: !data.page._sys.filename.includes("home") ? "100px" : "0px",
      }}
      data-testid="client-page"
    >
      <Container mx="2">
        <TinaMarkdown
          content={body}
          components={{
            ...defaultComponents,
            ...customComponents,
          }}
        />
      </Container>
    </div>
  );
}
