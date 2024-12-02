import client from "../../tina/__generated__/client";
import ClientPage from "./client-page";

export default async function Page() {
  const pages = (await client.queries.workConnection()).data.workConnection
    .edges;

  return <ClientPage props={pages} />;
}
