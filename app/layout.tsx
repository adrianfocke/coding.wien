import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import React from "react";
import "../styles/main.css";
import { CONSTANTS } from "../utils/config";
import { sans, serif } from "./fonts";

export const metadata: Metadata = {
  title: {
    template: `%s | ${CONSTANTS.projectName}`,
    default: CONSTANTS.projectName,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body style={{ margin: 0 }}>
        <Theme>
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
