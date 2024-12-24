import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "../styles/main.css";
import { CONSTANTS } from "../utils/config";

const inter = Inter({
  weight: "variable",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

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
    <html lang="en" className={inter.className}>
      <body style={{ margin: 0 }}>
        <Theme>
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
