import type { Metadata } from "next";
import { cookies } from "next/headers";
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

  const work = await client.queries.space({
    relativePath: `${title}.json`,
  });

  return {
    title: work.data.space.name,
  };
}

export default async function Page(props: {
  params: Promise<{ filename: string[] }>;
}) {
  const params = await props.params;
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value ?? "en";

  const data = await client.queries.space({
    relativePath: `${params.filename}.json`,
  });

  return <ClientPage {...data} language={language} />;
}
