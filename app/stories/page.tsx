import type { Metadata } from "next";
import { cookies } from "next/headers";
import client from "../../tina/__generated__/client";
import ClientPage from "./client-page";
import type { Language } from "../../tina/templating/special-fields";

export const metadata: Metadata = {
  title: "Stories",
  description: "Stories Overview",
};

export default async function Page() {
  const cookieStore = await cookies();
  const language = cookieStore.get("language")?.value ?? "en";

  const data = await client.queries.storyAndNavConnection();
  const pages = data.data.storyConnection.edges?.sort(
    (a, b) =>
      new Date(b!.node?._sys.filename!).getTime() -
      new Date(a!.node?._sys.filename!).getTime()
  );

  return <ClientPage query={data.query} variables={{ relativePath: "" }} data={data.data} language={language as Language} />;
}
