import type { Metadata } from "next";
import { cookies } from "next/headers";
import project from "../../project";
import client from "../../tina/__generated__/client";
import type { Page } from "../../tina/__generated__/types";
import type { GenerateMetadataProps } from "../../tina/types";
import ClientPage from "./client-page";
import { findIntlValue } from "../../tina/tina-fields/component-fields";

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
  const language = (await cookies()).get("language")?.value ?? "en";

  const title = (await params).filename[0];

  const page = await client.queries.page({
    relativePath: `${title}.mdx`,
  });

  const seo = findIntlValue(language as any, "seo");

  return {
    title:
      page.data.page?.[seo]?.title ?? title[0].toUpperCase() + title.slice(1),
    description: page.data.page?.[seo]?.metaDescription,
    applicationName: project.applicationName,
    authors: project.authors,
    keywords: page.data.page?.[seo]?.metaKeywords?.map((item, index) =>
      index === 0 ? item : ` ${item}`
    ),
  };
}

export default async function Page(props: {
  params: Promise<{ filename: string[] }>;
}) {
  // TODO all pages
  const params = await props.params;
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value ?? "en";

  const data = await client.queries.pageAndNavigation({
    relativePath: `${params.filename}.mdx`,
  });

  const showLogo = params.filename[0] === "home";

  //@ts-expect-error
  return <ClientPage {...data} language={language} showLogo={!showLogo} />;
}
