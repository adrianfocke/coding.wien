import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import React from "react";
import project from "../project";
import "../styles/main.css";
import { sans, serif } from "./fonts";
import Navigation from "../components/Navigation/Navigation";

export const metadata: Metadata = {
  title: {
    template: `%s | ${project.name}`,
    default: project.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="bodyNoMargin">
        <Theme scaling={"110%"}>
          <Navigation />
          <main style={{ paddingBottom: "60px" }}>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
