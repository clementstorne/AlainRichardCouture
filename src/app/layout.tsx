import type { Metadata } from "next";
import { Baskervville, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const baskervville = Baskervville({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-baskervville",
});

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
      <body className={`{${baskervville.variable} ${inter.variable}}`}>
        {children}
      </body>
    </html>
  );
}
