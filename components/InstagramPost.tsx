import { ExternalLinkIcon } from "@radix-ui/react-icons";
import {
  AccessibleIcon,
  Box,
  Card,
  Flex,
  IconButton,
  Text,
} from "@radix-ui/themes";
import type { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";
import "../styles/main.css";
import {
  IntlField,
  StringField,
  WidthField,
  type IntlFieldType,
} from "../tina/fields";
import { DEFAULT_WIDTH } from "../utils/constants";
import Slideshow from "./Slideshow/Slideshow";

export const InstagramPostTemplate = {
  name: "InstagramPost",
  label: "InstagramPost",
  fields: [
    StringField("account"),
    StringField("url"),
    IntlField("description"),
    {
      name: "slides",
      label: "Images",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: `${item.altText ?? "Image"}`,
          };
        },
      },
      fields: [
        {
          label: "Image",
          name: "imgSrc",
          type: "image",
          required: true,
        },
        {
          label: "Alt Text",
          name: "altText",
          type: "string",
          required: true,
        },
      ],
    },
    WidthField,
  ],
};

export type InstagramPostProps = {
  account: string;
  description: IntlFieldType;
  slides: ReactElement[];
  width: Responsive<string>;
  url: string;
};

export default function InstagramPost({
  account = "adrianfocke",
  description = {
    de: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, repellat nemo ad ratione magni deleniti omnis. Nisi soluta mollitia architecto unde consequuntur ex sint non iste, beatae autem, iure dicta!",
    en: "TEST",
  },
  url = "https://bandcamp.com/about",
  slides = [],
  width = DEFAULT_WIDTH,
}: InstagramPostProps) {
  return (
    (<Box width={width} m={"2"}>
      <Card variant={"ghost"}>
        <Flex align={"center"} direction={"row"} justify={"between"}>
          <Flex
            style={{ userSelect: "none" }}
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
              style={{
                maxWidth: "100%",
                height: "auto"
              }}></Image>
            <Text weight={"medium"}>{account.toUpperCase()}</Text>
          </Flex>

          <Link title={`External link to ${url}`} target={"_blank"} href={url}>
            <IconButton variant="ghost">
              <AccessibleIcon label={"External link icon"}>
                <ExternalLinkIcon width={20} height={20}></ExternalLinkIcon>
              </AccessibleIcon>
            </IconButton>
          </Link>
        </Flex>

        <Slideshow slides={slides as []} width={width} />

        <Box mt={"2"}>
          <Text mr={"1"} weight={"medium"}>
            {account.toUpperCase()}
          </Text>
          <Text>{description["de"]}</Text>
        </Box>
      </Card>
    </Box>)
  );
} 