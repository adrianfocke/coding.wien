import type { Metadata } from "next";
import { cookies } from "next/headers";
import client from "../../../tina/__generated__/client";
import type { GenerateMetadataProps } from "../../../tina/types";
import ClientPage from "./client-page";
import project from "../../../project";

export async function generateStaticParams() {
  const pages = await client.queries.eventConnection();
  const paths = pages.data?.eventConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));

  return paths || [];
}

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const title = (await params).filename[0];

  const work = await client.queries.event({
    relativePath: `${title}.json`,
  });

  const seoTitle = work.data.event.seo?.title;
  const pageTitle = seoTitle
    ? seoTitle[0].toUpperCase() + seoTitle.slice(1)
    : title[0].toUpperCase() + title.slice(1);
  const seoMetaDescription = work.data.event.seo?.metaDescription;
  const seoKeywords = work.data.event.seo?.metaKeywords?.map((item, index) =>
    index === 0 ? item : ` ${item}`
  );

  return {
    title: pageTitle,
    description: seoMetaDescription && seoMetaDescription,
    applicationName: project.applicationName,
    authors: project.authors,
    keywords: String(seoKeywords),
  };
}

export default async function Page(props: {
  params: Promise<{ filename: string[] }>;
}) {
  const params = await props.params;
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value ?? "en";

  const data = await client.queries.eventAndNavigation({
    relativePath: `${params.filename}.json`,
  });

  return <ClientPage {...data} language={language} />;
}
