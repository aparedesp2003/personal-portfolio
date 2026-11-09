import profileImage from "../assets/LinkedInPicture 2.0.JPG";
import { motion } from "framer-motion";

const techStack = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Node.js",
  "Next.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Vitest",
  "Playwright",
  "Git",
  "GitHub",
  "GitHub Actions",
];

const About = () => {
  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            About Me
          </p>
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-4xl">
            A developer focused on building clean and practical web experiences.
          </h2>
        </div>

        <div className="grid gap-16 md:grid-cols-[320px_1fr] md:items-start">
          <div className="flex justify-center md:justify-start">
            <div className="rounded-3xl bg-white/5 p-3 shadow-xl">
              <img
                src={profileImage}
                alt="Andres Paredes"
                className="h-105 w-[320px] rounded-2xl object-cover transition duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div>
            <p className="mb-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I'm Andres Paredes, a Software Developer with a focus on front-end
              and full-stack development. I build responsive, user-focused
              applications that bring together clean design and practical
              functionality — with an eye toward experiences that feel modern,
              intuitive, and genuinely useful.
            </p>

            <p className="mb-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              My work spans React, TypeScript, Next.js, and Tailwind CSS, with
              hands-on experience integrating APIs and building end-to-end
              features. I'm constantly sharpening my skills through side
              projects that push both my technical depth and my ability to ship
              polished, production-ready UIs. Most recently I built and shipped
              Ninety, a live Champions League prediction product backed by a
              Python modelling pipeline and automated daily deployments.
            </p>

            <p className="mb-10 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              <span className="font-semibold text-sky-400">
                Currently learning:
              </span>{" "}
              CS50's Introduction to AI with Python (Harvard/edX) and AWS
              Certified AI Practitioner – Foundations.
            </p>

            <div>
              <h3 className="mb-5 text-xl font-semibold text-white">
                Tech Stack
              </h3>

              <div className="flex max-w-2xl flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-300 transition hover:bg-sky-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
