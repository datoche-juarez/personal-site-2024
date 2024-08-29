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
      <Section id="portfolio">
        <h2 className="text-3xl font-bold">Portfolio</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border p-4">Project 1</div>
          <div className="border p-4">Project 2</div>
          <div className="border p-4">Project 3</div>
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
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </Section>
    </main>
  );
}
