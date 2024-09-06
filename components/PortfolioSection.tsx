"use client";
import React, { useState } from "react";
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

  const [showMore, setShowMore] = useState(false);

  const getImageSrc = (imageKey: string): StaticImageData => {
    if (isMdUp && !isXlUp) {
      switch (imageKey) {
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
          return RAAImage;
      }
    }
    switch (imageKey) {
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
        return RAAImage;
    }
  };

  const getImageLayout = (): "fill" | "responsive" => {
    return isMdUp && !isXlUp ? "fill" : "responsive";
  };

  const projectList = [
    {
      title: "Peaker Services, inc.",
      imageKey: "Peaker",
      role: "Web Developer",
      technologies: "NextJS, Tailwind CSS, Strapi CMS",
      outcome:
        "As part of a small team of developers, I contributed to the development of a fully responsive and modern website for Peaker Services Inc. My role encompassed both frontend development and design work, ensuring that the user interface was intuitive, visually appealing, and aligned with the overall design specifications. I also collaborated with the team to integrate a powerful content management system (Strapi CMS) to allow for easy content updates, and participated in optimizing the site for SEO. The project resulted in a streamlined user experience that has helped increase the company's online visibility and client engagement.",
      link: "https://www.peaker.com",
      githubLink: "https://github.com/datoche-juarez",
    },
    {
      title: "Ping Software USA",
      imageKey: "Ping",
      role: "Full-Stack Developer",
      technologies: "NextJS, TypeScript, Node.js, Chakra UI",
      outcome:
        "As one of two developers on the Ping Software USA website project, I played a key role in both frontend and backend development. I was responsible for implementing a responsive design using Chakra UI, ensuring a seamless user experience across devices. On the backend, I utilized serverless architecture, Nodemailer, and DynamoDB to develop the contact functionality, enabling efficient communication for their clients. Additionally, I designed the company logo, which is prominently featured on the website. This project highlighted my ability to deliver robust and user-friendly solutions, helping Ping Software USA present their services effectively to potential clients.",
      link: "https://www.pingsoftwareusa.com/",
      githubLink: "https://github.com/datoche-juarez",
    },
    {
      title: "Marketocracy.io",
      imageKey: "Marketocracy",
      role: "Frontend Developer",
      technologies: "React, Chakra UI",
      outcome:
        "Marketocracy.io is a platform that allows users to manage virtual portfolios in a simulated stock market environment, providing valuable insights and data for financial decision-making. In the Marketocracy.io project, I primarily focused on implementing their board game release and contest page. This involved creating a responsive and user-friendly interface while integrating Mailchimp to manage email subscriptions and contest entries. Additionally, I contributed to various frontend tasks across the site, ensuring consistency and a seamless user experience and was also involved in the planning for marketocracymasters.com, helping to align the projects' goals and technical strategies.",
      link: "https://www.marketocracy.io/",
      githubLink: "https://github.com/datoche-juarez",
    },
    {
      title: "911 Ready",
      imageKey: "NineOneOne",
      role: "Full-Stack Developer",
      technologies: "React, Node.js, DynamoDB",
      outcome:
        "911 Ready was a project aimed at creating a platform to improve emergency response times by providing first responders with critical information before they arrive on the scene. The platform was designed to equip first responders with essential details about household members with special needs, enabling them to act more quickly and efficiently. Working with a small team of developers, I contributed to both frontend and backend development, focusing on creating a scalable and secure application that could handle real-time data efficiently. Additionally, I was responsible for all HTML email development, ensuring that communication channels were reliable and effective.",
      link: "https://www.911ready.link/Homepage",
      githubLink: "https://github.com/datoche-juarez",
    },
    {
      title: "The Cordial Shoppe",
      imageKey: "CordialShoppe",
      role: "Full-Stack Developer",
      technologies: "React, Node.js, DynamoDB",
      outcome:
        "The Cordial Shoppe is a market and deli for which we developed a comprehensive website featuring full online ordering functionality. My contributions spanned everything from frontend development to backend work on the API, and database integration with DynamoDB. I played a key role in building the client dashboard and implementing payment processing using Authorize.net. Additionally, I helped integrate a ticket printer system for the cooks, ensuring seamless operations from online order to kitchen preparation. The project successfully delivered a streamlined and efficient online ordering system tailored to the client's unique needs.",
      link: "https://www.cordial-shoppe.com/index",
      githubLink: "https://github.com/datoche-juarez",
    },
    {
      title: "Raffles and Auctions",
      imageKey: "RAA",
      role: "Full-Stack Developer",
      technologies: "React, Node.js, DynamoDB",
      outcome:
        "Raffles and Auctions is a platform designed for managing online raffles and auctions for charities and other organizations. As one of the main developers on this project, I contributed to both frontend and backend development, implementing key features such as real-time bidding, secure user authentication, and real-time text and email notifications for bid updates. These features ensured a smooth and engaging user experience, while also providing the necessary security and reliability for charitable events. The combination of React, Node.js, and DynamoDB allowed us to build a responsive and scalable platform that meets the unique needs of non-profit organizations.",
      link: "https://www.raalive.com/",
      githubLink: "https://github.com/datoche-juarez",
    },
    {
      title: "Vinyl Shopping List",
      imageKey: "VinylShoppingList",
      role: "Frontend Developer",
      technologies: "NextJS, Chakra UI",
      outcome:
        "Vinyl Shopping List is a personal project I developed to enhance my process of creating sample-based music, a hobby of mine. Utilizing the Spotify API, the application pulls data from my 'Songs to Sample' playlist, organizes it by album, and converts it into an interactive shopping list for vinyl records I plan to use in my music. The list updates dynamically based on records already purchased, providing an organized and efficient way to manage my vinyl collection. I focused on creating a clean and user-friendly interface that complements the creative process, seamlessly integrating the Spotify API with a responsive and visually appealing design.",
      githubLink: "https://github.com/datoche-juarez/next-shopping-list",
    },
    {
      title: "Dan's BBQ",
      imageKey: "DansBBQ",
      role: "Application Developer",
      technologies: "Java, JavaFX",
      outcome:
        "Dan's BBQ is a Java-based point of sale application I developed using Java and JavaFX. The application allows the restaurant to input menu items based on customer orders, automatically calculates the total price, and prints both an order receipt for the customer and a kitchen ticket for food preparation. While focused on streamlining order processing, the application also has the potential to assist in inventory management by providing detailed records of sales and ingredient usage. This project showcases my ability to create practical, efficient software solutions tailored to the needs of small businesses.",
      githubLink: "https://github.com/datoche-juarez/dansBBQ",
    },
    {
      title: "AlieNFT",
      imageKey: "AlieNFT",
      role: "Designer/Blockchain Developer",
      technologies: "Solidity, JavaScript, Adobe Illustrator, OpenSea",
      outcome:
        "AlieNFT's is an NFT project I developed in collaboration with two partners. We began by designing unique features for alien NFTs using Adobe Illustrator, and then used an open-source NFT random generator engine to create over 10,000 distinct NFTs. Additionally, we created 100 aliens as gifs, which were released as rare collectibles. I wrote the smart contracts in Solidity and deployed the NFTs to the Ethereum marketplace via OpenSea. This project demonstrates my ability to work at the intersection of design and blockchain technology, bringing creative digital assets to life in the rapidly evolving NFT space.",
      link: "https://testnets.opensea.io/collection/alienfts",
      githubLink: "https://github.com/datoche-juarez",
    },
  ];

  const visibleProjects = showMore ? projectList : projectList.slice(0, 5);

  return (
    <section id="portfolio">
      <h2 className="font-bold underline decoration-2 decoration-gray-400 underline-offset-[10px] text-h1">
        My Portfolio
      </h2>

      {visibleProjects.map((project) => (
        <div
          key={project.title}
          className="flex flex-col-reverse gap-4 mt-8 md:mt-10 md:flex-row"
        >
          <div className="w-full md:w-1/2 flex flex-col justify-between flex-1">
            <div>
              <div className="text-2xl font-bold">{project.title}</div>
              <div className="mt-4">
                <span className="font-bold">Role:</span> {project.role}
              </div>
              <div>
                <span className="font-bold">Technologies Used:</span>{" "}
                {project.technologies}
              </div>
              <div>
                <span className="font-bold">Outcome:</span> {project.outcome}
              </div>
            </div>
            <div className="flex space-x-6 mt-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="hover:text-teal"
              >
                <FaGithub size={24} />
              </a>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-teal"
                >
                  <HiOutlineExternalLink size={24} />
                </a>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2 md:relative flex-1">
            <div className="relative w-full min-h-[300px] md:h-full">
              <Image
                src={getImageSrc(project.imageKey)}
                alt={`${project.title} project screenshot`}
                className="object-cover"
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                priority={project.title === "Peaker Services, inc."}
              />
            </div>
          </div>
        </div>
      ))}

      <div className="text-center mt-12">
        <button
          onClick={() => setShowMore(!showMore)}
          className="w-full xs:w-[200px] hover:bg-teal py-2 bg-black text-white rounded"
        >
          {showMore ? "View Less" : "View More Projects"}
        </button>
      </div>
    </section>
  );
};

export default PortfolioSection;
