const NavBar = () => {
  return (
    <header className="sticky top-0 bg-white shadow">
      <nav className="container mx-auto p-4 flex justify-between">
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default NavBar;
