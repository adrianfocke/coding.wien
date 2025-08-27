"use client";
import { tinaField, useTina } from "tinacms/dist/react";
import type { ProjectQuery } from "../../../tina/__generated__/types";
import { Text } from "@radix-ui/themes";
import { use } from "react";
import { LanguageContext } from "../../../utils/context/language";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: ProjectQuery;
}

export default function ClientPage(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const language = use(LanguageContext);

  const { project } = data;
  console.log(project);

  return (
    <>
      <div data-tina-field={tinaField(project.content?.[language], "title")}>
        <Text>{project.content?.[language]?.title}</Text>
      </div>
    </>
  );
}
