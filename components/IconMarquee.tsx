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
  return (
    <div className="relative overflow-hidden mask-gradient">
      <Marquee speed={50} className="flex content-around">
        <img
          src={HTMLIcon.src}
          alt="HTML5 Logo"
          className="mr-8 md:mr-11 w-14 h-14"
        />
        <img
          src={CSSIcon.src}
          alt="CSS3 Logo"
          className="mr-8 md:mr-11 w-14 h-14"
        />
        <img
          src={JavaScriptIcon.src}
          alt="JavaScript Logo"
          className="mr-8 w-14 h-14 md:mr-11"
        />
        <img
          src={TypeScriptIcon.src}
          alt="TypeScript Logo"
          className="mr-8 w-14 h-14 md:mr-11"
        />
        <img
          src={ReactIcon.src}
          alt="React Logo"
          className="mr-8 w-14 h-14 md:mr-11"
        />
        <img
          src={NextJSIcon.src}
          alt="Next.js Logo"
          className="mr-8 w-14 h-14 md:mr-11"
        />
        <img
          src={TailwindIcon.src}
          alt="Tailwind CSS Logo"
          className="mr-8 w-14 h-14 md:mr-11"
        />
        <img
          src={NodeJSIcon.src}
          alt="Node.js Logo"
          className="mr-8 w-14 h-14 md:mr-11"
        />
        <img
          src={MySQLIcon.src}
          alt="MySQL Logo"
          className="mr-8 w-14 h-14 md:mr-11"
        />
        <img
          src={AWSIcon.src}
          alt="AWS Logo"
          className="mr-8 w-14 h-14 md:mr-11"
        />
        <img
          src={StrapiIcon.src}
          alt="Strapi Logo"
          className="mr-8 w-14 h-14 md:mr-11"
        />
        <img
          src={GitIcon.src}
          alt="Git Logo"
          className="mr-8 w-14 h-14 md:mr-11"
        />
      </Marquee>
    </div>
  );
};

export default IconMarquee;
