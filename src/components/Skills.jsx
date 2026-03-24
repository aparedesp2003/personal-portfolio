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
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiVite,
  SiDotnet,
  SiMysql,
  SiPostman,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Vite", icon: <SiVite /> },
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
      { name: "Python", icon: <FaPython /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Oracle SQL / PL-SQL", icon: <FaDatabase /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Skills
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Technologies and tools I use to build modern web applications.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
      </div>
    </section>
  );
};

export default Skills;