const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1120]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-xl font-bold tracking-wide text-white transition hover:text-sky-400"
        >
          Andres Paredes
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <li>
            <a href="#about" className="transition hover:text-sky-400">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="transition hover:text-sky-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="transition hover:text-sky-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#resume" className="transition hover:text-sky-400">
              Resume
            </a>
          </li>
          <li>
            <a href="#contact" className="transition hover:text-sky-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;