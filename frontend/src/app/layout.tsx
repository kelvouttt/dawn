import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/NavBar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "dawn.",
  description: "dawn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="{`${geistSans.variable} ${geistMono.variable} antialiased`}">
        <StackProvider app={stackServerApp}><StackTheme>
        <Navbar />
        {children}
        <Footer />
      </StackTheme></StackProvider></body>
    </html>
  );
}
