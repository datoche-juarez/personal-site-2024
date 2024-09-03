import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import HeroBanner from "@/components/HeroBanner"; // Import the HeroBanner component
import Footer from "@/components/Footer";

export const metadata = {
  title: "Daniel Atoche-Juarez",
  description:
    "Explore the professional portfolio and projects of Daniel Atoche-Juarez, a skilled web developer specializing in both frontend and backend development. Discover his expertise in modern web technologies, including Next.js, TypeScript, and Tailwind CSS.",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  preload: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <HeroBanner />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
