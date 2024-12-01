"use client"
import { Box, Container, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Grid, { GridVariant } from "../../../components/Grid/Grid";
import type { WorkQuery } from "../../../tina/__generated__/types";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: WorkQuery;
}

export default function Post(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const { work } = data;

  return (
    <Flex direction={"column"}>
      <Flex
        position={"relative"}
        align={"center"}
        justify={"center"}
        style={{ height: "60vh" }}
        className="test"
      >
        <Image
          priority={true}
          src={work.images ? work.images![0] : ("" as any)}
          alt={""}
          fill
          style={{
            zIndex: "-1",
            objectFit: "cover",
          }}
        />
        <Text>{work.name}</Text>
      </Flex>

      <Flex align={"center"} justify={"center"}>
        {work.info?.map((item, i) => (
          <Box key={i} mx="2">
            <Text weight={"medium"}>{item?.key}: </Text>
            <Text>{item?.value}</Text>
          </Box>
        ))}
      </Flex>

      <Container mx="2">
        <TinaMarkdown content={work.detailedInfo} />
      </Container>

      <Container mx="2">
        <Grid
          variant={GridVariant.Reference}
          content={work._sys.relativePath}
        />
      </Container>
    </Flex>
  );
}