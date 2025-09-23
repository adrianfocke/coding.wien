"use client";
import { tinaField, useTina } from "tinacms/dist/react";
import type { ProjectQuery } from "../../../tina/__generated__/types";
import { Box, Flex, Heading } from "@radix-ui/themes";
import { use } from "react";
import { LanguageContext } from "../../../utils/context/language";
import Image from "next/legacy/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import components from "../../../tina/components";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: ProjectQuery;
}

export default function ClientPage(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const language = use(LanguageContext);

  const { project } = data;

  return (
    <>
      <div data-tina-field={tinaField(project.content?.[language]!, "title")}>
        <Flex
          position={"relative"}
          align={"center"}
          justify={"center"}
          key={"abc"}
          width={"100%"}
          height={"30vh"}
          className="scrollSnapAlignStart"
        >
          <Image
            priority={true}
            src={project.content?.[language]?.images![0]?.image as string}
            alt={`Slider image for `}
            layout="fill"
            objectFit="cover"
            className="zIndexMinus1"
          />
          <Heading
            align={"center"}
            size={"9"}
            className={`fontNormal serif`}
            style={{ color: "white" }}
          >
            {project.content?.[language]?.title as any}
          </Heading>
        </Flex>
      </div>

      {project.content?.[language]?.textblocks && (
        <div
          data-tina-field={tinaField(project.content?.[language].textblocks[0])}
        >
          <Box px={"6"} mt="6" mb="4">
            <TinaMarkdown
              content={project.content?.[language]?.textblocks[0]?.text}
              components={components}
            />
          </Box>
        </div>
      )}

      {project.content?.[language]?.textblocks && (
        <div
          data-tina-field={tinaField(project.content?.[language].textblocks[1])}
        >
          <Box px={"6"} my="4">
            <TinaMarkdown
              content={project.content?.[language]?.textblocks[1]?.text}
              components={components}
            />
          </Box>
        </div>
      )}
    </>
  );
}
