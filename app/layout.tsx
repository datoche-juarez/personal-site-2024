import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar"; // Import the NavBar component

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
        <NavBar /> {/* Include the NavBar component */}
        <main>{children}</main>
        <footer className="bg-gray-800 text-white text-center p-4">
          &copy; {new Date().getFullYear()} Daniel Atoche-Juarez
        </footer>
      </body>
    </html>
  );
}
