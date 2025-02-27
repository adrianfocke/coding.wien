"use client";
import { Container } from "@radix-ui/themes";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Navigation from "../../components/Navigation/Navigation";
import "../../styles/main.css";
import type { PageQuery } from "../../tina/__generated__/types";
import { customComponents, defaultComponents } from "../../tina/components";
import type { Language } from "../../tina/template-fields/intl";
import { LanguageContext } from "../../utils/context/language";

type ClientPageProps = {
  query: string;
  variables: {
    relativePath: string;
  };
  data: { page: PageQuery["page"] };
  language: Language;
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
    <div data-testid="client-page">
      <LanguageContext.Provider value={props.language}>
        <Navigation
          content={{
            en: {
              links: {
                logo: "Coding.wien" as any,
                links: [
                  { text: "Projects", href: "projects" },
                  { text: "About Us", href: "about" },
                ] as any,
              },
            },
          }}
        />

        <Container pr={"6"} pl={"6"}>

        <TinaMarkdown
          content={body}
          components={{
            ...defaultComponents,
            ...customComponents,
          }}
          />
          
          </Container>
      </LanguageContext.Provider>
    </div>
  );
}
