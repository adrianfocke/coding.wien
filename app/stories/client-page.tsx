"use client";
import { useTina } from "tinacms/dist/react";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import type {
  StoryAndNavConnectionQuery,
} from "../../tina/__generated__/types";
import type { Language } from "../../tina/templating/special-fields";
import { LanguageContext } from "../../utils/context/language";
import { Box, Grid } from "@radix-ui/themes";
import Image from "../../components/Image/Image";

type ClientPageProps = {
  query: string;
  variables: {
    relativePath: string;
  };
  data: StoryAndNavConnectionQuery;
  language: Language;
};

export default function ClientPage(props: ClientPageProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const pages = data.storyConnection.edges?.sort(
    (a, b) =>
      new Date(b!.node?._sys.filename!).getTime() -
      new Date(a!.node?._sys.filename!).getTime()
  );

  console.log("Pages:", pages);

  return (
    <LanguageContext.Provider value={props.language || "en"}>
      <Navigation {...data.navigation} />
      {pages && (
        <Grid
          columns={{
            initial: "1",
          }}
          gap={"4"}
        >
          {pages.map((item, i) => (
            <Box key={i}>
              <Image
                link={"/stories/" + item?.node?._sys.filename}
                content={{ image: item?.node?.image }}
              />
            </Box>
          ))}
        </Grid>
      )}
      <Footer {...data.footer} />
    </LanguageContext.Provider>
  );
}
