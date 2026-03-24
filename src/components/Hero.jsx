import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex min-h-[90vh] items-center px-6 pt-20 pb-10 md:min-h-screen"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
          Software Developer
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Building modern, responsive, and user-friendly web applications.
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          I’m Andres Paredes, a Software Developer focused on building modern web applications 
          using React, JavaScript, and .NET technologies.
        </p>

        <div className="mb-8 flex justify-center gap-6 text-2xl text-slate-300">
          <a
            href="https://github.com/aparedesp2003"
            target="_blank"
            className="transition hover:text-sky-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="transition hover:text-sky-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your-email@gmail.com"
            className="transition hover:text-sky-400"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-400"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;