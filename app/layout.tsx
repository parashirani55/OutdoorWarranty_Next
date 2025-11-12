import type { Metadata } from "next";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Poppins, Kalam } from "next/font/google";
import PageLoader from "@/components/PageLoader";
import LenisProvider from "@/components/LenisProvider"; // ✅ Import here

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Outdoor Warranty | RV Protection Plans",
  description:
    "Extended protection plans for RVs and outdoor vehicles — OutdoorWarranty.com",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white">
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${poppins.className} text-gray-900 bg-white min-h-screen antialiased overflow-x-hidden`}
      >
        <PageLoader />
        <LenisProvider>{children}</LenisProvider> {/* ✅ works safely */}
      </body>
    </html>
  );
}
