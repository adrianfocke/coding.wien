import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import type { NavigationEnFilter } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export default function Navigation(props: NavigationEnFilter) {
  const getHrefFromId = (id?: string) => {
    if (!id) return "/";
    // Extract collection and filename from id
    // e.g., "content/page/about.mdx" -> "/about"
    // e.g., "content/spaces" -> "/spaces" (collection link)
    // e.g., "content/spaces/yoga.json" -> "/spaces/yoga" (individual item)
    const parts = id.split("/");
    const lastPart = parts[parts.length - 1];

    // If it ends with .mdx or .json, it's a specific file
    if (lastPart?.includes(".")) {
      const filename = lastPart.replace(/\.(mdx|json)$/, "");
      const collection = parts[parts.length - 2];

      // Only include collection in path if it's not 'page'
      if (collection && collection !== "page") {
        return `/${collection}/${filename}`;
      }
      return `/${filename}`;
    }

    // Otherwise it's a collection link (e.g., "content/spaces")
    const collection = parts[parts.length - 1];
    return `/${collection}`;
  };

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
                <Text size={{ initial: "5", md: "7" }}>{link.label}</Text>
              </Link>
            );
          })}
        </Flex>
      )}
    </Flex>
  );
}
