import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
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
        <main
          className={cn(
            "max-w-240 min-h-screen mb-8 flex flex-col items-center justify-center space-y-8",
            "mx-5 mt-100",
            "md:mx-auto md:mt-146"
          )}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
