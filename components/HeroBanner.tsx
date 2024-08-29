import NavBar from "@/components/NavBar";

const HeroBanner = () => {
  return (
    <header
      className="relative w-full  bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }} // Placeholder path
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col border border-red justify-between">
        {/* Logo and NavBar */}
        <div className=" w-full mt-12 px-4 lg:px-[121px] xl:px-[0px] xl:max-w-screen-xl xl:mx-auto border border-yellow flex justify-between items-center">
          {/* Logo Placeholder */}
          <div className="w-1/2 border border-pink">
            <div className="w-14 h-14 bg-gray-300"></div>
          </div>

          <div className="w-1/2 border border-blue">
            {/* NavBar */}
            <NavBar />
          </div>
        </div>

        {/* Headline, Introduction, and CTA */}
        <div className="container mx-auto my-12 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Building the Future, One Line of Code at a Time
          </h1>
          <p className="mt-6 text-lg md:text-xl">
            I'm Dan, a passionate web developer specializing in both frontend
            and backend development. With a strong foundation in modern
            technologies and a commitment to quality, I bring your digital ideas
            to life. Explore my portfolio and see how my skills can help elevate
            your next project.
          </p>

          <div className="mt-8 flex justify-center space-x-4">
            <button className="bg-white text-black py-2 px-6 rounded-md hover:bg-gray-200">
              View My Portfolio
            </button>
            <button className="bg-black text-white py-2 px-6 rounded-md border border-white hover:bg-gray-800">
              Download My Resume
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroBanner;
