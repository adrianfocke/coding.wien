import { TabNav } from "@radix-ui/themes";

export default () => {
  return (
    <header>
      <TabNav.Root>
        <TabNav.Link href="/">Account</TabNav.Link>
        <TabNav.Link href="/posts" active>
          Documents
        </TabNav.Link>
        <TabNav.Link href="#">Settings</TabNav.Link>
      </TabNav.Root>
    </header>
  );
};
