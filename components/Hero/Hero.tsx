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
import { LanguageContext } from "../../utils/context/language";
import styles from "./Hero.module.css";

export default function Hero(props: PageBodyHeroFilter) {
  const language = use(LanguageContext);

  return (
    <Container my={"8"}>
      <Box position={"relative"}>
        <Flex
          mx={"5"}
          justify={"center"}
          align={"center"}
          direction={"column"}
          className={styles.slide}
        >
          <Heading
            align={"center"}
            size={"9"}
            className={`${styles.slide} fontNormal serif`}
          >
            {(props?.[language]?.heading as any) ?? "Add your heading"}
          </Heading>

          <Text mt={"3"} mb={"5"} align={"center"}>
            {(props?.[language]?.text as any) ??
              "Add your exciting text for getting interest."}
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
                    (props?.[language]?.linkTextPrimary as any) ??
                    "Add your primary link"}
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
                    (props?.[language]?.linkTextSecondary as any) ??
                    "Add your secondary link"}
                </Text>
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}
