import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arcane Devs",
  description: "Created by Arcane Devs Team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}</body>
    </html>
  );
}
