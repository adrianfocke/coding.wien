import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import type { NavigationEnFilter } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export default function Navigation(props: NavigationEnFilter) {
  return (
    <Flex
      p={"4"}
      justify={"between"}
      role="navigation"
      aria-label="Main Navigation"
      style={{
        borderBottom: "1px solid var(--accent-8)",
        fontFamily: "var(--font-serif)",
      }}
      data-tina-field={tinaField(props)}
    >
      <Link key={"1"} href={`/`}>
        <Text
          size={{ initial: "5", md: "7" }}
          data-tina-field={tinaField(props, "logo")}
        >
          {(props as any).logo}
        </Text>
      </Link>
      {props.links && (
        <Flex gap={"4"}>
          {(props as any).links?.map((link, index) => (
            <Link key={index} href={link.href || `/`}>
              <Text size={{ initial: "5", md: "7" }}>{link.label}</Text>
            </Link>
          ))}
        </Flex>
      )}
    </Flex>
  );
}
