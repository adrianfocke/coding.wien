"use client";
import { useTina } from "tinacms/dist/react";
import "../../styles/main.css";
import type { PageAndNavigationQuery } from "../../tina/__generated__/types";
import components from "../../tina/components";
import { LanguageContext } from "../../utils/context/language";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

type ClientPageProps = {
  query: string;
  variables: {
    relativePath: string;
  };
  data: PageAndNavigationQuery;
  language: string;
  showLogo?: boolean;
};

export default function ClientPage(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  console.log("ClientPage data:", data.page);

  return (
    <div data-testid="client-page">
      <LanguageContext.Provider value={props.language}>
        <Navigation
          {...data.navigation?.[props.language]}
          showLogo={props.showLogo}
        />

        {data.page.blocks?.map((block, i) => {
          if (!block?.__typename) return null;

          const componentName = block.__typename.replace("PageBlocks", "");
          const Component = (components as any)[componentName];

          if (!Component) return null;

          const blockData =
            (block[props.language as keyof typeof block] as any) || block;

          return (
            <Component key={i} {...blockData} {...(block as any).settings} />
          );
        })}
      </LanguageContext.Provider>
    </div>
  );
}
