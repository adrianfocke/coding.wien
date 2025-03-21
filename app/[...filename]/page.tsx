import type { Metadata } from "next";
import { cookies } from "next/headers";
import client from "../../tina/__generated__/client";
import type { Page } from "../../tina/__generated__/types";
import type { Language } from "../../tina/template-fields/intl";
import type { GenerateMetadataProps } from "../../tina/types";
import ClientPage from "./client-page";

export async function generateStaticParams() {
  const pages = await client.queries.pageConnection();
  const paths = pages.data?.pageConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));

  return paths || [];
}

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const title = (await params).filename[0];

  const page = await client.queries.page({
    relativePath: `${title}.mdx`,
  });

  return {
    title: title[0].toUpperCase() + title.slice(1),
    description: (page.data.page as Page & { seo: string }).seo,
  };
}

export default async function Page(props: {
  params: Promise<{ filename: string[] }>;
}) {
  const params = await props.params;
  const data = await client.queries.page({
    relativePath: `${params.filename}.mdx`,
  });

  const language =
    ((await cookies()).get("language")?.value as Language) ?? "en";

  return <ClientPage {...data} language={language} />;
}
