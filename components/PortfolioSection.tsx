"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useMediaQuery } from "@react-hook/media-query";
import PeakerImage from "@/assets/images/peaker-services-inc.png";
import PeakerImageSquare from "@/assets/images/peaker-services-inc-square.png";
import PingImage from "@/assets/images/ping-software-usa.png";
import PingImageSquare from "@/assets/images/ping-software-usa-square.png";
import MarketocracyImage from "@/assets/images/marketocracy-io-tile.png";
import MarketocracyImageSquare from "@/assets/images/marketocracy-io-square.png";
import NineOneOneImage from "@/assets/images/911-ready.png";
import NineOneOneImageSquare from "@/assets/images/911-ready-square.png";
import CordialShoppeImage from "@/assets/images/cordial-shoppe.png";
import CordialShoppeImageSquare from "@/assets/images/cordial-shoppe-square.png";
import RAAImage from "@/assets/images/raffles-and-auctions.png";
import VinylShoppingListImage from "@/assets/images/vinyl-shopping-list.png";
import VinylShoppingListImageSquare from "@/assets/images/vinyl-shopping-list-square.png";
import DansBBQImage from "@/assets/images/dans-bbq-tile.png";
import DansBBQImageSquare from "@/assets/images/dans-bbq-square.png";
import AlieNFTImage from "@/assets/images/alien-tiles.png";
import AlieNFTImageSquare from "@/assets/images/alienfts-square.png";

const PortfolioSection = () => {
  const isMdUp = useMediaQuery("only screen and (min-width: 768px)");
  const isXlUp = useMediaQuery("only screen and (min-width: 1280px)");

  const getImageSrc = (project: "Peaker" | "Ping"): StaticImageData => {
    if (isMdUp && !isXlUp) {
      return project === "Peaker" ? PeakerImageSquare : PingImageSquare;
    }
    return project === "Peaker" ? PeakerImage : PingImage;
  };

  const getImageLayout = (): "fill" | "responsive" => {
    if (isMdUp && !isXlUp) {
      return "fill";
    }
    return "responsive";
  };

  return (
    <section id="portfolio">
      <h2 className="font-bold underline decoration-2 decoration-gray-400 underline-offset-[10px] text-h1">
        My Portfolio
      </h2>

      <div className="flex flex-col-reverse gap-4 mt-8 md:mt-10 md:flex-row border border-red">
        <div className="w-full md:w-1/2 md:flex md:flex-col md:justify-between border border-blue">
          <div>
            <div className="text-2xl font-bold border border-red">
              Peaker Services, inc.
            </div>
            <div className="mt-4 border border-red">
              <span className="font-bold">Role:</span> Web Developer
            </div>
            <div className="border border-red">
              <span className="font-bold">Technologies Used:</span> NextJS,
              Tailwind CSS, Strapi CMS
            </div>
            <div className="border border-red">
              <span className="font-bold">Outcome:</span> "s part of a small
              team of developers, I contributed to the development of a fully
              responsive and modern website for Peaker Services Inc. My role
              encompassed both frontend development and design work, ensuring
              that the user interface was intuitive, visually appealing, and
              aligned with the overall design specifications. I also
              collaborated with the team to integrate a powerful content
              management system (Strapi CMS) to allow for easy content updates,
              and participated in optimizing the site for SEO. The project
              resulted in a streamlined user experience that has helped increase
              the company's online visibility and client engagement."
            </div>
          </div>
          <div className="flex space-x-6 mt-4 border border-red">
            <a
              href="https://github.com/datoche-juarez"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://beta.peaker.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400"
            >
              <HiOutlineExternalLink size={24} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:relative border border-blue">
          <Image
            src={getImageSrc("Peaker")}
            alt="Peaker Services, inc. project screenshot"
            className="object-cover w-full h-full md:absolute md:inset-0 md:min-h-full"
            layout={getImageLayout()}
            width={isMdUp && !isXlUp ? undefined : 500}
            height={isMdUp && !isXlUp ? undefined : 500}
          />
        </div>
      </div>

      <div className="flex flex-col-reverse gap-4 mt-8 md:mt-10 md:flex-row border border-red">
        <div className="w-full md:w-1/2 md:flex md:flex-col md:justify-between border border-blue">
          <div>
            <div className="text-2xl font-bold border border-red">
              Ping Software USA
            </div>
            <div className="mt-4 border border-red">
              <span className="font-bold">Role:</span> Full-Stack Developer
            </div>
            <div className="border border-red">
              <span className="font-bold">Technologies Used:</span> NextJS,
              TypeScript, Node.js, Chakra UI
            </div>
            <div className="border border-red">
              <span className="font-bold">Outcome:</span> "As one of two
              developers on the Ping Software USA website project, I played a
              key role in both frontend and backend development. I was
              responsible for implementing a responsive design using Chakra UI,
              ensuring a seamless user experience across devices. On the
              backend, I utilized serverless architecture, Nodemailer, and
              DynamoDB to develop the contact functionality, enabling efficient
              communication for their clients. Additionally, I designed the
              company logo, which is prominently featured on the website. This
              project highlighted my ability to deliver robust and user-friendly
              solutions, helping Ping Software USA present their services
              effectively to potential clients."
            </div>
          </div>
          <div className="flex space-x-6 mt-4 border border-red">
            <a
              href="https://github.com/datoche-juarez"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.pingsoftwareusa.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400"
            >
              <HiOutlineExternalLink size={24} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:relative border border-blue">
          <Image
            src={getImageSrc("Ping")}
            alt="Ping Software USA project screenshot"
            className="object-cover w-full h-full md:absolute md:inset-0 md:min-h-full"
            layout={getImageLayout()}
            width={isMdUp && !isXlUp ? undefined : 500}
            height={isMdUp && !isXlUp ? undefined : 500}
          />
        </div>
      </div>

      {/* Repeat for other projects, changing image paths and details accordingly */}
    </section>
  );
};

export default PortfolioSection;
