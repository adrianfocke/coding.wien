"use client";
import { Flex } from "@radix-ui/themes";
import Image from "next/image";
import { useTina } from "tinacms/dist/react";
import Slideshow from "../../components/Slideshow/Slideshow";
import "../../styles/main.css";
import type { PageQuery } from "../../tina/__generated__/types";

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
    <Flex
      className="responsive-flex"
      direction={"column"}
      data-testid="client-page"
    >
      <Slideshow
        slides={[
          <Flex>
            <p>A</p>
          </Flex>,
          <Image
            src={"/uploads/bandcamp-oakland.jpg"}
            alt={""}
            layout="fill"
            objectFit="cover"
          />,
          <Image
            src={"/uploads/bandcamp-team.jpg"}
            alt={""}
            layout="fill"
            objectFit="cover"
          />,
        ]}
      />

      {/* <div style={{ margin: 50, display: "inline" }}>
        Adrian packt Ideen, Menschen und Produkte in das Format einer Webseite.
        Dazu zählen <Accordion /> Menschen und Produkte in das Format einer
        Webseite.
      </div>

      <Box p="2">
        <TinaMarkdown content={data.page.body} components={components} />
      </Box>
      <Box p="2">
        <TinaMarkdown content={data.page.projects} components={components} />
      </Box> */}
    </Flex>
  );
}
