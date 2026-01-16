import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e3a5f",
};

export const metadata: Metadata = {
  title: "TASHRA - Reliable Government Tender Supplier | Tashu Traders",
  description:
    "Tashu Traders (TASHRA) is a trusted government tender supplier for books, aluminium products, and grocery items. Quality assured bulk supply.",
  keywords: [
    "government tender supplier",
    "bulk supply",
    "tender procurement",
    "Tashu Traders",
    "TASHRA",
  ],
  openGraph: {
    title: "TASHRA - Reliable Government Tender Supplier | Tashu Traders",
    description:
      "Tashu Traders (TASHRA) is a trusted government tender supplier for books, aluminium products, and grocery items. Quality assured bulk supply.",
    siteName: "TASHRA - Tashu Traders",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <SmoothScroll>
          <Header />
          <main className="flex-grow pt-[72px]">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
