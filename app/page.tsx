import Section from "@/components/Section/Section";
import IconMarquee from "@/components/IconMarquee/IconMarquee";
import PortfolioSection from "@/components/PortfolioSection/PortfolioSection";
import ContactForm from "@/components/ContactForm/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Section id="about">
        <div className="flex flex-col-reverse gap-6 sm:gap-4 sm:flex-row">
          <div className="w-full sm:w-1/2">
            <h2 className="font-bold underline decoration-2 decoration-columbiablue underline-offset-[10px] text-h1">
              About Me
            </h2>
            <p className="mt-8 leading-6 md:mt-10 sm:leading-5 md:leading-6">
              My journey into web development began after a career change,
              leading me to earn a degree in Computer Information Systems. Since
              then, I&#39;ve worked on a variety of projects, developing a
              diverse skill set that includes everything from frontend design to
              backend architecture. My passion for technology drives me to
              continuously learn and grow, ensuring that I stay at the forefront
              of the industry.
            </p>
            <p className="mt-4 leading-6 sm:leading-5 md:leading-6">
              With years of experience in web development, I&#39;ve honed my
              skills in modern technologies like Next.js, Tailwind CSS, and
              TypeScript. My work is characterized by a keen attention to
              detail, a strong understanding of user experience, and a
              commitment to delivering high-quality, maintainable code. Whether
              I&#39;m building a complex web application or a simple landing
              page, I approach each project with the same level of dedication
              and professionalism.
            </p>
          </div>
          <div
            className="flex items-center justify-center w-full sm:w-1/2"
            style={{ maxHeight: "100%" }}
          >
            <div className="relative flex items-center justify-center w-full h-full sm:h-auto sm:w-auto">
              <Image
                src="https://sdk.bitmoji.com/me/sticker/5_868ETNG03VgZJIAxzt5yATyVeig0bGqzyNqTVZDdc70Q2udYIwTQ/20054902.png?p=dD1zO2w9ZW4.v1&size=large"
                alt="About me placeholder"
                width={3464}
                height={2309}
                className="object-cover w-full h-full max-h-[420px]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Section>
      <Section id="skills">
        <h2 className="font-bold underline decoration-2 decoration-columbiablue underline-offset-[10px] text-h1">
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
        <PortfolioSection />
      </Section>
      <Section id="resume">
        <h2 className="font-bold underline decoration-2 decoration-columbiablue underline-offset-[10px] text-h1">
          My Resume
        </h2>
        <div className="flex flex-col gap-4 mt-8 md:mt-10 md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="font-bold text-h3">Experience</div>
            <div className="mt-4">
              <ul className="leading-6 list-disc list-outside pl-3.5">
                <li className="pl-2">
                  <span className="font-bold">Peaker Services, inc.</span>{" "}
                  (Contractor, September 2023 - June 2024): "Web Developer
                  responsible for redesigning and maintaining the company&#39;s
                  website, improving user experience, and optimizing the site
                  for SEO."
                </li>
                <li className="pl-2">
                  <span className="font-bold">DAJ Tech Solutions</span> (October
                  2023 - Present): "Independent projects involving web
                  development, consulting, and technology solutions for a
                  variety of clients."
                </li>
                <li className="pl-2">
                  <span className="font-bold">Ping Software USA</span> (January
                  2021 - October 2023): "Full-Stack Developer contributing to
                  the development of custom web applications and ensuring smooth
                  project delivery."
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="font-bold text-h3">Education</div>
            <div className="leading-6 mt-4">
              <div className="">
                <span className="font-bold">
                  Associate in Art: Liberal Arts
                </span>{" "}
                (May 2021 - December 2022)
              </div>
              <div className="font-bold">Honors and Awards</div>
              <ul className="list-disc list-inside">
                <li>Dean’s List for every semester</li>
                <li className="">Graduated Summa Cum Laude</li>
              </ul>
              <div className="">
                <span className="font-bold">
                  Associate in Applied Science: Computer Information Systems
                </span>{" "}
                (August 2017 - May 2021)
              </div>
              <div className="font-bold">Honors and Awards</div>
              <ul className="list-disc list-inside">
                <li>HFC Honors Program graduate</li>
                <li>Dean’s List for every semester</li>
                <li className="">Graduated Summa Cum Laude</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <button className="w-full xs:w-[200px] hover:bg-softcoral  py-2 bg-night text-white text-base rounded hover:shadow-2xl hover:drop-shadow-lg">
            <a href="/DAJ_Resume.pdf" download>
              Download My Resume
            </a>
          </button>
        </div>
      </Section>
      <Section id="contact">
        <h2 className="font-bold underline decoration-2 decoration-columbiablue underline-offset-[10px] text-h1">
          Contact
        </h2>
        <div className="text-lg mt-8 md:mt-10">
          Have a question or want to discuss a potential project? Fill out the
          form below and I&#39;ll get back to you as soon as possible.
        </div>
        <ContactForm />
        <div className="text-lg mt-8 md:mt-10">
          Prefer to reach out directly? You can contact me via email at{" "}
          <a
            href="mailto:dtoch123@gmail.com"
            className="text-softcoral hover:underline"
          >
            dtoch123@gmail.com{" "}
          </a>
          or connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/daniel-atoche-juarez-7272a3233/"
            target="_blank"
            rel="noreferrer"
            className="text-softcoral hover:underline"
          >
            LinkedIn
          </a>
          .
        </div>
        <div className="mt-6 text-lg">
          Check out my{" "}
          <a
            href="https://github.com/datoche-juarez"
            target="_blank"
            rel="noreferrer"
            className="text-softcoral hover:underline"
          >
            GitHub
          </a>{" "}
          for more projects and examples of my work.
        </div>
      </Section>
    </main>
  );
}
