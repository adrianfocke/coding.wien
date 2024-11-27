"use client";
import { Container } from "@radix-ui/themes";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import "../../styles/main.css";
import type { PageQuery } from "../../tina/__generated__/types";
import components from "../../tina/components";

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

  console.log("Data: ", data.page._sys.basename);

  return (
    <div className="responsive-flex" data-testid="client-page">
      <TinaMarkdown content={body} components={components} />
    </div>
  );
}
