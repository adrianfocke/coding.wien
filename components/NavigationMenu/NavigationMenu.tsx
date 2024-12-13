"use client";
import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import { Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./styles.css";

export default function NavigationMenu() {
  const pathname = usePathname();
  console.log("Path: ", pathname);

  return (
    <RadixNavigationMenu.Root className="RadixNavigationMenuRoot">
      <RadixNavigationMenu.List className="RadixNavigationMenuList">
        <RadixNavigationMenu.Item>
          <RadixNavigationMenu.Link
            href="/"
            title="Zur Startseite"
            style={{
              position: "relative",
            }}
          >
            <Image
              src={"/uploads/logo.png"}
              alt={""}
              height={"20"}
              width={"24"}
              style={{
                objectFit: "contain",
                marginTop: "11px",
              }}
            ></Image>
          </RadixNavigationMenu.Link>
        </RadixNavigationMenu.Item>

        <RadixNavigationMenu.Item>
          <RadixNavigationMenu.Link
            className={`RadixNavigationMenuLink ${
              pathname === "/works" && "active-link"
            }`}
            href="/works"
          >
            <Text size={"4"}>Work</Text>
          </RadixNavigationMenu.Link>
        </RadixNavigationMenu.Item>

        <RadixNavigationMenu.Item>
          <RadixNavigationMenu.Link
            className={`RadixNavigationMenuLink ${
              pathname === "/about" && "active-link"
            }`}
            href="/about"
          >
            <Text size={"4"}>About</Text>
          </RadixNavigationMenu.Link>
        </RadixNavigationMenu.Item>

        <RadixNavigationMenu.Item>
          <RadixNavigationMenu.Link
            className={`RadixNavigationMenuLink ${
              pathname === "/contact" && "active-link"
            }`}
            href="/contact"
          >
            <Text size={"4"}>Contact</Text>
          </RadixNavigationMenu.Link>
        </RadixNavigationMenu.Item>
      </RadixNavigationMenu.List>

      <div className="ViewportPosition">
        <RadixNavigationMenu.Viewport className="RadixNavigationMenuViewport" />
      </div>
    </RadixNavigationMenu.Root>
  );
}
