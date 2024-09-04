import NavBar from "@/components/NavBar";
import HeroBannerImage from "@/assets/images/hero-placeholder.jpg";

const HeroBanner = () => {
  return (
    <header
      className="relative w-full mb-10 bg-center bg-no-repeat bg-cover md:mb-14"
      style={{ backgroundImage: `url(${HeroBannerImage.src})` }} // Placeholder path
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Logo and NavBar */}
        <div className="w-full mt-12 px-4 lg:px-[121px] xl:px-[121px] xl:max-w-screen-xl xl:mx-auto 2xl:px-0 2xl:max-w-screen-xl flex justify-between items-center">
          <NavBar />
        </div>

        {/* Headline, Introduction, and CTA */}
        <div className="mx-auto my-20 xl:my-28 text-left  w-full px-4 text-white lg:px-[121px] xl:px-[121px] xl:max-w-screen-xl xl:mx-auto 2xl:px-0 2xl:max-w-screen-xl">
          <div className="w-full md:w-3/4 xl:w-1/2">
            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              Building the Future, One Line of Code at a Time
            </h1>
            <p className="mt-6 text-lg md:text-xl">
              I'm Dan, a passionate web developer specializing in both frontend
              and backend development. With a strong foundation in modern
              technologies and a commitment to quality, I bring your digital
              ideas to life. Explore my portfolio and see how my skills can help
              elevate your next project.
            </p>

            <div className="flex flex-col justify-center gap-2 mt-6 xs:flex-row xs:gap-0 xs:justify-start xs:space-x-2 md:space-x-4">
              <a href="#portfolio">
                <button className="w-full py-2 text-black bg-white rounded xs:w-[200px] hover:bg-teal hover:text-white border border-white">
                  View My Portfolio
                </button>
              </a>
              <button className="w-full py-2 text-white border border-white rounded xs:w-[200px] hover:bg-teal">
                <a href="/DAJ_Resume.pdf" download>
                  Download My Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroBanner;
