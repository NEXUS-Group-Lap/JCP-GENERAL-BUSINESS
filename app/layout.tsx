import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JCP General Business | Land Clearing & Site Preparation in SWFL",
  description:
    "Residential and industrial land clearing, site preparation, demolition, topsoil, rock fill, and material hauling from Port Charlotte to Marco Island. Free estimates.",
  keywords: [
    "land clearing Southwest Florida",
    "site preparation Naples FL",
    "dirt hauling",
    "demolition Southwest Florida",
    "rock fill Naples",
    "JCP General Business",
  ],
  openGraph: {
    title: "JCP General Business",
    description:
      "Land clearing, site preparation, demolition, and hauling across Southwest Florida.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
