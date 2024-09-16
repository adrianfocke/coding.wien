import { ExternalLinkIcon } from "@radix-ui/react-icons";
import {
  AccessibleIcon,
  Box,
  Card,
  Flex,
  Heading,
  IconButton,
  Text,
  type CardProps,
} from "@radix-ui/themes";
import type { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";
import "../styles/main.css";
import Slideshow from "./Slideshow/Slideshow";

export default ({
  postMeta,
  slides = [],
  width,
}: {
  postMeta: { account: string; url: string; description: string };
  slides: ReactElement[];
  width: Responsive<string>;
}) => {
  const { account, description, url } = postMeta;

  return (
    <Flex justify={"center"}>
      <Box width={width} m={"2"}>
        <Card variant={"ghost"}>
          <Flex align={"center"} direction={"row"} justify={"between"}>
            <Flex
              className="user-select-none"
              gap={"1"}
              mb={"2"}
              align={"center"}
              direction={"row"}
            >
              <Image
                src={"/uploads/bandcamp.png"}
                alt={"Logo of xxx"}
                width={32}
                height={32}
              ></Image>
              <Text weight={"medium"}>{account.toUpperCase()}</Text>
            </Flex>

            <Link
              title={`External link to ${url}`}
              target={"_blank"}
              href={url}
            >
              <IconButton variant="ghost">
                <AccessibleIcon label={"External link icon"}>
                  <ExternalLinkIcon width={20} height={20}></ExternalLinkIcon>
                </AccessibleIcon>
              </IconButton>
            </Link>
          </Flex>

          <Slideshow slides={slides} width={width} />

          <Box mt={"2"}>
            <Text mr={"1"} weight={"medium"}>
              {account.toUpperCase()}
            </Text>
            <Text>{description}</Text>
          </Box>
        </Card>
      </Box>
    </Flex>
  );
};
