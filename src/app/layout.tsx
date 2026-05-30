import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Sophy Store | Moda Feminina",
  description: "Sophy Store - Peças lindas e acessíveis. Entrega em Açailândia - MA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} antialiased`}>
      <body className="font-outfit bg-background text-foreground min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
