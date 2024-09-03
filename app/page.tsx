import Section from "@/components/Section";
import IconMarquee from "@/components/IconMarquee";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Home() {
  return (
    <main>
      <Section id="about">
        <div className="flex flex-col-reverse gap-6 sm:gap-4 sm:flex-row">
          <div className="w-full sm:w-1/2">
            <h2 className="font-bold underline decoration-2 decoration-gray-400 underline-offset-[10px] text-h1">
              About Me
            </h2>
            <p className="mt-8 leading-6 md:mt-10 sm:leading-5 md:leading-6">
              My journey into web development began after a career change,
              leading me to earn a degree in Computer Information Systems. Since
              then, I've worked on a variety of projects, developing a diverse
              skill set that includes everything from frontend design to backend
              architecture. My passion for technology drives me to continuously
              learn and grow, ensuring that I stay at the forefront of the
              industry.
            </p>
            <p className="mt-4 leading-6 sm:leading-5 md:leading-6">
              With years of experience in web development, I've honed my skills
              in modern technologies like Next.js, Tailwind CSS, and TypeScript.
              My work is characterized by a keen attention to detail, a strong
              understanding of user experience, and a commitment to delivering
              high-quality, maintainable code. Whether I'm building a complex
              web application or a simple landing page, I approach each project
              with the same level of dedication and professionalism.
            </p>
          </div>
          <div
            className="flex items-center justify-center w-full sm:w-1/2"
            style={{ maxHeight: "100%" }}
          >
            <div className="flex items-center justify-center w-full h-full sm:h-auto sm:w-auto">
              <img
                src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="object-cover w-full h-full max-h-[420px]"
                alt="About me placeholder"
              />
            </div>
          </div>
        </div>
      </Section>
      <Section id="skills">
        <h2 className="font-bold underline decoration-2 decoration-gray-400 underline-offset-[10px] text-h1">
          My Skills
        </h2>
        <div className="mt-8 md:mt-10">
          <IconMarquee />
        </div>
        <div className="flex flex-col gap-4 mt-8 md:mt-10 md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="font-bold text-h3">Technical Skills</div>
            <div className="mt-4">
              <ul className="leading-8 list-disc list-inside ">
                <li>
                  <span className="font-bold">Languages:</span> JavaScript,
                  TypeScript, CSS, HTML
                </li>
                <li>
                  <span className="font-bold">Frameworks:</span> NextJS, React,
                  Tailwind CSS
                </li>
                <li>
                  <span className="font-bold">Tools:</span> Git, Figma, Strapi
                </li>
                <li>
                  <span className="font-bold">Backend:</span> Node.js, Strapi,
                  Supabase, AWS
                </li>
                <li>
                  <span className="font-bold">Databases:</span> DynamoDB, MySQL,
                  PostgreSQL, Microsoft SQL Server
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="font-bold text-h3">Soft Skills</div>
            <div className="mt-4 leading-6">
              Beyond technical proficiency, I bring strong problem-solving
              abilities, effective communication, and a collaborative mindset to
              every project. I believe that clear communication and teamwork are
              essential to the success of any project, and I strive to foster a
              positive, productive working environment.
            </div>
          </div>
        </div>
      </Section>
      <Section id="portfolio">
        <h2 className="font-bold underline decoration-2 decoration-gray-400 underline-offset-[10px] text-h1">
          My Portfolio
        </h2>
        <div className="flex flex-col-reverse gap-4 mt-8 md:mt-10 md:flex-row">
          <div className="border border-blue w-full sm:w-1/2">
            <div className="text-2xl font-bold border border-red">
              Peaker Services, inc.
            </div>
            <div className=" mt-4 border border-red">
              <span className="font-bold">Role:</span> Web Developer
            </div>
            <div className="border border-red ">
              <span className="font-bold">Technologies Used:</span> NextJS,
              Tailwind CSS, Strapi CMS
            </div>
            <div className="border border-red ">
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
            <div className="flex space-x-6 border border-red mt-4">
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
                <HiOutlineExternalLink size={24} />{" "}
              </a>
            </div>
          </div>
          <div className="border border-blue w-full sm:w-1/2">
            Image section goes here
          </div>
        </div>
        <div className="flex flex-col-reverse gap-4 mt-8 md:mt-10 md:flex-row">
          <div className="border border-blue w-full sm:w-1/2">
            <div className="text-2xl font-bold border border-red">
              Ping Software USA
            </div>
            <div className="border border-red mt-4">
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
            <div className="flex space-x-6 border border-red mt-4">
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
                <HiOutlineExternalLink size={24} />{" "}
              </a>
            </div>
          </div>
          <div className="border border-blue w-full sm:w-1/2">
            Image section goes here
          </div>
        </div>
        <div className="flex flex-col-reverse gap-4 mt-8 md:mt-10 md:flex-row">
          <div className="border border-blue w-full sm:w-1/2">
            <div className="text-2xl font-bold border border-red">
              Marketocracy.io
            </div>
            <div className="border border-red mt-4">
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
            <div className="flex space-x-6 border border-red mt-4">
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
                <HiOutlineExternalLink size={24} />{" "}
              </a>
            </div>
          </div>
          <div className="border border-blue w-full sm:w-1/2">
            Image section goes here
          </div>
        </div>
        <div className="flex flex-col-reverse gap-4 mt-8 md:mt-10 md:flex-row">
          <div className="border border-blue w-full sm:w-1/2">
            <div className="text-2xl font-bold border border-red">
              911 Ready
            </div>
            <div className="border border-red mt-4">
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
            <div className="flex space-x-6 border border-red mt-4">
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
                <HiOutlineExternalLink size={24} />{" "}
              </a>
            </div>
          </div>
          <div className="border border-blue w-full sm:w-1/2">
            Image section goes here
          </div>
        </div>
        <div className="flex flex-col-reverse gap-4 mt-8 md:mt-10 md:flex-row">
          <div className="border border-blue w-full sm:w-1/2">
            <div className="text-2xl font-bold border border-red">
              Cordial Shoppe
            </div>
            <div className="border border-red mt-4">
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
            <div className="flex space-x-6 border border-red mt-4">
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
                <HiOutlineExternalLink size={24} />{" "}
              </a>
            </div>
          </div>
          <div className="border border-blue w-full sm:w-1/2">
            Image section goes here
          </div>
        </div>
        <div className="flex flex-col-reverse gap-4 mt-8 md:mt-10 md:flex-row">
          <div className="border border-blue w-full sm:w-1/2">
            <div className="text-2xl font-bold border border-red">
              Raffles and Auctions
            </div>
            <div className="border border-red mt-4">
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
            <div className="flex space-x-6 border border-red mt-4">
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
                <HiOutlineExternalLink size={24} />{" "}
              </a>
            </div>
          </div>
          <div className="border border-blue w-full sm:w-1/2">
            Image section goes here
          </div>
        </div>
        <div className="flex flex-col-reverse gap-4 mt-8 md:mt-10 md:flex-row">
          <div className="border border-blue w-full sm:w-1/2">
            <div className="text-2xl font-bold border border-red">
              Vinyl Shopping List
            </div>
            <div className="border border-red mt-4">
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
            <div className="flex space-x-6 border border-red mt-4">
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
          <div className="border border-blue w-full sm:w-1/2">
            Image section goes here
          </div>
        </div>
        <div className="flex flex-col-reverse gap-4 mt-8 md:mt-10 md:flex-row">
          <div className="border border-blue w-full sm:w-1/2">
            <div className="text-2xl font-bold border border-red">
              Dan's BBQ
            </div>
            <div className="border border-red mt-4">
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
            <div className="flex space-x-6 border border-red mt-4">
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
          <div className="border border-blue w-full sm:w-1/2">
            Image section goes here
          </div>
        </div>
        <div className="flex flex-col-reverse gap-4 mt-8 md:mt-10 md:flex-row">
          <div className="border border-blue w-full sm:w-1/2">
            <div className="text-2xl font-bold border border-red">
              AlieNFT's
            </div>
            <div className="border border-red mt-4">
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
            <div className="flex space-x-6 border border-red mt-4">
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
          <div className="border border-blue w-full sm:w-1/2">
            Image section goes here
          </div>
        </div>
      </Section>
      <Section id="resume">
        <h2 className="font-bold underline decoration-2 decoration-gray-400 underline-offset-[10px] text-h1">
          Resume
        </h2>
        <ul className="mt-8 md:mt-10">
          <li className="mb-4">
            <strong>Job Title</strong> at Company - Duration
            <p>Brief description of your role and accomplishments.</p>
          </li>
        </ul>
      </Section>
      <Section id="contact">
        <h2 className="font-bold underline decoration-2 decoration-gray-400 underline-offset-[10px] text-h1">
          Contact
        </h2>
        <form className="mt-8 md:mt-10">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded"></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded"
          >
            Submit
          </button>
        </form>
      </Section>
    </main>
  );
}
