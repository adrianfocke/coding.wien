import { ExternalLinkIcon } from "@radix-ui/react-icons";
import {
  AccessibleIcon,
  Box,
  Card,
  Flex,
  IconButton,
  Text,
  type CardProps,
} from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import Slideshow from "./Slideshow/Slideshow";

export default ({
  accountName,
  accountUrl,
  images = [],
  postDescription,
  variant,
}: {
  accountName: string;
  accountUrl: string;
  images: { image: string; altText: string }[];
  postDescription: string;
  variant?: CardProps["variant"];
}) => {
  return (
    <Box maxWidth={{ md: "90vw", lg: "700px" }}>
      <Card variant={variant ?? "classic"}>
        <Flex align={"center"} direction={"row"} justify={"between"}>
          <Flex gap={"1"} mb={"2"} align={"center"} direction={"row"}>
            <Image
              src={"/uploads/bandcamp.png"}
              alt={"Logo of xxx"}
              width={32}
              height={32}
            ></Image>
            <Text weight={"medium"}>{accountName.toUpperCase()}</Text>
          </Flex>

          <Link
            title={`External link to ${accountUrl}`}
            target={"_blank"}
            href={accountUrl}
          >
            <IconButton variant="ghost">
              <AccessibleIcon label={"External link icon"}>
                <ExternalLinkIcon width={20} height={20}></ExternalLinkIcon>
              </AccessibleIcon>
            </IconButton>
          </Link>
        </Flex>

        <Slideshow images={images} imageWidth={690} imageHeight={500} />

        <Box mt={"1"}>
          <Text mr={"1"} weight={"medium"}>
            {accountName.toUpperCase()}
          </Text>
          <Text>{postDescription}</Text>
        </Box>
      </Card>
    </Box>
  );
};
