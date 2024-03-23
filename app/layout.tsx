import type { Metadata } from "next";
import { sans } from "@/lib/fonts";
import { Header } from "@/components/shared/Header";
import "./globals.css";
import { Footer } from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Carmart",
  description: "A pretend used car sales website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
