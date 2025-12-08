import { Inter as Sans, Raleway as Serif } from "next/font/google";

export const serif = Serif({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

// export const serif = localFont({
//   src: "./Safira.woff2",
//   variable: "--font-serif",
// });

export const sans = Sans({
  weight: "variable",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
