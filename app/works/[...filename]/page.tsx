import client from "../../../tina/__generated__/client";
import ClientPage from "./client-page";

export async function generateStaticParams() {
  const pages = await client.queries.workConnection();
  const paths = pages.data?.workConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));

  return paths || [];
}

export default async function Page({
  params,
}: {
  params: { filename: string[] };
}) {
  const data = await client.queries.work({
    relativePath: `${params.filename}.json`,
  });

  return <ClientPage {...data} />;
}
