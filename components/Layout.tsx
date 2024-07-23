import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

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
