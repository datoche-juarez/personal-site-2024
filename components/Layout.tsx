import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Daniel Atoche-Juarez",
  description:
    "Explore the professional portfolio and projects of Daniel Atoche-Juarez, a skilled web developer specializing in both frontend and backend development. Discover his expertise in modern web technologies, including Next.js, TypeScript, and Tailwind CSS.",
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <header className="sticky top-0 bg-white shadow">
        <nav className="container mx-auto p-4 flex justify-between">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="bg-gray-800 text-white text-center p-4">
        &copy; {new Date().getFullYear()} Daniel Atoche-Juarez
      </footer>
    </div>
  );
};

export default Layout;
