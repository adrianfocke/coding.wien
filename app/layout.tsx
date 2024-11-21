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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
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
