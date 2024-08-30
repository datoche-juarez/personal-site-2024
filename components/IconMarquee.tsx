"use client";
import Marquee from "react-fast-marquee";

const IconMarquee = () => {
  return (
    <div className="border border-teal">
      <Marquee>
        <img src="/icons/html5.svg" alt="HTML5 Logo" className="w-12 h-12" />
        <img src="/icons/css3.svg" alt="CSS3 Logo" className="w-12 h-12" />
        <img
          src="/icons/javascript.svg"
          alt="JavaScript Logo"
          className="w-12 h-12"
        />
        <img
          src="/icons/typescript.svg"
          alt="TypeScript Logo"
          className="w-12 h-12"
        />
        <img src="/icons/react.svg" alt="React Logo" className="w-12 h-12" />
        <img src="/icons/nextjs.svg" alt="Next.js Logo" className="w-12 h-12" />
        <img
          src="/icons/tailwindcss.svg"
          alt="Tailwind CSS Logo"
          className="w-12 h-12"
        />
        <img src="/icons/nodejs.svg" alt="Node.js Logo" className="w-12 h-12" />
        <img src="/icons/mysql.svg" alt="MySQL Logo" className="w-12 h-12" />
        <img src="/icons/git.svg" alt="Git Logo" className="w-12 h-12" />
      </Marquee>
    </div>
  );
};

export default IconMarquee;
