import Section from "@/components/Section";

export default function Home() {
  return (
    <main>
      <Section id="about">
        <div className="flex flex-col-reverse gap-6 border sm:gap-4 border-yellow sm:flex-row">
          <div className="w-full border border-red sm:w-1/2">
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
          <div className="w-full border border-blue h-[456px] sm:h-auto bg-gray-400 sm:w-1/2">
            This is where the image will go
          </div>
        </div>
      </Section>
      <Section id="skills">
        <h2 className="font-bold underline decoration-2 decoration-gray-400 underline-offset-[10px] text-h1">
          My Skills
        </h2>
        <p className="mt-8 md:mt-10">Add skills list here..</p>
      </Section>
      <Section id="portfolio">
        <h2 className="font-bold underline decoration-2 decoration-gray-400 underline-offset-[10px] text-h1">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 gap-4 mt-8 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 border">Project 1</div>
          <div className="p-4 border">Project 2</div>
          <div className="p-4 border">Project 3</div>
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
