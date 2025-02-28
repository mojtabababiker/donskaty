import type { Metadata } from "next";
import { DM_Mono, Bowlby_One_SC } from "next/font/google";

import "./globals.css";
import { SVGFilters } from "@/components/SVGFilter";
import { createClient } from "@/prismicio";

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: "500",
  display: "swap",
});

const bowlby = Bowlby_One_SC({
  variable: "--font-bowlby-one",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("homepage");

  return {
    title: settings.data.meta_title,
    description: settings.data.meta_description,
    openGraph: { images: settings.data.meta_image.url ?? undefined },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bowlby.variable} ${dmMono.variable} font-mono font-medium text-zinc-800 antialiased`}
      >
        <main>{children}</main>
        <SVGFilters />
      </body>
    </html>
  );
}
