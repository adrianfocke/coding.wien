import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import React from "react";
import "../styles/main.css";
import { sans, serif } from "./fonts";
import { LanguageInitializer } from "./LanguageInitializer";
import Footer from "../components/Footer/Footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body style={{ margin: 0 }}>
        <LanguageInitializer />
        <Theme>
          <main>{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
