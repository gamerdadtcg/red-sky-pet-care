import type { Metadata } from "next";
import { Geist_Mono, Karla, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Red Sky Pet Care | Pet Sitting in Santa Clarita",
  description:
    "Red Sky Pet Care — trusted pet sitting in Santa Clarita, CA 91387 and surrounding areas. Dog walks, drop-in visits, and overnight care so your pets stay happy at home.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${karla.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
