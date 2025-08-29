"use client";
import { tinaField, useTina } from "tinacms/dist/react";
import type { ProjectQuery } from "../../../tina/__generated__/types";
import { Box } from "@radix-ui/themes";
import { use } from "react";
import { LanguageContext } from "../../../utils/context/language";
import Image from "next/legacy/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Slideshow from "../../../components/Slideshow/Slideshow";
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
      <div data-tina-field={tinaField(project.content?.[language])}>
        <Box
          position={"relative"}
          key={"abc"}
          width={"100%"}
          height={"30vh"}
          style={{ scrollSnapAlign: "start" }}
        >
          <Image
            priority={true}
            src={project.content?.[language]?.images![0]?.image as string}
            alt={`Slider image for `}
            layout="fill"
            objectFit="cover"
            style={{ zIndex: "-1" }}
          />
        </Box>
      </div>

      {project.content?.[language]?.textblocks && (
        <TinaMarkdown
          content={project.content?.[language]?.textblocks[0]?.text}
          components={components}
        />
      )}

      <Box px={"5"}>
        <Slideshow
          en={{
            slides: project.content?.[language]?.images?.map((img) => ({
              image: img.image,
            })) as unknown as import("../../../tina/__generated__/types").PageBodySlideshowEnSlidesFilter,
          }}
        />
      </Box>

      {project.content?.[language]?.textblocks && (
        <TinaMarkdown
          content={project.content?.[language]?.textblocks[1]?.text}
          components={components}
        />
      )}
    </>
  );
}
