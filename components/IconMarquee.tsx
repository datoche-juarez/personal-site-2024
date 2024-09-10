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
import { useState, useEffect } from "react";

const IconMarquee = () => {
  const [marqueeSpeed, setMarqueeSpeed] = useState(50);

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

  useEffect(() => {
    // Check screen size and adjust speed for mobile
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setMarqueeSpeed(isMobile ? 30 : 50); // Slow down on mobile
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it once on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative overflow-hidden mask-gradient">
      <Marquee speed={marqueeSpeed} className="flex content-around">
        {icons.map((icon, index) => (
          <div key={index} className="mr-8 md:mr-11 w-14 h-14">
            <Image
              src={icon.src}
              alt={icon.alt}
              width={56}
              height={56}
              className="w-full h-full"
              priority // Ensure images are preloaded
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default IconMarquee;
