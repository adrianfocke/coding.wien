"use client";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import "../../styles/main.css";
import type { PageQuery } from "../../tina/__generated__/types";
import components from "../../tina/components";
import type { Language } from "../../tina/types";
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
    <div data-testid="client-page" className="test-responsive">
      <LanguageContext.Provider value={props.language}>
        <TinaMarkdown content={body} components={components} />
      </LanguageContext.Provider>
    </div>
  );
}
