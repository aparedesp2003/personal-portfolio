import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let’s connect and build something great.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            I’m always open to discussing software opportunities, collaborations,
            and new projects. Feel free to reach out through the platforms below.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="mailto:aaparedesp@outlook.com"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-sky-400/30"
          >
            <div className="mb-4 flex justify-center text-3xl text-sky-400">
              <FaEnvelope />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Email</h3>
            <p className="text-slate-300">aaparedesp@outlook.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/andresparedesp/"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-sky-400/30"
          >
            <div className="mb-4 flex justify-center text-3xl text-sky-400">
              <FaLinkedin />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">LinkedIn</h3>
            <p className="text-slate-300">Connect professionally</p>
          </a>

          <a
            href="https://github.com/aparedesp2003"
            target="_blank"
            rel="noreferrer"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-sky-400/30"
          >
            <div className="mb-4 flex justify-center text-3xl text-sky-400">
              <FaGithub />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">GitHub</h3>
            <p className="text-slate-300">View my repositories</p>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;