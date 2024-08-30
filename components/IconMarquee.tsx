"use client";
import Marquee from "react-fast-marquee";
import HTMLIcon from "../assets/icons/html-icon.svg";
import CSSIcon from "../assets/icons/css-icon.svg";
import JavaScriptIcon from "../assets/icons/javascript-icon.svg";
import TypeScriptIcon from "../assets/icons/typescript-icon.svg";
import ReactIcon from "../assets/icons/react-icon.svg";
import NextJSIcon from "../assets/icons/nextjs-icon.svg";
import TailwindIcon from "../assets/icons/tailwind-icon.svg";
import NodeJSIcon from "../assets/icons/nodejs-icon.svg";
import MySQLIcon from "../assets/icons/mysql-icon.svg";
import AWSIcon from "../assets/icons/aws.svg";
import StrapiIcon from "../assets/icons/strapi-icon.svg";
import GitIcon from "../assets/icons/git-icon.svg";

const IconMarquee = () => {
  console.log(HTMLIcon.src);
  return (
    <div className="border border-teal">
      <Marquee>
        <img src={HTMLIcon.src} alt="HTML5 Logo" className="w-12 h-12" />
        <img src={CSSIcon.src} alt="CSS3 Logo" className="w-12 h-12" />
        <img
          src={JavaScriptIcon.src}
          alt="JavaScript Logo"
          className="w-12 h-12"
        />
        <img
          src={TypeScriptIcon.src}
          alt="TypeScript Logo"
          className="w-12 h-12"
        />
        <img src={ReactIcon.src} alt="React Logo" className="w-12 h-12" />
        <img src={NextJSIcon.src} alt="Next.js Logo" className="w-12 h-12" />
        <img
          src={TailwindIcon.src}
          alt="Tailwind CSS Logo"
          className="w-12 h-12"
        />
        <img src={NodeJSIcon.src} alt="Node.js Logo" className="w-12 h-12" />
        <img src={MySQLIcon.src} alt="MySQL Logo" className="w-12 h-12" />
        <img src={AWSIcon.src} alt="AWS Logo" className="w-12 h-12" />
        <img src={StrapiIcon.src} alt="AWS Logo" className="w-12 h-12" />
        <img src={GitIcon.src} alt="Git Logo" className="w-12 h-12" />
      </Marquee>
    </div>
  );
};

export default IconMarquee;
