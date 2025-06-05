"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";

import ColoredHTMLIcon from "../../assets/colored-icons/html-icon.svg";
import ColoredCSSIcon from "../../assets/colored-icons/css-icon.svg";
import ColoredJavaScriptIcon from "../../assets/colored-icons/javascript-icon.svg";
import ColoredTypeScriptIcon from "../../assets/colored-icons/typescript-icon.svg";
import ColoredReactIcon from "../../assets/colored-icons/react-icon.svg";
import ColoredNextJSIcon from "../../assets/colored-icons/nextjs-icon.svg";
import ColoredTailwindIcon from "../../assets/colored-icons/tailwind-icon.svg";
import ColoredNodeJSIcon from "../../assets/colored-icons/nodejs-icon.svg";
import ColoredMySQLIcon from "../../assets/colored-icons/mysql-icon.svg";
import ColoredAWSIcon from "../../assets/colored-icons/aws-icon.svg";
import ColoredStrapiIcon from "../../assets/colored-icons/strapi-icon.svg";
import ColoredGitIcon from "../../assets/colored-icons/git-icon.svg";

const IconMarquee = () => {
  const [marqueeSpeed, setMarqueeSpeed] = useState(50);

  const icons = [
    { src: ColoredHTMLIcon, alt: "HTML5 Logo" },
    { src: ColoredCSSIcon, alt: "CSS3 Logo" },
    { src: ColoredJavaScriptIcon, alt: "JavaScript Logo" },
    { src: ColoredTypeScriptIcon, alt: "TypeScript Logo" },
    { src: ColoredReactIcon, alt: "React Logo" },
    { src: ColoredNextJSIcon, alt: "Next.js Logo" },
    { src: ColoredTailwindIcon, alt: "Tailwind CSS Logo" },
    { src: ColoredNodeJSIcon, alt: "Node.js Logo" },
    { src: ColoredMySQLIcon, alt: "MySQL Logo" },
    { src: ColoredAWSIcon, alt: "AWS Logo" },
    { src: ColoredStrapiIcon, alt: "Strapi Logo" },
    { src: ColoredGitIcon, alt: "Git Logo" },
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
    <div className="relative overflow-hidden mask-mask-marquee">
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
