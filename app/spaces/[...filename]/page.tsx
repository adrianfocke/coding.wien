import type { Metadata } from "next";
import client from "../../../tina/__generated__/client";
import type { GenerateMetadataProps } from "../../../tina/types";
import ClientPage from "./client-page";

export async function generateStaticParams() {
  const pages = await client.queries.spaceConnection();
  const paths = pages.data?.spaceConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));

  return paths || [];
}

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const title = (await params).filename[0];

  const work = await client.queries.project({
    relativePath: `${title}.json`,
  });

  return {
    title: work.data.project.name,
  };
}

export default async function Page(props: {
  params: Promise<{ filename: string[] }>;
}) {
  const params = await props.params;
  const data = await client.queries.project({
    relativePath: `${params.filename}.json`,
  });

  return <ClientPage {...data} />;
}
