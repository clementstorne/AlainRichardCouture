import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Alain Richard Couture",
  description:
    "Découvrez Alain Richard Couture, inspiré par les reliefs et la faune du Jura. Créations uniques et éthiques en fourrures et cuirs exotiques. Tenues chics, sensuelles et responsables, alliant tradition et modernité. Production nationale privilégiant les collaborations artisanales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
