"use client";
import { useTina } from "tinacms/dist/react";
import "../../../styles/main.css";
import type { EventQuery } from "../../../tina/__generated__/types";
import components from "../../../tina/components";
import { LanguageContext } from "../../../utils/context/language";
import Navigation from "../../../components/Navigation/Navigation";
import Footer from "../../../components/Footer/Footer";

type ClientPageProps = {
  query: string;
  variables: {
    relativePath: string;
  };
  data: EventQuery;
  language: string;
};

export default function ClientPage(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <div data-testid="client-page">
      <LanguageContext.Provider value={props.language}>
        {data.event.blocks?.map((block, i) => {
          if (!block?.__typename) return null;

          const componentName = block.__typename.replace("EventBlocks", "");
          const Component = (components as any)[componentName];

          if (!Component) return null;

          return (
            <Component
              key={i}
              {...block[props.language]}
              {...(block as any).settings}
            />
          );
        })}

        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}
