import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white bg-black">
      <div className="flex flex-col xs:flex-row items-center justify-between px-4 mx-auto sm:px-4 lg:px-[121px] xl:max-w-screen-xl xl:px-[121px] xl:mx-auto 2xl:px-0 2xl:max-w-screen-xl py-28">
        {/* Logo */}
        <div className="flex justify-center w-1/4 mb-6 xs:mb-0 xs:justify-start">
          <a
            href="#"
            className="flex flex-col justify-center w-14 h-14"
          >
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
                  stroke-width="0"
                  className="hover:fill-teal"
                />
              </g>
            </svg>
          </a>
        </div>

        {/* Social Media and Copyright */}
        <div className="flex flex-col items-center w-3/4 xs:items-end">
          {/* Social Media Icons */}
          <div className="flex mb-6 space-x-6">
            <a
              href="https://www.facebook.com/daniel.atochejuarez"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://github.com/datoche-juarez"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-atoche-juarez-7272a3233/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          {/* Copyright */}
          <div className="text-[14px]">
            &copy; {new Date().getFullYear()} Daniel Atoche-Juarez
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
