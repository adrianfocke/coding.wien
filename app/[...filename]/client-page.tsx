"use client";
import { useTina } from "tinacms/dist/react";
import "../../styles/main.css";
import type { PageAndNavigationQuery } from "../../tina/__generated__/types";
import components from "../../tina/components";
import { LanguageContext } from "../../utils/context/language";
import { use } from "react";
import Navigation from "../../components/Navigation/Navigation";

type ClientPageProps = {
  query: string;
  variables: {
    relativePath: string;
  };
  data: PageAndNavigationQuery;
  language: string;
};

export default function ClientPage(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  console.log("ClientPage data:", data);

  const language = use(LanguageContext);

  return (
    <div data-testid="client-page" /* className="test-responsive" */>
      <LanguageContext.Provider value={language}>
        <Navigation {...data.navigation?.[language]} />

        {data.page.blocks?.map((block, i) => {
          if (!block?.__typename) return null;

          const componentName = block.__typename.replace("PageBlocks", "");
          const Component = (components as any)[componentName];

          if (!Component) return null;

          return (
            <Component
              key={i}
              {...block[language]}
              {...(block as any).settings}
            />
          );
        })}
      </LanguageContext.Provider>
    </div>
  );
}
