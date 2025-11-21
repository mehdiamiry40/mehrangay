import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minimalist Portfolio",
  description: "A simple modern minimalist photo portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white dark:bg-black text-black dark:text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow pt-24 pb-12 px-6 max-w-7xl mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
