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
        <nav className="flex items-center justify-between w-full gap-4 py-4 text-lg text-white md:justify-between">
          {/* Logo */}
          <div className="flex flex-col justify-center w-14 h-14">
            <svg
              id="Layer_2"
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 421.85 310.21"
            >
              <g id="Layer_6" data-name="Layer 6">
                <path
                  d="m369.34,38.18v143.97c0,9.61-3.21,17.75-9.61,24.65-1.84,1.91-3.79,3.52-5.85,4.87L231.92,0l-115.99,201.32c-2.6-3.8-5.63-7.43-9.09-10.89-13.76-13.76-30.2-20.75-49.51-20.75H0v140.52h410.65l-30.6-53.11c5.87-3.64,11.42-8.08,16.66-13.32,16.76-17.26,25.15-37.72,25.15-61.63V38.18h-52.51ZM47.87,266.65h-4.31v-53.21h13.76c8.01,0,14.59,2.67,19.31,8.22,4.93,5.55,7.4,11.71,7.4,18.49s-2.26,13.15-7.81,18.7c-8.22,8.22-18.28,8.01-28.35,7.81Zm156.52-43.96l27.53-47.25,27.12,47.25h-54.65Z"
                  fill="#fff"
                  strokeWidth="0"
                />
              </g>
            </svg>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden" onClick={toggleMenu}>
            <FaBars className="text-2xl text-white hover:fill-softcoral" />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden gap-4 md:flex">
            <a href="#about" className="hover:text-softcoral">
              About
            </a>
            <a href="#skills" className="hover:text-softcoral">
              Skills
            </a>
            <a href="#portfolio" className="hover:text-softcoral">
              Portfolio
            </a>
            <a href="#resume" className="hover:text-softcoral">
              Resume
            </a>
            <a href="#contact" className="hover:text-softcoral">
              Contact
            </a>
          </div>
        </nav>
      )}

      {/* When the menu is open */}
      {isOpen && (
        <nav className="flex flex-col w-full gap-4 py-4 text-lg text-white md:justify-between">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex flex-col justify-center w-14 h-14">
              <svg
                id="Layer_2"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 421.85 310.21"
              >
                <g id="Layer_6" data-name="Layer 6">
                  <path
                    d="m369.34,38.18v143.97c0,9.61-3.21,17.75-9.61,24.65-1.84,1.91-3.79,3.52-5.85,4.87L231.92,0l-115.99,201.32c-2.6-3.8-5.63-7.43-9.09-10.89-13.76-13.76-30.2-20.75-49.51-20.75H0v140.52h410.65l-30.6-53.11c5.87-3.64,11.42-8.08,16.66-13.32,16.76-17.26,25.15-37.72,25.15-61.63V38.18h-52.51ZM47.87,266.65h-4.31v-53.21h13.76c8.01,0,14.59,2.67,19.31,8.22,4.93,5.55,7.4,11.71,7.4,18.49s-2.26,13.15-7.81,18.7c-8.22,8.22-18.28,8.01-28.35,7.81Zm156.52-43.96l27.53-47.25,27.12,47.25h-54.65Z"
                    fill="#fff"
                    strokeWidth="0"
                  />
                </g>
              </svg>
            </div>

            {/* Close Icon */}
            <div onClick={toggleMenu}>
              <FaTimes className="text-2xl text-white hover:fill-softcoral" />
            </div>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col items-center w-full gap-4 mt-4 xs:flex-row xs:justify-center">
            <a
              href="#about"
              className="hover:text-softcoral"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-softcoral"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              href="#portfolio"
              className="hover:text-softcoral"
              onClick={toggleMenu}
            >
              Portfolio
            </a>
            <a
              href="#resume"
              className="hover:text-softcoral"
              onClick={toggleMenu}
            >
              Resume
            </a>
            <a
              href="#contact"
              className="hover:text-softcoral"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
