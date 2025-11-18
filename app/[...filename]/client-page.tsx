"use client";
import { useTina } from "tinacms/dist/react";
import "../../styles/main.css";
import type { PageQuery } from "../../tina/__generated__/types";
import components from "../../tina/components";
import type { Language } from "../../tina/types";
import { LanguageContext } from "../../utils/context/language";
import { use } from "react";

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

  const language = use(LanguageContext);

  return (
    <div data-testid="client-page" /* className="test-responsive" */>
      <LanguageContext.Provider value={language}>
        {data.page.blocks?.map((block, i) => {
          if (!block?.__typename) return null;

          const componentName = block.__typename.replace("PageBlocks", "");
          const Component = (components as any)[componentName];

          console.log("Rendering block:", componentName, block);

          if (!Component) return null;

          return (
            <Component
              key={i}
              {...block[language]}
              {...(block as any).settings}
              {...(block as any).__typename}
            />
          );
        })}
      </LanguageContext.Provider>
    </div>
  );
}
