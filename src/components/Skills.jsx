import { motion } from "framer-motion";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaDatabase,
  FaChartBar,
  FaVial,
  FaCodeBranch,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiVite,
  SiDotnet,
  SiMysql,
  SiPostman,
  SiNextdotjs,
  SiTypescript,
  SiSupabase,
  SiPostgresql,
  SiVercel,
  SiPandas,
  SiNumpy,
  SiScipy,
  SiScikitlearn,
  SiJest,
  SiTestinglibrary,
  SiVitest,
  SiPytest,
  SiGithubactions,
  SiDocker,
  SiSqlalchemy,
  SiDrizzle,
} from "react-icons/si";

import { VscAzure, VscAzureDevops } from "react-icons/vsc";

// Categories are ordered so card heights pair up evenly in both the
// 2-column (md) and 3-column (lg) grids.
// Fallback icons (no brand icon in react-icons): Power BI -> FaChartBar,
// Playwright -> FaVial, Neon -> FaDatabase, Alembic -> FaCodeBranch.
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Vite", icon: <SiVite /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Oracle SQL / PL-SQL", icon: <FaDatabase /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "SQLAlchemy", icon: <SiSqlalchemy /> },
      { name: "Alembic", icon: <FaCodeBranch /> },
      { name: "Drizzle ORM", icon: <SiDrizzle /> },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Azure DevOps", icon: <VscAzureDevops /> },
      { name: "Azure App Service", icon: <VscAzure /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Neon", icon: <FaDatabase /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
  {
    title: "Data & ML",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "SciPy", icon: <SiScipy /> },
      { name: "scikit-learn", icon: <SiScikitlearn /> },
      { name: "Power BI", icon: <FaChartBar /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "C#", icon: <SiDotnet /> },
      { name: "ASP.NET", icon: <SiDotnet /> },
      { name: "Java", icon: <FaJava /> },
    ],
  },
  {
    title: "Testing",
    skills: [
      { name: "Jest", icon: <SiJest /> },
      { name: "React Testing Library", icon: <SiTestinglibrary /> },
      { name: "Vitest", icon: <SiVitest /> },
      { name: "Playwright", icon: <FaVial /> },
      { name: "pytest", icon: <SiPytest /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-20 md:py-28">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Skills
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Technologies and tools I use to build modern web applications.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg"
            >
              <h3 className="mb-6 text-xl font-semibold text-white">
                {category.title}
              </h3>

              <div className="grid gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3 text-slate-300 transition hover:border-sky-400/30 hover:bg-sky-400/10 hover:text-sky-300"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-sm font-medium sm:text-base">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
