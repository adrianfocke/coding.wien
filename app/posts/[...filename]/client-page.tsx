"use client"
import { Box, Container, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Grid, { GridVariant } from "../../../components/Grid/Grid";
import { PostQuery } from "../../../tina/__generated__/types";
import components from "../../../tina/components";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: PostQuery;
}

export default function Post(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const { post } = data;

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
          src={post.images ? post.images![0] : ("" as any)}
          alt={""}
          fill
          style={{
            zIndex: "-1",
            objectFit: "cover",
          }}
        />
        <Text>{post.name}</Text>
      </Flex>

      <Flex align={"center"} justify={"center"}>
        {post.info?.map((item, i) => (
          <Box key={i} mx="2">
            <Text weight={"medium"}>{item?.key}: </Text>
            <Text>{item?.value}</Text>
          </Box>
        ))}
      </Flex>

      <Container mx="2">
        <TinaMarkdown content={post.detailedInfo} components={components} />
      </Container>

      <Container mx="2">
        <Grid
          variant={GridVariant.Reference}
          content={post._sys.relativePath}
        />
      </Container>
    </Flex>
  );
}