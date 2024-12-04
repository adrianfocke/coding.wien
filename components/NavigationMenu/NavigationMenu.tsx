"use client";
import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
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
            className={`RadixNavigationMenuLink`}
            href="/"
            title="Zur Startseite"
            style={{
              borderRadius: "50%",
              backgroundColor: "#900B09",
              position: "relative",
              width: "8px",
              height: "14px",
              marginRight: "4px",
            }}
          >
            <Image
              src={"/uploads/logo.png"}
              alt={""}
              fill
              style={{
                objectFit: "contain",
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
            Work
          </RadixNavigationMenu.Link>
        </RadixNavigationMenu.Item>

        <RadixNavigationMenu.Item>
          <RadixNavigationMenu.Link
            className={`RadixNavigationMenuLink ${
              pathname === "/about" && "active-link"
            }`}
            href="/about"
          >
            About
          </RadixNavigationMenu.Link>
        </RadixNavigationMenu.Item>

        <RadixNavigationMenu.Item>
          <RadixNavigationMenu.Link
            className={`RadixNavigationMenuLink ${
              pathname === "/contact" && "active-link"
            }`}
            href="/contact"
          >
            Contact
          </RadixNavigationMenu.Link>
        </RadixNavigationMenu.Item>
      </RadixNavigationMenu.List>

      <div className="ViewportPosition">
        <RadixNavigationMenu.Viewport className="RadixNavigationMenuViewport" />
      </div>
    </RadixNavigationMenu.Root>
  );
}
