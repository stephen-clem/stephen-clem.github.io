// src/App.jsx
import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./App.css";

// Project data (currently no public side projects; keeping previous examples commented for future use)
/*
const exampleProjects = [
  {
    name: "VendyLink",
    desc: "A full-stack Django + Vue app for quick vendor ordering, Dockerized with PostgreSQL.",
    tech: "Django · Vue.js · Docker · PostgreSQL",
    link: "https://github.com/yourusername/vendylink",
  },
  {
    name: "CreatorProfile Sync",
    desc: "Service syncing creator data from TikTok, Instagram, and YouTube into a unified model.",
    tech: "Python · Django · API Integration",
    link: "https://github.com/yourusername/creatorprofile-sync",
  },
  {
    name: "Campaign Contract Templates",
    desc: "Dynamic campaign template selection and synchronization for marketing automation.",
    tech: "Django REST · React · PostgreSQL",
    link: "https://github.com/yourusername/campaign-contracts",
  },
];
*/
const projects = [];

// Skill groups with proficiency levels (0-100)
const skillGroups = [
  {
    title: 'Languages',
    accent: 'from-violet-500/15 to-fuchsia-500/15',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'TypeScript', level: 78 },
      { name: 'JavaScript', level: 82 },
      { name: 'Ruby', level: 68 },
      { name: 'SQL', level: 75 },
    ],
  },
  {
    title: 'Frameworks',
    accent: 'from-fuchsia-500/15 to-violet-500/15',
    skills: [
      { name: 'Django', level: 90 },
      { name: 'FastAPI', level: 70 },
      { name: 'React', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Framer Motion', level: 60 },
    ],
  },
  {
    title: 'Data & Infra',
    accent: 'from-violet-500/15 to-indigo-500/15',
    skills: [
      { name: 'PostgreSQL', level: 78 },
      { name: 'Redis', level: 72 },
      { name: 'Docker', level: 76 },
      { name: 'Celery', level: 65 },
      { name: 'GitHub Actions', level: 70 },
    ],
  },
  {
    title: 'Architecture',
    accent: 'from-indigo-500/15 to-fuchsia-500/15',
    skills: [
      { name: 'APIs', level: 88 },
      { name: 'Integrations', level: 84 },
      { name: 'Event Flows', level: 70 },
      { name: 'Caching', level: 74 },
      { name: 'Auth', level: 69 },
    ],
  },
  {
    title: 'Quality',
    accent: 'from-fuchsia-500/15 to-violet-500/15',
    skills: [
      { name: 'Testing', level: 86 },
      { name: 'Type Checking', level: 72 },
      { name: 'Observability', level: 68 },
      { name: 'CI/CD', level: 75 },
      { name: 'Linting', level: 80 },
    ],
  },
  {
    title: 'Practices',
    accent: 'from-violet-500/15 to-fuchsia-500/15',
    skills: [
      { name: 'Refactoring', level: 88 },
      { name: 'Performance', level: 77 },
      { name: 'DX Focus', level: 72 },
      { name: 'Documentation', level: 70 },
      { name: 'Mentorship', level: 66 },
    ],
  },
];

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("theme") || "light";
  });
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  // Local hero image
  const portraitUrl = "/hero_image.jpg";

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);


  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  // styleMode removed

  return (
  <div className="min-h-screen font-sans flex flex-col transition-colors duration-300 bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-200">
      {/* Header */}
      <header className="w-full border-b border-violet-100 dark:border-slate-800/70 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-950/60 sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-6">
          <a href="#about" className="text-xl sm:text-2xl font-bold tracking-tight text-violet-700 dark:text-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 rounded">
            Stephen Clem
          </a>
          <nav className="hidden sm:flex gap-6 text-sm font-medium">
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="relative text-slate-600 dark:text-slate-300 hover:text-violet-700 dark:hover:text-violet-400 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-violet-500 dark:after:bg-violet-400 after:transition-all hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="rounded-full border border-violet-200 dark:border-slate-700 px-4 py-2 text-xs font-medium text-violet-700 dark:text-slate-200 hover:bg-violet-50 dark:hover:bg-slate-800 transition"
            >
              {theme === "light" ? "Dark" : "Light"} Mode
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
  <section id="about" className="relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-violet-400/25 to-fuchsia-400/25 blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 -right-32 h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-300/20 to-violet-300/20 blur-2xl animate-pulse-slower" />

        <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-28">
          <div className="grid lg:grid-cols-12 gap-14 items-center">
            {/* Text column */}
            <div className="lg:col-span-7 mx-auto max-w-3xl text-center lg:text-left">
              <Motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-wider shadow-subtle border border-violet-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-violet-700 dark:text-violet-300"
              >
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 animate-ping-slow" />
                "Everybody Love Everybody" - Jackie Moon
              </Motion.div>

              <Motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="mt-8 text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white"
              >
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-violet-600 to-fuchsia-600 dark:from-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
                    Building
                  </span>
                  <span className="absolute -inset-1 rounded-lg bg-violet-500/10 blur-md" />
                </span>, Exploring, Enjoying the{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-fuchsia-600 to-violet-600 dark:from-fuchsia-400 dark:to-violet-400 bg-clip-text text-transparent">
                    Ride
                  </span>
                  <span className="absolute -inset-1 rounded-lg bg-fuchsia-500/10 blur-md" />
                </span>
              </Motion.h2>

              <Motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="mt-8 max-w-2xl mx-auto lg:mx-0 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
              >
                I love creating things that actually work — scalable software, new ideas, and good memories. When I'm not deep in code, I'm usually out running, biking, trying new food spots, or just hanging out with friends and family. I build because it's what I love — and I'm just here to debug life with good vibes.
              </Motion.p>

              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="mt-12 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
              >
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-violet-500/40 dark:ring-violet-400/40 transition bg-violet-600 dark:bg-violet-500 hover:bg-violet-700 dark:hover:bg-violet-600 hover:shadow-md"
                >
                  View Projects{" "}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border px-7 py-3 text-sm font-medium transition border-violet-200 dark:border-slate-700 text-violet-700 dark:text-violet-300 hover:bg-violet-50 dark:hover:bg-slate-800"
                >
                  Contact Me
                </a>
              </Motion.div>
            </div>

            {/* Image column */}
            <Motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-5 relative mx-auto w-full max-w-md"
            >
              <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-3xl overflow-hidden shadow-subtle group border-2 border-violet-500/90 dark:border-violet-400/90 bg-white dark:bg-slate-900">
                {/* Loading skeleton */}
                {!imgLoaded && (
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-violet-100 via-white to-violet-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center text-xs tracking-wide text-violet-500/60 dark:text-violet-300/50">
                    Loading image…
                  </div>
                )}
                <img
                  src={imgError ? '/profile-placeholder.svg' : portraitUrl}
                  alt="Stephen Clem portrait"
                  className={`h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.03] ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImgLoaded(true)}
                  onError={() => { setImgError(true); setImgLoaded(true); }}
                />
                {/* Subtle overlay only when loaded & not error */}
                {!imgError && imgLoaded && (
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-violet-900/0 via-violet-900/0 to-violet-900/0" />
                )}
                {/* Fallback badge when error */}
                {imgError && (
                  <div className="absolute bottom-2 right-2 rounded-full bg-violet-600/90 text-white text-[10px] px-2 py-1 font-medium shadow">
                    Fallback
                  </div>
                )}
              </div>
              <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-3">
                {["Running", "Biking", "Theme Parks", "Coding"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] tracking-wide uppercase rounded-full px-3 py-1 font-medium bg-violet-100/70 dark:bg-slate-800/70 text-violet-700 dark:text-violet-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative py-24 bg-gradient-to-b from-white via-white to-violet-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 border-y border-violet-100/70 dark:border-slate-800/70">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.08),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.08),transparent_55%)]" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Motion.h3
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white"
            >
              Core Skills & Toolkit
            </Motion.h3>
            <Motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: .15, duration: .6 }}
              className="mt-6 text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg"
            >
              The technologies and practices I lean on to build scalable, maintainable, and delightful software.
            </Motion.p>
          </div>

          {/* Skill groups with proficiency bars */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map(group => (
              <Motion.div
                key={group.title}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 24 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl group overflow-hidden backdrop-blur transition-all duration-400 border border-violet-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900/70 shadow-subtle"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${group.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative p-6 flex flex-col h-full">
                  <h4 className="text-sm font-semibold tracking-wide uppercase mb-5 flex items-center gap-2 text-violet-700 dark:text-violet-300">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 animate-pulse" />
                    {group.title}
                  </h4>
                  <ul className="space-y-4">
                    {group.skills.map(skill => (
                      <li key={skill.name} className="group/skill">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-medium tracking-wide text-slate-600 dark:text-slate-300">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-semibold tabular-nums text-violet-600 dark:text-violet-300">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 rounded-full overflow-hidden relative bg-slate-200/70 dark:bg-slate-800/70">
                          <Motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: skill.level + '%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-600 shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset]"
                            aria-label={`${skill.name} proficiency ${skill.level} percent`}
                          />
                          {/* shimmer */}
                          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover/skill:opacity-40 transition-opacity">
                            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.4s_infinite] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.5),transparent)]" />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Motion.div>
            ))}
          </div>

          {/* Tool highlight row */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                label: 'Performance Mindset',
                text: 'Profiling & pragmatic optimization to keep latency low and pages fast.'
              },
              {
                label: 'Dev Experience',
                text: 'Automated checks, scripts, and guardrails that speed up iteration.'
              },
              {
                label: 'Reliability',
                text: 'Testing + observability + graceful degradation equals resilience.'
              },
            ].map(info => (
              <Motion.div
                key={info.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-xl border border-violet-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-subtle overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h5 className="text-sm font-semibold text-violet-700 dark:text-violet-300 tracking-wide mb-2 uppercase">
                  {info.label}
                </h5>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {info.text}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>


      
      
      {/* Projects */}
      <section id="projects" className="bg-violet-50/60 dark:bg-slate-900/40 border-y border-violet-100 dark:border-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-10 text-center">
            Projects
          </h3>
          <div className={`grid gap-8 ${projects.length === 0 ? 'grid-cols-1 place-items-center' : 'md:grid-cols-2 lg:grid-cols-3'}` }>
            {projects.length === 0 && (
              <div className="relative rounded-2xl p-8 text-center overflow-hidden transition-all mx-auto max-w-md w-full bg-white dark:bg-slate-900 border border-violet-100 dark:border-slate-700/70 shadow-sm">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-violet-500/5 via-fuchsia-500/5 to-violet-500/5" />
                <div className="relative">
                  <h4 className="text-lg font-semibold tracking-tight mb-3 text-slate-900 dark:text-white">Coming Soon</h4>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    Personal side projects are being polished and will be published here shortly.
                  </p>
                  <div className="mt-6 flex justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-wider border bg-violet-50 dark:bg-slate-800 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-slate-700">
                      Projects will be uploaded soon
                    </span>
                  </div>
                </div>
              </div>
            )}
            {projects.map((p) => (
              <Motion.div
                key={p.name}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl overflow-hidden p-6 transition-all duration-400 ease-out focus-within:ring-2 focus-within:ring-violet-400/50 outline-none cursor-default bg-white dark:bg-slate-900 border border-violet-100 dark:border-slate-700/70 shadow-sm hover:shadow-md"
                tabIndex={0}
              >
                <div className="pointer-events-none absolute left-0 right-0 -top-px h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 transition-opacity duration-500 opacity-60 group-hover:opacity-100" />
                <div className="absolute -inset-8 opacity-0 group-hover:opacity-40 blur-2xl transition duration-500 pointer-events-none bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-violet-500/10" />
                <div className="relative">
                  <h4 className="text-lg font-semibold mb-2 tracking-tight text-slate-900 dark:text-white">
                    {p.name}
                  </h4>
                  <p className="text-sm mb-3 leading-relaxed text-slate-600 dark:text-slate-300">
                    {p.desc}
                  </p>
                  <p className="text-[11px] font-semibold tracking-wide mb-5 uppercase text-violet-700/80 dark:text-violet-300/90">
                    {p.tech}
                  </p>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium relative z-10 text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300"
                  >
                    View on GitHub
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Talks section removed per request */}

      {/* Contact */}
      <footer
        id="contact"
        className="mt-auto border-t border-violet-100 dark:border-slate-800 bg-white/70 dark:bg-slate-950/60 backdrop-blur"
      >
        <div className="max-w-6xl mx-auto px-6 py-14 text-center">
          <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
            Let’s Connect
          </h4>
          <div className="flex justify-center gap-6 text-2xl text-slate-500 dark:text-slate-400">
            <a
              className="hover:text-violet-600 dark:hover:text-violet-400 transition"
              href="https://github.com/stephen-clem"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="hover:text-violet-600 dark:hover:text-violet-400 transition"
              href="https://www.linkedin.com/in/stephenclem/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className="hover:text-violet-600 dark:hover:text-violet-400 transition"
              href="mailto:stephenbclem@gmail.com?subject=Contact%20Me"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="text-slate-400 dark:text-slate-500 mt-8 text-xs">
            © {new Date().getFullYear()} Stephen Clem
          </p>
        </div>
      </footer>
    </div>
  );
}
