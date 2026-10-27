import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/globals.css"; // Yeh line sabse zaroori hai

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxe Scent | Premium Perfumes",
  description: "Discover your signature scent.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-cream text-charcoal antialiased`}>
        {children}
      </body>
    </html>
  );
}