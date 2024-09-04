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

  const getImageSrc = (
    project:
      | "Peaker"
      | "Ping"
      | "Marketocracy"
      | "NineOneOne"
      | "CordialShoppe"
      | "VinylShoppingList"
      | "DansBBQ"
      | "AlieNFT"
      | "RAA"
  ): StaticImageData => {
    if (isMdUp && !isXlUp) {
      switch (project) {
        case "Peaker":
          return PeakerImageSquare;
        case "Ping":
          return PingImageSquare;
        case "Marketocracy":
          return MarketocracyImageSquare;
        case "NineOneOne":
          return NineOneOneImageSquare;
        case "CordialShoppe":
          return CordialShoppeImageSquare;
        case "VinylShoppingList":
          return VinylShoppingListImageSquare;
        case "DansBBQ":
          return DansBBQImageSquare;
        case "AlieNFT":
          return AlieNFTImageSquare;
        default:
          return RAAImage; // RAA does not need a square image, same for all breakpoints
      }
    }
    switch (project) {
      case "Peaker":
        return PeakerImage;
      case "Ping":
        return PingImage;
      case "Marketocracy":
        return MarketocracyImage;
      case "NineOneOne":
        return NineOneOneImage;
      case "CordialShoppe":
        return CordialShoppeImage;
      case "VinylShoppingList":
        return VinylShoppingListImage;
      case "DansBBQ":
        return DansBBQImage;
      case "AlieNFT":
        return AlieNFTImage;
      default:
        return RAAImage; // RAA does not need a square image, same for all breakpoints
    }
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

      {/* Peaker Services */}
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
              <span className="font-bold">Outcome:</span> "As part of a small
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

      {/* Ping Software USA */}
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

      {/* Marketocracy.io */}
      <div className="flex flex-col-reverse gap-4 mt-8 md:mt-10 md:flex-row border border-red">
        <div className="w-full md:w-1/2 md:flex md:flex-col md:justify-between border border-blue">
          <div>
            <div className="text-2xl font-bold border border-red">
              Marketocracy.io
            </div>
            <div className="mt-4 border border-red">
              <span className="font-bold">Role:</span> Frontend Developer
            </div>
            <div className="border border-red">
              <span className="font-bold">Technologies Used:</span> React,
              Chakra UI
            </div>
            <div className="border border-red">
              <span className="font-bold">Outcome:</span> "Marketocracy.io is a
              platform that allows users to manage virtual portfolios in a
              simulated stock market environment, providing valuable insights
              and data for financial decision-making. In the Marketocracy.io
              project, I primarily focused on implementing their board game
              release and contest page. This involved creating a responsive and
              user-friendly interface while integrating Mailchimp to manage
              email subscriptions and contest entries. Additionally, I
              contributed to various frontend tasks across the site, ensuring
              consistency and a seamless user experience and was also involved
              in the planning for marketocracymasters.com, helping to align the
              projects' goals and technical strategies."
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
              href="https://www.marketocracy.io/"
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
            src={getImageSrc("Marketocracy")}
            alt="Marketocracy.io project screenshot"
            className="object-cover w-full h-full md:absolute md:inset-0 md:min-h-full"
            layout={getImageLayout()}
            width={isMdUp && !isXlUp ? undefined : 500}
            height={isMdUp && !isXlUp ? undefined : 500}
          />
        </div>
      </div>

      {/* 911 Ready */}
      <div className="flex flex-col-reverse gap-4 mt-8 md:mt-10 md:flex-row border border-red">
        <div className="w-full md:w-1/2 md:flex md:flex-col md:justify-between border border-blue">
          <div>
            <div className="text-2xl font-bold border border-red">
              911 Ready
            </div>
            <div className="mt-4 border border-red">
              <span className="font-bold">Role:</span> Full-Stack Developer
            </div>
            <div className="border border-red">
              <span className="font-bold">Technologies Used:</span> React,
              Node.js, DynamoDB
            </div>
            <div className="border border-red">
              <span className="font-bold">Outcome:</span> "911 Ready was a
              project aimed at creating a platform to improve emergency response
              times by providing first responders with critical information
              before they arrive on the scene. The platform was designed to
              equip first responders with essential details about household
              members with special needs, enabling them to act more quickly and
              efficiently. Working with a small team of developers, I
              contributed to both frontend and backend development, focusing on
              creating a scalable and secure application that could handle
              real-time data efficiently. Additionally, I was responsible for
              all HTML email development, ensuring that communication channels
              were reliable and effective."
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
              href="https://www.911ready.link/Homepage"
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
            src={getImageSrc("NineOneOne")}
            alt="911 Ready project screenshot"
            className="object-cover w-full h-full md:absolute md:inset-0 md:min-h-full"
            layout={getImageLayout()}
            width={isMdUp && !isXlUp ? undefined : 500}
            height={isMdUp && !isXlUp ? undefined : 500}
          />
        </div>
      </div>

      {/* Cordial Shoppe */}
      <div className="flex flex-col-reverse gap-4 mt-8 md:mt-10 md:flex-row border border-red">
        <div className="w-full md:w-1/2 md:flex md:flex-col md:justify-between border border-blue">
          <div>
            <div className="text-2xl font-bold border border-red">
              Cordial Shoppe
            </div>
            <div className="mt-4 border border-red">
              <span className="font-bold">Role:</span> Full-Stack Developer
            </div>
            <div className="border border-red">
              <span className="font-bold">Technologies Used:</span> React,
              Node.js, DynamoDB
            </div>
            <div className="border border-red">
              <span className="font-bold">Outcome:</span> "The Cordial Shoppe is
              a market and deli for which we developed a comprehensive website
              featuring full online ordering functionality. My contributions
              spanned everything from frontend development to backend work on
              the API, and database integration with DynamoDB. I played a key
              role in building the client dashboard and implementing payment
              processing using Authorize.net. Additionally, I helped integrate a
              ticket printer system for the cooks, ensuring seamless operations
              from online order to kitchen preparation. The project successfully
              delivered a streamlined and efficient online ordering system
              tailored to the client's unique needs."
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
              href="https://www.cordial-shoppe.com/index"
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
            src={getImageSrc("CordialShoppe")}
            alt="Cordial Shoppe project screenshot"
            className="object-cover w-full h-full md:absolute md:inset-0 md:min-h-full"
            layout={getImageLayout()}
            width={isMdUp && !isXlUp ? undefined : 500}
            height={isMdUp && !isXlUp ? undefined : 500}
          />
        </div>
      </div>

      {/* Raffles and Auctions */}
      <div className="flex flex-col-reverse gap-4 mt-8 md:mt-10 md:flex-row border border-red">
        <div className="w-full md:w-1/2 md:flex md:flex-col md:justify-between border border-blue">
          <div>
            <div className="text-2xl font-bold border border-red">
              Raffles and Auctions
            </div>
            <div className="mt-4 border border-red">
              <span className="font-bold">Role:</span> Full-Stack Developer
            </div>
            <div className="border border-red">
              <span className="font-bold">Technologies Used:</span> React,
              Node.js, DynamoDB
            </div>
            <div className="border border-red">
              <span className="font-bold">Outcome:</span> "Raffles and Auctions
              is a platform designed for managing online raffles and auctions
              for charities and other organizations. As one of the main
              developers on this project, I contributed to both frontend and
              backend development, implementing key features such as real-time
              bidding, secure user authentication, and real-time text and email
              notifications for bid updates. These features ensured a smooth and
              engaging user experience while also providing the necessary
              security and reliability for charitable events. The combination of
              React, Node.js, and DynamoDB allowed us to build a responsive,
              scalable platform that meets the unique needs of non-profit
              organizations."
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
              href="https://www.raalive.com/"
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
            src={getImageSrc("RAA")}
            alt="Raffles and Auctions project screenshot"
            className="object-cover w-full h-full md:absolute md:inset-0 md:min-h-full"
            layout={getImageLayout()}
            width={isMdUp && !isXlUp ? undefined : 500}
            height={isMdUp && !isXlUp ? undefined : 500}
          />
        </div>
      </div>

      {/* Vinyl Shopping List */}
      <div className="flex flex-col-reverse gap-4 mt-8 md:mt-10 md:flex-row border border-red">
        <div className="w-full md:w-1/2 md:flex md:flex-col md:justify-between border border-blue">
          <div>
            <div className="text-2xl font-bold border border-red">
              Vinyl Shopping List
            </div>
            <div className="mt-4 border border-red">
              <span className="font-bold">Role:</span> Frontend Developer
            </div>
            <div className="border border-red">
              <span className="font-bold">Technologies Used:</span> NextJS,
              Chakra UI
            </div>
            <div className="border border-red">
              <span className="font-bold">Outcome:</span> "Vinyl Shopping List
              is a personal project I developed to enhance my process of
              creating sample-based music, a hobby of mine. Utilizing the
              Spotify API, the application pulls data from my 'Songs to Sample'
              playlist, organizes it by album, and converts it into an
              interactive shopping list for vinyl records I plan to use in my
              music. The list updates dynamically based on records already
              purchased, providing an organized and efficient way to manage my
              vinyl collection. I focused on creating a clean and user-friendly
              interface that complements the creative process, seamlessly
              integrating the Spotify API with a responsive and visually
              appealing design."
            </div>
          </div>
          <div className="flex space-x-6 mt-4 border border-red">
            <a
              href="https://github.com/datoche-juarez/next-shopping-list"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:relative border border-blue">
          <Image
            src={getImageSrc("VinylShoppingList")}
            alt="Vinyl Shopping List project screenshot"
            className="object-cover w-full h-full md:absolute md:inset-0 md:min-h-full"
            layout={getImageLayout()}
            width={isMdUp && !isXlUp ? undefined : 500}
            height={isMdUp && !isXlUp ? undefined : 500}
          />
        </div>
      </div>

      {/* Dan's BBQ */}
      <div className="flex flex-col-reverse gap-4 mt-8 md:mt-10 md:flex-row border border-red">
        <div className="w-full md:w-1/2 md:flex md:flex-col md:justify-between border border-blue">
          <div>
            <div className="text-2xl font-bold border border-red">
              Dan's BBQ
            </div>
            <div className="mt-4 border border-red">
              <span className="font-bold">Role:</span> Application Developer
            </div>
            <div className="border border-red">
              <span className="font-bold">Technologies Used:</span> Java, JavaFX
            </div>
            <div className="border border-red">
              <span className="font-bold">Outcome:</span> "Dan's BBQ is a
              Java-based point of sale application I developed using Java and
              JavaFX. The application allows the restaurant to input menu items
              based on customer orders, automatically calculates the total
              price, and prints both an order receipt for the customer and a
              kitchen ticket for food preparation. While focused on streamlining
              order processing, the application also has the potential to assist
              in inventory management by providing detailed records of sales and
              ingredient usage. This project showcases my ability to create
              practical, efficient software solutions tailored to the needs of
              small businesses."
            </div>
          </div>
          <div className="flex space-x-6 mt-4 border border-red">
            <a
              href="https://github.com/datoche-juarez/dansBBQ"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:relative border border-blue">
          <Image
            src={getImageSrc("DansBBQ")}
            alt="Dan's BBQ project screenshot"
            className="object-cover w-full h-full md:absolute md:inset-0 md:min-h-full"
            layout={getImageLayout()}
            width={isMdUp && !isXlUp ? undefined : 500}
            height={isMdUp && !isXlUp ? undefined : 500}
          />
        </div>
      </div>

      {/* AlieNFT's */}
      <div className="flex flex-col-reverse gap-4 mt-8 md:mt-10 md:flex-row border border-red">
        <div className="w-full md:w-1/2 md:flex md:flex-col md:justify-between border border-blue">
          <div>
            <div className="text-2xl font-bold border border-red">
              AlieNFT's
            </div>
            <div className="mt-4 border border-red">
              <span className="font-bold">Role:</span> Designer/Blockchain
              Developer
            </div>
            <div className="border border-red">
              <span className="font-bold">Technologies Used:</span> Solidity,
              JavaScript, Adobe Illustrator, OpenSea
            </div>
            <div className="border border-red">
              <span className="font-bold">Outcome:</span> "AlieNFT's is an NFT
              project I developed in collaboration with two partners. We began
              by designing unique features for alien NFTs using Adobe
              Illustrator, and then used an open-source NFT random generator
              engine to create over 10,000 distinct NFTs. Additionally, we
              created 100 aliens as gifs, which were released as rare
              collectibles. I wrote the smart contracts in Solidity and deployed
              the NFTs to the Ethereum marketplace via OpenSea. This project
              demonstrates my ability to work at the intersection of design and
              blockchain technology, bringing creative digital assets to life in
              the rapidly evolving NFT space."
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
          </div>
        </div>
        <div className="w-full md:w-1/2 md:relative border border-blue">
          <Image
            src={getImageSrc("AlieNFT")}
            alt="AlieNFT's project screenshot"
            className="object-cover w-full h-full md:absolute md:inset-0 md:min-h-full"
            layout={getImageLayout()}
            width={isMdUp && !isXlUp ? undefined : 500}
            height={isMdUp && !isXlUp ? undefined : 500}
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
