"use client";
import { Flex } from "@radix-ui/themes";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import "../../styles/main.css";
import type { PageQuery } from "../../tina/__generated__/types";
import components from "../../tina/components";

type ClientPageProps = {
  query: string;
  variables: {
    relativePath: string;
  };
  data: { page: PageQuery["page"] };
};

export default function ClientPage(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <Flex>
      <TinaMarkdown content={data.page.body} components={components} />
      <TinaMarkdown content={data.page.projects} components={components} />
    </Flex>
  );
}

// {
//   /* <InstagramPost
//         postMeta={{
//           account: "Bandcamp",
//           description:
//             "Bandcamp ist ein Online-Plattenladen und eine Musik-Community, in der leidenschaftliche Fans die Künstler, die sie lieben, entdecken, mit ihnen Künstler, die sie lieben. Ich habe die neue Online-Präsenz mit einem Schwerpunkt auf Einfachheit.",
//           url: "https://bandcamp.com/about",
//         }}
//         slides={[
//           <Image
//             className="object-fit-cover"
//             src={"/uploads/bandcamp-oakland.jpg"}
//             alt={"Logo of xxx"}
//             width={660}
//             height={400}
//           />,
//           <Flex
//             direction={"column"}
//             height={"400px"}
//             align={"center"}
//             justify={"center"}
//           >
//             <Heading as="h3">Bandcamp is good</Heading>
//             <Text>
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
//               odit, beatae numquam distinctio voluptatem deserunt alias corporis
//               laboriosam eveniet mollitia
//             </Text>
//           </Flex>,
//           <Image
//             className="object-fit-cover"
//             src={"/uploads/bandcamp-gang.jpg"}
//             alt={"Logo of xxx"}
//             width={660}
//             height={400}
//           />,
//           <Image
//             className="object-fit-cover"
//             src={"/uploads/bandcamp-team.jpg"}
//             alt={"Logo of xxx"}
//             width={660}
//             height={400}
//           />,
//         ]}
//         width={DEFAULT_WIDTH}
//       /> */
// }
