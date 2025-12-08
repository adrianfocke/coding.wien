import { Flex, Text, Button, Box } from "@radix-ui/themes";
import Link from "next/link";
import { Popover } from "@radix-ui/themes";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import type { NavigationEnFilter } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { getHrefFromId } from "../../utils/getHrefFromId";

export default function Navigation(props: NavigationEnFilter) {
  return (
    <Flex
      p={"4"}
      justify={"between"}
      role="navigation"
      aria-label="Main Navigation"
    >
      <Link key={"1"} href={`/`}>
        <Text
          size={{ initial: "5", md: "7" }}
          data-tina-field={tinaField(props, "logo")}
        >
          {(props as any).logo}
        </Text>
      </Link>

      {/* Mobile Menu - Hidden on md and up */}
      {props.links && (
        <Box display={{ initial: "block", md: "none" }}>
          <Popover.Root>
            <Popover.Trigger>
              <Button variant="ghost" size="3">
                <HamburgerMenuIcon width="20" height="20" />
              </Button>
            </Popover.Trigger>
            <Popover.Content width="360px" side="bottom" align="end">
              <Flex direction="column" gap="3">
                {(props as any).links?.map((link, index) => {
                  const href = link.href?.id
                    ? getHrefFromId(link.href.id)
                    : link.fallbackHref ?? "/";

                  return (
                    <Link
                      key={index}
                      href={href}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Text
                        size="4"
                        style={{
                          fontFamily: "var(--font-sans)",
                          cursor: "pointer",
                          padding: "8px 12px",
                          borderRadius: "4px",
                          transition: "background-color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor =
                            "var(--gray-3)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        {link.label}
                      </Text>
                    </Link>
                  );
                })}
              </Flex>
            </Popover.Content>
          </Popover.Root>
        </Box>
      )}

      {/* Desktop Menu - Hidden on initial */}
      {props.links && (
        <Flex gap={"4"} display={{ initial: "none", md: "flex" }}>
          {(props as any).links?.map((link, index) => {
            const href = link.href?.id
              ? getHrefFromId(link.href.id)
              : link.fallbackHref ?? "/";

            return (
              <Link
                key={index}
                href={href}
                aria-current={href === "/" ? "page" : undefined}
              >
                <Text
                  size={{ initial: "4", md: "5" }}
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {link.label}
                </Text>
              </Link>
            );
          })}
        </Flex>
      )}
    </Flex>
  );
}
