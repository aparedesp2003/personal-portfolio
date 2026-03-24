import resumeFile from "../assets/Andres_Paredes_BMO_Full_Stack_Engineer_Resume.pdf";
import { FaFileAlt, FaDownload, FaEye } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Resume
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            View or download my resume.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Here you can access my latest resume to review my background,
            technical skills, and project experience.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-lg">
          <div className="mb-6 flex justify-center text-sky-400">
            <FaFileAlt className="text-6xl" />
          </div>

          <h3 className="mb-4 text-2xl font-semibold text-white">
            Andres Paredes Resume
          </h3>

          <p className="mx-auto mb-8 max-w-2xl text-slate-300">
            Download the PDF version of my resume or open it in a new tab for
            quick viewing.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={resumeFile}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
            >
              <FaEye />
              View Resume
            </a>

            <a
              href={resumeFile}
              download="Andres-Paredes-Resume.pdf"
              className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-sky-400 hover:text-sky-400"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;