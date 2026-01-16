import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

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
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
