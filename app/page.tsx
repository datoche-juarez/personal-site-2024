import Section from "@/components/Section";

export default function Home() {
  return (
    <main>
      <Section id="about">
        <h2 className="text-3xl font-bold">About</h2>
        <p className="mt-4">
          I'm a web developer with over three years of experience in both
          frontend and backend development...
        </p>
      </Section>
      <Section id="skills">
        <h2 className="text-3xl font-bold">My Skills</h2>
        <p className="mt-4">Add skills list here..</p>
      </Section>
      <Section id="portfolio">
        <h2 className="text-3xl font-bold">Portfolio</h2>
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4 border">Project 1</div>
          <div className="p-4 border">Project 2</div>
          <div className="p-4 border">Project 3</div>
        </div>
      </Section>
      <Section id="resume">
        <h2 className="text-3xl font-bold">Resume</h2>
        <ul className="mt-4">
          <li className="mb-4">
            <strong>Job Title</strong> at Company - Duration
            <p>Brief description of your role and accomplishments.</p>
          </li>
        </ul>
      </Section>
      <Section id="contact">
        <h2 className="text-3xl font-bold">Contact</h2>
        <form className="mt-4">
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
