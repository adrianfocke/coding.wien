"use client";
import { Grid } from "@radix-ui/themes";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Form from "../../components/Form/Form";
import InstagramPost from "../../components/InstagramPost";
import type { PageQuery } from "../../tina/__generated__/types";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: { page: PageQuery["page"] };
}

export default function ClientPage(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const content = data.page.body;
  return (
    <>
      <div
        data-testid="client-page"
        data-tina-field={tinaField(data.page, "body")}
      >
        <TinaMarkdown content={content} />
      </div>

      <Grid columns={"2"}>
        <Form />

        <InstagramPost
          accountName={"Bandcamp"}
          accountUrl={"https://bandcamp.com/about"}
          images={[
            {
              image: "/uploads/bandcamp-oakland.jpg",
              altText: "Bandcamp session in Oakland",
            },
            {
              image: "/uploads/bandcamp-gang.jpg",
              altText: "The Bandcamp gang",
            },
            {
              image: "/uploads/bandcamp-team.jpg",
              altText: "The Bandcamp team",
            },
          ]}
          postDescription={`Bandcamp is an online record store and music community where
          passionate fans discover, connect with, and directly support the
          artists they love. I created their new online presence with an
          emphasis on simplicity.`}
          variant="ghost"
        />
      </Grid>
    </>
  );
}
