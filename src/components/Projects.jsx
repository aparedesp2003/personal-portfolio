import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import weatherImage from "../assets/SkyPulse2.0.png";
import cultureCompassImage from "../assets/CultureCompass.png";
import twenituImage from "../assets/TwenituImage.png";
import taskFlowImage from "../assets/landing-page.png";
import ninetyImage from "../assets/ninety-home.webp";

const projects = [
  {
    title: "Ninety – Champions League Predictor",
    featured: true,
    description:
      "A live UEFA Champions League prediction site. Elo and Poisson models in Python, trained on 2,250+ matches since 2011-12, beat a uniform baseline by 14% on log loss in a walk-forward backtest of 753 unseen matches. A daily GitHub Actions pipeline ingests results, locks predictions before kick-off, runs a 10,000-season Monte Carlo simulation and refreshes the Next.js site on Vercel.",
    image: ninetyImage,
    alt: "Ninety home page showing the matchday's closest call with win, draw and loss probabilities",
    tech: [
      "Python",
      "pandas",
      "scikit-learn",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "GitHub Actions",
    ],
    liveLink: "https://ucl-predictor-red.vercel.app",
    githubLink: "https://github.com/aparedesp2003/ucl-predictor",
  },
  {
    title: "Weather App",
    description:
      "A responsive weather application that allows users to search cities, view current weather conditions, check a 5-day forecast, and use geolocation for local weather updates.",
    image: weatherImage,
    tech: ["React", "Vite", "Tailwind CSS", "OpenWeather API"],
    liveLink: "https://weather-website-project-4hcx.vercel.app/",
    githubLink: "https://github.com/aparedesp2003/Weather-Website-Project",
  },
  {
    title: "CultureCompass",
    description:
      "An interactive multicultural learning platform designed to help users explore different countries through engaging content and quizzes.",
    image: cultureCompassImage,
    tech: ["React", "JavaScript", "CSS", "MongoDB"],
    liveLink: "https://culturecompass-tau.vercel.app/",
    githubLink: "https://github.com/aparedesp2003/CultureCompass-Website",
  },
  {
    title: "TaskFlow",
    description:
      "A full-stack project and task management dashboard where users can create projects, organize tasks across workflow stages, track progress, and collaborate through shared project access.",
    image: taskFlowImage,
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "React",
      "Vercel",
    ],
    liveLink: "https://taskflow-kappa-six.vercel.app/",
    githubLink: "https://github.com/aparedesp2003/Taskflow",
  },
  {
    title: "Twenitu",
    description:
      "A modern business website showcasing digital construction and design services through a polished and visually engaging interface.",
    image: twenituImage,
    tech: ["React", "CSS", "JavaScript"],
    githubLink: "https://github.com/aparedesp2003/Project_Twenitu",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-20 md:py-28">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Projects
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            A selection of projects that I've built and worked on.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-sky-400/30 ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  project.featured ? "h-56 md:h-80 lg:h-96" : "h-56"
                }`}
              >
                {project.featured && (
                  <span className="absolute top-4 left-4 z-10 rounded-full border border-sky-400/40 bg-slate-950/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 backdrop-blur-sm">
                    Featured
                  </span>
                )}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.alt ?? project.title}
                    className="h-full w-full object-cover object-top transition duration-500 hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-sky-900/60 via-slate-800 to-slate-900">
                    <span className="text-2xl font-bold tracking-wide text-sky-300/70">
                      {project.title}
                    </span>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-black/20 opacity-0 transition hover:opacity-100"></div>
              </div>

              <div className="flex grow flex-col p-6">
                <h3 className="mb-3 text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mb-5 text-base leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-sm font-medium text-sky-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-full bg-sky-400 px-5 py-2.5 font-semibold text-slate-950 transition hover:scale-105"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-semibold text-white transition hover:border-sky-400 hover:text-sky-400"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
