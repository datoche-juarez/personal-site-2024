const NavBar = () => {
  return (
    <header className="">
      <nav className="border border-purple gap-4 py-4 text-lg text-white flex justify-between">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default NavBar;
