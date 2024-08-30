"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full">
      {/* When the menu is closed */}
      {!isOpen && (
        <nav className="flex items-center justify-between w-full gap-4 py-4 text-lg text-white border md:justify-between">
          {/* Logo */}
          <div className="bg-gray-300 border w-14 h-14" />

          {/* Hamburger Icon */}
          <div className="md:hidden" onClick={toggleMenu}>
            <FaBars className="text-2xl text-white" />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden gap-4 md:flex">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      )}

      {/* When the menu is open */}
      {isOpen && (
        <nav className="flex flex-col w-full gap-4 py-4 text-lg text-white border md:justify-between">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="bg-gray-300 border w-14 h-14" />

            {/* Close Icon */}
            <div onClick={toggleMenu}>
              <FaTimes className="text-2xl text-white" />
            </div>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col items-center w-full gap-4 mt-4 xs:flex-row xs:justify-center">
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
        </nav>
      )}
    </header>
  );
};

export default NavBar;
