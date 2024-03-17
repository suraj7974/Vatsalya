import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTransitionBar from "next-transition-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vatsalya",
  description: "A Doctor's platform for preganancy test.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTransitionBar 
        color="#0af"
        height={4}
        showSpinner={false}
        />
        {children}
      </body>
    </html>
  );
}
