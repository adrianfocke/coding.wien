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
import { tinaField } from "tinacms/dist/react";
import { layoutDefaults } from "../../tina/templates/layout";

export default function Hero(props: PageBodyHeroFilter) {
  const language = use(LanguageContext);

  return (
    <Container py={layoutDefaults.paddingY}>
      <Box position={"relative"}>
        <Flex mx={"5"} justify={"center"} align={"center"} direction={"column"}>
          <Heading
            align={"center"}
            size={"9"}
            className={`fontNormal serif`}
            data-tina-field={tinaField(props[language], "heading")}
          >
            {(props?.[language]?.heading as any) ?? "Add your heading"}
          </Heading>

          <Text
            my={"4"}
            align={"center"}
            data-tina-field={tinaField(props[language], "text")}
          >
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
