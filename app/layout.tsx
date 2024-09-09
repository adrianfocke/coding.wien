import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
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
          margin: 0,
        }}
      >
        <Theme>
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
