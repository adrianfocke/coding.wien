import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import "./styles.css";

export type RadixNavigationMenuProps = {
  links: string[];
};

export default function NavigationMenu({ links }: RadixNavigationMenuProps) {
  console.log(links);
  return (
    <RadixNavigationMenu.Root className="RadixNavigationMenuRoot">
      <RadixNavigationMenu.List className="RadixNavigationMenuList">
        <RadixNavigationMenu.Item>
          <RadixNavigationMenu.Link
            className="RadixNavigationMenuLink"
            href="/"
          >
            Work
          </RadixNavigationMenu.Link>
        </RadixNavigationMenu.Item>

        <RadixNavigationMenu.Item>
          <RadixNavigationMenu.Link
            className="RadixNavigationMenuLink"
            href="https://github.com/radix-ui"
          >
            About
          </RadixNavigationMenu.Link>
        </RadixNavigationMenu.Item>

        <RadixNavigationMenu.Item>
          <RadixNavigationMenu.Link
            className="RadixNavigationMenuLink"
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
