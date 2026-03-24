import profileImage from "../assets/LinkedInPicture 2.0.JPG";

const techStack = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "GitHub",
];

const About = () => {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            About Me
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            A developer focused on building clean and practical web experiences.
          </h2>
        </div>

        <div className="grid gap-16 md:grid-cols-[320px_1fr] md:items-start">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="rounded-3xl bg-white/5 p-3 shadow-xl">
              <img
                src={profileImage}
                alt="Andres Paredes"
                className="h-105 w-[320px] rounded-2xl object-cover transition duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* About Text */}
          <div>
            <p className="mb-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I’m Andres Paredes, a Software Developer with a strong interest in
              front-end and full-stack development. I enjoy building responsive,
              user-focused applications that combine clean design with practical
              functionality. My goal is to create digital experiences that are
              modern, intuitive, and useful in real-world scenarios.
            </p>

            <p className="mb-10 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I have worked on projects involving React, JavaScript, APIs,
              responsive design, and modern UI development. I’m continuously
              improving my skills by building projects that strengthen both my
              technical foundation and my ability to deliver polished user
              experiences.
            </p>

            {/* Tech Stack */}
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
      </div>
    </section>
  );
};

export default About;