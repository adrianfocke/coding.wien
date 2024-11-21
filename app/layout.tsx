import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Kode_Mono } from "next/font/google";
import React from "react";
import NavigationMenu from "../components/NavigationMenu/NavigationMenu";

const kode_mono = Kode_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kode_mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={kode_mono.variable}>
      <body style={{ margin: 0 }}>
        <Theme accentColor="pink" grayColor="mauve">
          <NavigationMenu links={[]} />
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
