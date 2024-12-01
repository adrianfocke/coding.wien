import Link from "next/link";
import { client } from "../../tina/__generated__/client";

export default async function Page() {
  const pages = await client.queries.workConnection();

  return pages.data.workConnection.edges?.map((item, i) => (
    <Link key={i} href={`/works/${item?.node?._sys.filename}`}>
      {item?.node?._sys.filename}
    </Link>
  ));
}
