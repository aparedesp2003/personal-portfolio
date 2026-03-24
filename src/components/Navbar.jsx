import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1120]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          onClick={handleLinkClick}
          className="text-xl font-bold tracking-wide text-white transition hover:text-sky-400"
        >
          Andres Paredes
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="transition hover:text-sky-400">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="text-2xl text-white transition hover:text-sky-400 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border-t border-white/10 bg-[#0B1120] md:hidden"
          >
            <ul className="flex flex-col px-6 py-4 text-slate-300">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="border-b border-white/5 last:border-b-0"
                >
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block py-4 text-sm font-medium transition hover:text-sky-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;