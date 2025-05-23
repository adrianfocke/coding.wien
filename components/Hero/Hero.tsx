import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Text,
} from "@radix-ui/themes";
import { use } from "react";
import type { PageBodyHeroFilter } from "../../tina/__generated__/types";
import { getLayoutProps } from "../../tina/templates/layout";
import { LanguageContext } from "../../utils/context/language";
import styles from "./Hero.module.css";

export default function Hero(props: PageBodyHeroFilter) {
  const language = use(LanguageContext);
  const { layout } = props as any;

  return (
    <Container>
      <Box
        position={"relative"}
        height={getLayoutProps(layout)("height")}
        width={getLayoutProps(layout)("width")}
        pt={getLayoutProps(layout)("paddingTop")}
        pb={getLayoutProps(layout)("paddingBottom")}
        pr={getLayoutProps(layout)("paddingRight")}
        pl={getLayoutProps(layout)("paddingLeft")}
        mt={getLayoutProps(layout)("marginTop")}
        mb={getLayoutProps(layout)("marginBottom")}
        mr={getLayoutProps(layout)("marginRight")}
        ml={getLayoutProps(layout)("marginLeft")}
      >
        <Flex
          mx={"5"}
          p={"4"}
          justify={"center"}
          align={"center"}
          direction={"column"}
          className={styles.slide}
        >
          <Heading
            align={"center"}
            className="serif"
            size={"9"}
            style={{ fontWeight: "normal" }}
          >
            {(props?.[language]?.heading as any) ?? ""}
          </Heading>

          <Text mt={"3"} mb={"5"} align={"center"}>
            {props?.[language]?.text as any}
          </Text>

          <Flex gap={"4"}>
            <Link href={`${props?.[language]?.linksToPrimary}`}>
              <Button
                title={`Button link to ${props?.[language]?.linksToPrimary}`}
                size={"3"}
                className="serif primaryButton"
                variant={"outline"}
                color={"gray"}
                radius={"full"}
              >
                <Text size={"5"}>
                  {props?.[language]?.linksToPrimary ??
                    (props?.[language]?.linkTextPrimary as any)}
                </Text>
              </Button>
            </Link>

            <Link href={`${props?.[language]?.linksToSecondary}`}>
              <Button
                title={`Button link to ${props?.[language]?.linksToSecondary}`}
                size={"3"}
                className="serif secondaryButton"
                variant={"outline"}
                color={"gray"}
                radius={"full"}
              >
                <Text size={"5"}>
                  {props?.[language]?.linksToSecondary ??
                    (props?.[language]?.linkTextSecondary as any)}
                </Text>
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}
