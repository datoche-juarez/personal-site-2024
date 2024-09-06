"use client";
import Image from "next/image";
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
  const icons = [
    { src: HTMLIcon, alt: "HTML5 Logo" },
    { src: CSSIcon, alt: "CSS3 Logo" },
    { src: JavaScriptIcon, alt: "JavaScript Logo" },
    { src: TypeScriptIcon, alt: "TypeScript Logo" },
    { src: ReactIcon, alt: "React Logo" },
    { src: NextJSIcon, alt: "Next.js Logo" },
    { src: TailwindIcon, alt: "Tailwind CSS Logo" },
    { src: NodeJSIcon, alt: "Node.js Logo" },
    { src: MySQLIcon, alt: "MySQL Logo" },
    { src: AWSIcon, alt: "AWS Logo" },
    { src: StrapiIcon, alt: "Strapi Logo" },
    { src: GitIcon, alt: "Git Logo" },
  ];

  return (
    <div className="relative overflow-hidden mask-gradient">
      <Marquee speed={50} className="flex content-around">
        {icons.map((icon, index) => (
          <div key={index} className="mr-8 md:mr-11 w-14 h-14">
            <Image
              src={icon.src}
              alt={icon.alt}
              width={56}
              height={56}
              className="w-full h-full"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default IconMarquee;
