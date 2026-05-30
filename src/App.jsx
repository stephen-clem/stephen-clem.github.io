import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import {
  FaAws,
  FaBicycle,
  FaDocker,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaPython,
  FaReact,
  FaRunning,
  FaSun,
  FaUtensils,
} from "react-icons/fa";
import {
  SiAngular,
  SiDjango,
  SiGo,
  SiKubernetes,
  SiPostgresql,
  SiRuby,
  SiRubyonrails,
  SiTypescript,
} from "react-icons/si";
import portfolioData from "./data/portfolio.json";
import "./App.css";

const photoCards = portfolioData.pictures;
const projects = portfolioData.projects;

const navItems = [
  ["Story", "#story"],
  ["Stack", "#stack"],
  ["Build", "#build"],
  ["Contact", "#contact"],
];


const skillStyles = {
  Python: { icon: FaPython, color: "from-cyan-300 to-emerald-300" },
  Django: { icon: SiDjango, color: "from-emerald-300 to-lime-300" },
  React: { icon: FaReact, color: "from-sky-300 to-cyan-300" },
  PostgreSQL: { icon: SiPostgresql, color: "from-blue-300 to-sky-300" },
  TypeScript: { icon: SiTypescript, color: "from-blue-300 to-cyan-300" },
  Docker: { icon: FaDocker, color: "from-cyan-300 to-blue-300" },
  Ruby: { icon: SiRuby, color: "from-rose-400 to-orange-300" },
  Rails: { icon: SiRubyonrails, color: "from-red-400 to-amber-300" },
  AWS: { icon: FaAws, color: "from-amber-300 to-orange-300" },
  Kubernetes: { icon: SiKubernetes, color: "from-sky-400 to-blue-300" },
  Go: { icon: SiGo, color: "from-teal-300 to-cyan-300" },
  Angular: { icon: SiAngular, color: "from-red-400 to-rose-300" },
};

const skills = portfolioData.skills.map((skill) => ({
  ...skill,
  ...(skillStyles[skill.name] || { icon: FaReact, color: "from-cyan-300 to-emerald-300" }),
}));

const bentoCards = [
  {
    title: "Make the backend boring, please",
    tag: "Rails / Django / Go",
    text: "I like APIs, data models, auth flows, and integrations that do their job without becoming everyone’s problem later.",
    className: "md:col-span-2 bg-cyan-300 text-slate-950",
  },
  {
    title: "Frontend should feel obvious",
    tag: "React / TS / Angular",
    text: "Give me clean states, clear flows, good spacing, and code the next person can actually follow.",
    className: "bg-amber-300 text-slate-950",
  },
  {
    title: "Ship it, then keep it alive",
    tag: "Docker / K8s / AWS",
    text: "Docker, Kubernetes, AWS, logs, deploys, and writing down the weird parts before they bite twice.",
    className: "bg-emerald-300 text-slate-950",
  },
  {
    title: "Not just laptop mode",
    tag: "Run / Bike / Eat",
    text: "Running, biking, trying food spots, and being around friends and family keep me from becoming a stale commit.",
    className: "md:col-span-2 bg-slate-100 text-slate-950",
  },
];

const links = [
  ["GitHub", "https://github.com/stephen-clem", FaGithub],
  ["LinkedIn", "https://www.linkedin.com/in/stephenclem/", FaLinkedin],
  ["Email", "mailto:stephenbclem@gmail.com?subject=Contact%20Me", FaEnvelope],
];

const lifeIcons = [
  ["Running", FaRunning],
  ["Biking", FaBicycle],
  ["Food hunts", FaUtensils],
];

function getInitialTheme() {
  if (typeof window === "undefined") return "dark";

  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function App() {
  const [activeCard, setActiveCard] = useState(0);
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === "dark";
  const topCard = photoCards[activeCard];
  const stackedCards = [1, 2].map((offset) => photoCards[(activeCard + offset) % photoCards.length]);

  const pullNextCard = () => setActiveCard((current) => (current + 1) % photoCards.length);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("theme", theme);
  }, [isDark, theme]);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveCard((current) => (current + 1) % photoCards.length);
    }, 10000);

    return () => window.clearInterval(rotation);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f3e7] text-slate-950 selection:bg-amber-300 selection:text-slate-950 transition-colors duration-500 dark:bg-[#07110f] dark:text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_8%_12%,rgba(34,211,238,0.22),transparent_28%),radial-gradient(circle_at_88%_8%,rgba(251,191,36,0.24),transparent_26%),radial-gradient(circle_at_80%_82%,rgba(52,211,153,0.2),transparent_30%)] dark:bg-[radial-gradient(circle_at_8%_12%,rgba(34,211,238,0.24),transparent_28%),radial-gradient(circle_at_88%_8%,rgba(251,191,36,0.22),transparent_26%),radial-gradient(circle_at_80%_82%,rgba(52,211,153,0.18),transparent_30%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(110deg,rgba(15,23,42,0.04)_0_1px,transparent_1px_26px),linear-gradient(20deg,rgba(15,23,42,0.025)_0_1px,transparent_1px_34px)] dark:bg-[linear-gradient(110deg,rgba(255,255,255,0.045)_0_1px,transparent_1px_26px),linear-gradient(20deg,rgba(255,255,255,0.025)_0_1px,transparent_1px_34px)]" />

      <header className="sticky top-0 z-50 border-b border-slate-950/10 bg-[#f8f3e7]/80 backdrop-blur-xl transition-colors duration-500 dark:border-white/10 dark:bg-[#07110f]/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#story" className="flex items-center gap-3" aria-label="Stephen Clem home">
            <img src="/favicon.svg" alt="SC logo" className="h-11 w-11 rounded-2xl ring-1 ring-slate-950/15 dark:ring-white/15" />
            <span className="hidden font-black tracking-tight sm:inline">Stephen Clem</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-700 dark:text-stone-300 md:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="transition hover:text-slate-950 dark:hover:text-white">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="grid h-10 w-10 place-items-center rounded-full border-2 border-slate-950 bg-white text-slate-950 shadow-[4px_4px_0_#000] transition hover:-translate-y-0.5"
              aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>
            <a
              href="mailto:stephenbclem@gmail.com?subject=Contact%20Me"
              className="rounded-full border-2 border-slate-950 bg-amber-300 px-4 py-2 text-sm font-black text-slate-950 shadow-[4px_4px_0_#000] transition hover:-translate-y-0.5 hover:bg-amber-200"
            >
              Say hey
            </a>
          </div>
        </div>
      </header>

      <section id="story" className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.06fr_0.94fr] lg:py-24">
        <div className="flex flex-col justify-center">
          <Motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 w-fit rotate-[-1deg] rounded-full border-2 border-slate-950 bg-cyan-200 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-cyan-950 shadow-[4px_4px_0_#000]"
          >
            Full-stack engineer, usually debugging something or planning food
          </Motion.p>

          <Motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.65 }}
            className="max-w-5xl text-6xl font-black leading-[0.86] tracking-[-0.085em] sm:text-8xl lg:text-9xl"
          >
            I build solid software and try to keep life fun.
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.65 }}
            className="mt-8 max-w-3xl text-xl leading-9 text-slate-700 dark:text-stone-200"
          >
            I like turning messy ideas into software that people can actually use.
            Ruby, Rails, Python, Django, React, TypeScript, Go, Docker,
            Kubernetes, AWS, and PostgreSQL are the tools I usually reach for.
            The goal is simple: make the thing work, make it clear, and avoid
            creating future chaos.
          </Motion.p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#stack"
              className="rounded-full bg-slate-950 px-7 py-4 text-center text-sm font-black text-white transition hover:-translate-y-1 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-100"
            >
              See what I use
            </a>
            <a
              href="https://github.com/stephen-clem"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-slate-950 bg-white px-7 py-4 text-center text-sm font-black text-slate-950 shadow-[5px_5px_0_#000] transition hover:-translate-y-1"
            >
              Poke around GitHub
            </a>
          </div>
        </div>

        <Motion.div
          initial={{ opacity: 0, rotate: 2, scale: 0.95 }}
          animate={{ opacity: 1, rotate: -1, scale: 1 }}
          transition={{ delay: 0.16, duration: 0.65 }}
          className="relative mx-auto flex w-full max-w-lg flex-col items-center lg:max-w-none"
        >
          <div className="relative h-[34rem] w-full max-w-md sm:h-[40rem]">
            {stackedCards.reverse().map((card, index) => (
              <Motion.div
                key={card.id}
                animate={{ rotate: index === 0 ? 6 : -6, y: index === 0 ? 20 : 38, scale: index === 0 ? 0.95 : 0.9 }}
                transition={{ type: "spring", stiffness: 170, damping: 28, mass: 0.8 }}
                className={`absolute inset-0 overflow-hidden rounded-[2.5rem] border-4 border-slate-950 bg-white p-3 shadow-[10px_10px_0_#000] transition-shadow duration-500 ${index === 0 ? "bg-amber-300" : "bg-cyan-300"}`}
              >
                <img src={card.image} alt="" className={`aspect-[4/5] w-full rounded-[1.75rem] object-cover ${card.position} opacity-60`} />
              </Motion.div>
            ))}

            <AnimatePresence mode="popLayout">
              <Motion.div
                key={topCard.id}
                initial={{ x: 130, rotate: 8, opacity: 0, scale: 0.96 }}
                animate={{ x: 0, rotate: -1, opacity: 1, scale: 1 }}
                exit={{ x: -150, rotate: -9, opacity: 0, scale: 0.96 }}
                transition={{ type: "spring", stiffness: 180, damping: 25, mass: 0.9 }}
                onClick={pullNextCard}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") pullNextCard();
                }}
                role="button"
                tabIndex={0}
                aria-label="Show next card"
                whileHover={{ y: -6, rotate: 0 }}
                whileTap={{ scale: 0.985 }}
                className="absolute inset-0 cursor-pointer overflow-hidden rounded-[2.5rem] border-4 border-slate-950 bg-white p-3 shadow-[14px_14px_0_#000] outline-none"
              >
                <img
                  src={topCard.image}
                  alt={topCard.title}
                  className={`aspect-[4/5] w-full rounded-[1.75rem] object-cover ${topCard.position} saturate-125`}
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={(event) => {
                    event.currentTarget.src = "/profile-placeholder.svg";
                  }}
                />
                <div className="absolute bottom-7 left-7 right-7 rounded-[1.5rem] border-2 border-slate-950 bg-lime-300 p-4 text-slate-950 shadow-[6px_6px_0_#000]">
                  <p className="text-xs font-black uppercase tracking-[0.22em]">{topCard.kicker}</p>
                  <p className="mt-1 text-2xl font-black tracking-tight">{topCard.title}</p>
                </div>
              </Motion.div>
            </AnimatePresence>
          </div>
        </Motion.div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {lifeIcons.map(([label, icon]) => {
            const LifeIcon = icon;

            return (
              <div key={label} className="group rounded-[2rem] border-2 border-slate-950 bg-white p-6 text-slate-950 shadow-[7px_7px_0_#000] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_#000]">
                <LifeIcon className="text-4xl text-cyan-700 transition group-hover:rotate-6" />
                <p className="mt-8 text-2xl font-black">{label}</p>
                <p className="mt-2 text-slate-600">Part of the routine when I am not staring at code.</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="stack" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-800 dark:text-cyan-200">Stack Meter</p>
            <h2 className="mt-3 text-5xl font-black tracking-[-0.065em] sm:text-7xl">The stuff I reach for.</h2>
          </div>
          <p className="max-w-xl text-slate-600 dark:text-stone-300">
            These levels live in `src/data/portfolio.json`, so they are easy to adjust without digging through the page.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const SkillIcon = skill.icon;

            return (
              <Motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.025, duration: 0.45 }}
                className="rounded-[1.75rem] border-2 border-slate-950 bg-white p-5 text-slate-950 shadow-[7px_7px_0_#000] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_#000]"
              >
                <div className="flex items-start justify-between gap-4">
                  <SkillIcon className="text-3xl text-cyan-700" />
                  <span className="rounded-full border-2 border-slate-950 bg-amber-300 px-3 py-1 text-xs font-black text-slate-950">{skill.level}%</span>
                </div>
                <p className="mt-8 text-xl font-black">{skill.name}</p>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200 ring-1 ring-slate-950/10">
                  <Motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    aria-label={`${skill.name} skill level ${skill.level} percent`}
                  />
                </div>
              </Motion.div>
            );
          })}
        </div>
      </section>

      <section id="build" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-amber-700 dark:text-amber-200">Build Style</p>
          <h2 className="mt-3 text-5xl font-black tracking-[-0.065em] sm:text-7xl">I like useful software with a little personality.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {bentoCards.map((card) => (
            <article key={card.title} className={`rounded-[2rem] border-2 border-slate-950 p-7 shadow-[8px_8px_0_#000] transition hover:-translate-y-1 hover:shadow-[11px_11px_0_#000] ${card.className}`}>
              <p className="text-xs font-black uppercase tracking-[0.25em] opacity-70">{card.tag}</p>
              <h3 className="mt-5 text-3xl font-black tracking-[-0.045em]">{card.title}</h3>
              <p className="mt-4 text-lg leading-8 opacity-80">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border-4 border-slate-950 bg-white p-8 text-slate-950 shadow-[12px_12px_0_#000] transition-colors duration-500 dark:bg-slate-100 sm:p-12">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-800">Projects</p>
            <h2 className="mt-3 text-5xl font-black tracking-[-0.065em]">Project shelf, currently with placeholders.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              These dummy projects live in `src/data/portfolio.json`. Swap the names, links, tech, and descriptions when the real ones are ready.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.name} className="rounded-[1.75rem] border-2 border-slate-950 bg-white p-6 shadow-[7px_7px_0_#000] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_#000]">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black tracking-[-0.04em]">{project.name}</h3>
                  <span className="shrink-0 rounded-full bg-amber-300 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]">
                    {project.status}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-slate-700">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border-2 border-slate-950 bg-cyan-100 px-3 py-1 text-xs font-black text-cyan-950">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex font-black text-slate-950 underline decoration-amber-300 decoration-4 underline-offset-4"
                >
                  Check it out
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="relative mx-auto flex max-w-7xl flex-col gap-8 border-t border-slate-950/10 px-5 py-12 sm:px-8 dark:border-white/10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-2xl font-black">Stephen Clem</p>
          <p className="mt-2 text-slate-600 dark:text-stone-400">Full-stack engineer. Runner. Biker. Always down for a good food spot.</p>
        </div>
        <div className="flex gap-3">
          {links.map(([label, href, icon]) => {
            const LinkIcon = icon;

            return (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="grid h-12 w-12 place-items-center rounded-full border-2 border-slate-950 bg-white text-slate-700 shadow-[4px_4px_0_#000] transition hover:-translate-y-1 hover:bg-amber-300 hover:text-slate-950"
                aria-label={label}
              >
                <LinkIcon />
              </a>
            );
          })}
        </div>
      </footer>
    </main>
  );
}
