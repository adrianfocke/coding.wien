import type { Metadata } from "next";
import { cookies } from "next/headers";
import project from "../../project";
import client from "../../tina/__generated__/client";
import type { Page } from "../../tina/__generated__/types";
import type { GenerateMetadataProps } from "../../tina/types";
import ClientPage from "./client-page";
import { findIntlValue } from "../../tina/templating/special-fields";

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

  const config = await client.queries.config({
    relativePath: `config.json`,
  });

  const page = await client.queries.page({
    relativePath: `${title}.mdx`,
  });

  const seo = findIntlValue(language as any, "seo");

  const pageTitle =
    page.data.page?.[seo]?.title ?? title[0].toUpperCase() + title.slice(1);

  return {
    title: `${pageTitle} | ${config.data.config?.applicationName}`,
    description: page.data.page?.[seo]?.metaDescription,
    applicationName: config.data.config?.applicationName,
    authors: config.data.config?.authors?.map((author) => ({
      name: author?.name || "",
      url: author?.url || "",
    })),
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

  return <ClientPage {...data} language={language as any} />;
}
