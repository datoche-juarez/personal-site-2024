"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="flex items-center justify-end gap-4 py-4 text-lg text-white border md:justify-between border-purple">
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-2xl text-white border border-red" />
          ) : (
            <FaBars className="text-2xl text-white border border-red" />
          )}
        </div>
        <div className="hidden gap-4 md:flex">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-end gap-2 py-4 text-white border md:hidden border-yellow">
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
          <a href="#skills" onClick={toggleMenu}>
            Skills
          </a>
          <a href="#portfolio" onClick={toggleMenu}>
            Portfolio
          </a>
          <a href="#resume" onClick={toggleMenu}>
            Resume
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default NavBar;
