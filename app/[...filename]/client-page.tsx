"use client";
import { ChatBubbleIcon, EnvelopeOpenIcon } from "@radix-ui/react-icons";
import {
  AccessibleIcon,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  IconButton,
  Reset,
  Text,
} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import Form from "../../components/Form/Form";
import InstagramPost from "../../components/InstagramPost";
import Slideshow from "../../components/Slideshow/Slideshow";
import Testimonial from "../../components/Testimonial/Testimonial";
import "../../styles/main.css";
import type { PageQuery } from "../../tina/__generated__/types";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: { page: PageQuery["page"] };
}

export default function ClientPage(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const content = data.page.body;

  return (
    <>
      <InstagramPost
        postMeta={{
          account: "Bandcamp",
          description:
            "Bandcamp ist ein Online-Plattenladen und eine Musik-Community, in der leidenschaftliche Fans die Künstler, die sie lieben, entdecken, mit ihnen Künstler, die sie lieben. Ich habe die neue Online-Präsenz mit einem Schwerpunkt auf Einfachheit.",
          url: "https://bandcamp.com/about",
        }}
        slides={[
          <Image
            className="object-fit-cover"
            src={"/uploads/bandcamp-oakland.jpg"}
            alt={"Logo of xxx"}
            width={660}
            height={400}
          />,
          <Flex
            direction={"column"}
            height={"400px"}
            align={"center"}
            justify={"center"}
          >
            <Heading as="h3">Bandcamp is good</Heading>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              odit, beatae numquam distinctio voluptatem deserunt alias corporis
              laboriosam eveniet mollitia
            </Text>
          </Flex>,
          <Image
            className="object-fit-cover"
            src={"/uploads/bandcamp-gang.jpg"}
            alt={"Logo of xxx"}
            width={660}
            height={400}
          />,
          <Image
            className="object-fit-cover"
            src={"/uploads/bandcamp-team.jpg"}
            alt={"Logo of xxx"}
            width={660}
            height={400}
          />,
        ]}
        width={{
          initial: "90vw",
          xs: "90vw",
          sm: "90vw",
          md: "520px",
          lg: "700px",
          xl: "700px",
        }}
      />

      <Form
        width={{
          initial: "90vw",
          xs: "90vw",
          sm: "90vw",
          md: "520px",
          lg: "700px",
          xl: "700px",
        }}
      />

      {/* <Grid columns={"2"}> */}
      {/* <Flex
          p={"7"}
          direction={"column"}
          justify={"between"}
          style={{ height: "100vh" }}
        >
          <div>
            <Heading as="h1" size={"9"} mb={"5"}>
              Adrian packt Ideen, Menschen und Produkte in das Format einer
              Webseite.
            </Heading>
            <div>
              <Text>
                Adrian Focke ist Webdeveloper. Websites und Storytelling ist,
                was er macht. Er entwickelt spezifische Lösungen, die nicht nur
                funktionieren, sondern auch das zeigen, worum es wirklich geht:
                die Menschen, Ideen und Produkte dahinter. Wenn Ihnen gefällt,
                was Sie sehen, schreiben Sie gerne ein{" "}
                <Reset>
                  <Link href={""}>Mail</Link>
                </Reset>{" "}
                oder{" "}
                <Reset>
                  <Link href={""}>rufen</Link>
                </Reset>{" "}
                Sie gleich an.
              </Text>
            </div>
          </div>

          <Form />
        </Flex> */}

      {/* <Flex
        className="bg"
        direction={"column"}
        justify={"between"}
        p={"7"}
        align={"start"}
      >
        <InstagramPost
          accountName={"Bandcamp"}
          accountUrl={"https://bandcamp.com/about"}
          images={[
            {
              image: "/uploads/bandcamp-oakland.jpg",
              altText: "Bandcamp session in Oakland",
            },
            {
              image: "/uploads/bandcamp-gang.jpg",
              altText: "The Bandcamp gang",
            },
            {
              image: "/uploads/bandcamp-team.jpg",
              altText: "The Bandcamp team",
            },
          ]}
          postDescription={`Bandcamp ist ein Online-Plattenladen und eine Musik-Community, in der
          leidenschaftliche Fans die Künstler, die sie lieben, entdecken, mit ihnen
          Künstler, die sie lieben. Ich habe die neue Online-Präsenz mit einem
          Schwerpunkt auf Einfachheit.`}
          variant="ghost"
        />

        <Button variant={"outline"}>Nächstes Projekt</Button>
      </Flex> */}
      {/* </Grid> */}
    </>
  );
}
