import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Link from "next/link";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: "3rem",
        }}
      >
        <Theme>
          <header>
            <Link href="/">Home</Link>
            {" | "}
            <Link href="/posts">Posts</Link>
          </header>
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
