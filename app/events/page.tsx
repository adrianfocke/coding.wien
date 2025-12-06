import type { Metadata } from "next";
import client from "../../tina/__generated__/client";
import ClientPage from "./client-page";

export const metadata: Metadata = {
  title: "Events",
  description: "Events Overview",
};

export default async function Page() {
  const pages = (
    await client.queries.eventConnection()
  ).data.eventConnection.edges?.sort(
    (a, b) =>
      new Date(b!.node?._sys.filename!).getTime() -
      new Date(a!.node?._sys.filename!).getTime()
  );

  return <ClientPage props={pages} />;
}
