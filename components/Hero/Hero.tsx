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
import { turnReferenceIntoLink } from "../../tina/utils";
import { getLayoutProp } from "../../tina/templates/layout";
import { useBreakpoint } from "../../utils/hooks/breakoint";
import { displayTextOrPlaceholder, placeholders } from "../helpers";

export default function Hero(props: PageBodyHeroFilter) {
  const language = use(LanguageContext);
  const breakpoint = useBreakpoint();

  return (
    <Container
      my={getLayoutProp((props as any).layout)("marginY")[breakpoint] ?? "4"}
    >
      <Box position={"relative"}>
        <Flex mx={"5"} justify={"center"} align={"center"} direction={"column"}>
          <Heading
            align={"center"}
            size={"9"}
            className={`fontNormal serif`}
            data-tina-field={tinaField(props[language], "heading")}
          >
            {displayTextOrPlaceholder(
              props?.[language]?.heading,
              placeholders.heading
            )}
          </Heading>

          <Text
            my={"4"}
            align={"center"}
            data-tina-field={tinaField(props[language], "text")}
          >
            {displayTextOrPlaceholder(
              props?.[language]?.text,
              placeholders.text
            )}
          </Text>

          <Flex gap={"4"}>
            <Link
              href={`${
                props?.[language]?.linksToReferencePrimary
                  ? turnReferenceIntoLink(
                      props?.[language]?.linksToReferencePrimary as any
                    )
                  : props?.[language]?.linksToPrimary
              }`}
            >
              <Button
                title={`Button link to ${props?.[language]?.linksToPrimary}`}
                size={"3"}
                className="serif primaryButton"
                variant={"outline"}
                color={"gray"}
                radius={"full"}
              >
                <Text size={"5"}>
                  {displayTextOrPlaceholder(
                    props?.[language]?.linkTextPrimary,
                    placeholders.link
                  )}
                </Text>
              </Button>
            </Link>

            <Link
              href={`${
                props?.[language]?.linksToReferenceSecondary
                  ? turnReferenceIntoLink(
                      props?.[language]?.linksToReferenceSecondary as any
                    )
                  : props?.[language]?.linksToSecondary
              }`}
            >
              <Button
                title={`Button link to ${props?.[language]?.linksToSecondary}`}
                size={"3"}
                className="serif secondaryButton"
                variant={"outline"}
                color={"gray"}
                radius={"full"}
              >
                <Text size={"5"}>
                  {displayTextOrPlaceholder(
                    props?.[language]?.linkTextSecondary,
                    placeholders.link
                  )}
                </Text>
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}
