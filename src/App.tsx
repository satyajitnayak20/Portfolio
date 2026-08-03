import emailjs from "@emailjs/browser";
import resume from "./imports/MY_RESUME.pdf"
import profile from "./imports/me1.jpeg"
import project1 from "./imports/project-1.jpg"
import project2 from "./imports/project-2.png"
import project3 from "./imports/project-3.jpg"
import project4 from "./imports/project-4.jpg"
import project5 from "./imports/project-5.png"
import project6 from "./imports/project-6.jpg"

import { useState, useEffect, useRef } from "react"
import {
  motion,
  AnimatePresence,
  useInView,
  type Variants,
} from "framer-motion"
import {
  ExternalLink,
  Mail,
  ChevronDown,
  X,
  Menu,
  Download,
  ArrowUpRight,
  Code2,
  Layers,
  Cpu,
  Globe,
  Terminal,
  Smartphone,
  Star,
  Send,
  MapPin,
  CheckCircle2,
  Sun,
  Moon,
  Zap,
  BarChart3,
  Database,
  Braces,
  Triangle,
} from "lucide-react"

// Social icon SVGs
const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
)
const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)
const LeetCodeIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 00-.973.404L1.404 11.51a1.376 1.376 0 000 1.945l4.243 4.243a1.376 1.376 0 001.945 0l1.414-1.414-4.243-4.243 9.72-9.72A1.376 1.376 0 0013.483 0z" />
    <path d="M9.404 17.535l1.945 1.945a1.376 1.376 0 001.945 0l9.302-9.302a1.376 1.376 0 000-1.945l-1.945-1.945-11.247 11.247z" />
    <path d="M8.586 12l4.95-4.95 1.414 1.414L10 13.414 8.586 12z" />
  </svg>
)

// ─── Types ───────────────────────────────────────────────────────────────────

interface Project {
  id: number
  title: string
  description: string
  longDesc: string
  tags: string[]
  category: string
  image: string
  github: string
  live: string
  featured?: boolean
}

interface Skill {
  name: string
  level: number
  icon: React.ReactNode
  color: string
}

// ─── Data ────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    id: 1,
    category: "Full Stack",
    featured: true,
    title: "Resume Builder",
    description:
      "A full-stack resume builder with authentication, customizable templates, real-time preview, and PDF export.",
    longDesc:
      "Developed a full-stack Resume Builder using React, Node.js, Express.js, and MongoDB. Implemented JWT-based authentication, REST APIs, multiple resume templates, real-time preview, and PDF export functionality. The application enables users to efficiently create professional resumes with a responsive and intuitive interface.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: project1,
    github: "https://github.com/satyajitnayak20/resume_builder",
    live: "",
  },
  {
    id: 2,
    category: "AI",
    title: "AI-Powered Movie Insight Builder",
    description:
      "An AI-powered movie intelligence platform providing audience sentiment, critic consensus, and movie insights.",
    longDesc:
      "Built a full-stack Next.js application integrating the OMDb API with Groq's Llama 3.3-70B language model to generate audience sentiment analysis, critic consensus, confidence scoring, and key theme extraction for IMDb titles. Implemented secure API routes, progressive loading, responsive UI, input validation, and deployed the application on Vercel.",
    tags: ["Next.js",
    "React",
    "Groq AI",
    "Llama 3.3",
    "OMDb API",
    "JavaScript",
    "REST API",
    "Vercel"],
    image:project2,
    github: "https://github.com/satyajitnayak20/AI_Movie_Insight_Builder",
    live: "https://ai-movie-insight-builder-007-7wqm8qlha.vercel.app/",
  },
  {
    id: 3,
    category: "AI/ML",
    title: "Diabetic Retinopathy Detection",
    description:
      "Machine learning model for detecting diabetic retinopathy using retinal image texture analysis.",
    longDesc:
      "Developed a machine learning model using Gray-Level Co-occurrence Matrix (GLCM) texture features to detect diabetic retinopathy from retinal fundus images. Achieved approximately 95% classification accuracy while reducing false positives, improving the reliability of early disease detection.",
    tags: ["Python",
    "Machine Learning",
    "OpenCV",
    "GLCM",
    "Scikit-learn",
    "Image Processing"],
    image:project3,
    github: "https://github.com/satyajitnayak20/Diabetic-Retinopathy-Detection-using-Machine-Learning-and-Texture-Features",
    live: "",
  },
  {
    id: 4,
  category: "Web",
  featured: true,
  title: "Real-Time Tracking System",
  description:
    "A real-time location tracking application with live GPS updates and interactive maps.",
  longDesc:
    "Developed a full-stack real-time tracking system using React, Node.js, Express.js, and Socket.IO to display live location updates on an interactive map. Integrated the Google Maps API for route visualization, implemented WebSocket communication for instant location synchronization, and designed a responsive dashboard for monitoring tracked users in real time.",
  tags: [
    "React",
    "Node.js",
    "Express.js",
    "Socket.IO",
    "Leaflet.js",
    "JavaScript"
  ],
  image: project4,
  github: "https://github.com/satyajitnayak20/RealTime-Tracking",
  live: "",
  },
  {
    id: 5,
  category: "Full Stack",
  featured: true,
  title: "Online Quiz Platform",
  description:
    "A real-time multiplayer quiz platform with live leaderboards, instant scoring, and interactive quiz sessions.",

  longDesc:
    "Developed a full-stack online quiz platform using Next.js, TypeScript, Prisma, PostgreSQL, Socket.IO, and Tailwind CSS. Implemented secure user authentication, real-time multiplayer quiz sessions, live score synchronization, countdown timers, dynamic leaderboards, and quiz history. Designed a responsive and modern UI with optimized database operations using Prisma ORM.",

  tags: [
    "Next.js",
    "TypeScript",
    "Socket.IO",
    "Prisma",
    "PostgreSQL",
    "Tailwind CSS"
  ],
    image: project5,
    github: "https://github.com/satyajitnayak20/Online--Quiz-Website/tree/main/Online--Quiz-Website",
    live: "",
  },
  {
    id: 6,
  category: "Backend API",
  featured: true,
  title: "E-Commerce REST API",
  description:
    "A secure RESTful backend API for an e-commerce platform featuring authentication, product management, shopping cart, and order processing.",

  longDesc:
    "Designed and developed a scalable RESTful E-Commerce API using Node.js, Express.js, and MongoDB. Implemented JWT-based authentication, role-based authorization, CRUD operations for products and categories, shopping cart management, order processing, search and filtering, pagination, and centralized error handling. Built following REST architecture with modular routing, middleware, and MongoDB data modeling for maintainable and scalable backend development.",

  tags: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
    "REST API",
    "bcrypt",
    "Express Validator"
  ],
    image: project6,
    github: "https://github.com/satyajitnayak20/E-Commerece-API",
    live: "",
  },
]

const skills: Skill[] = [
  { name: "Java", level: 96, icon: <Triangle size={16} />, color: "#61dafb" },
  { name: "React", level: 90, icon: <Terminal size={16} />, color: "#3776ab" },
  { name: "Node.js", level: 88, icon: <Zap size={16} />, color: "#68a063" },
  { name: "SQL", level: 85, icon: <Database size={16} />, color: "#336791" },
  {
    name: "GCP / Docker",
    level: 80,
    icon: <Globe size={16} />,
    color: "#ff9900",
  },
  {
    name: "REST APIs",
    level: 91,
    icon: <Layers size={16} />,
    color: "#e10098",
  },
  {
    name: "System Design",
    level: 84,
    icon: <BarChart3 size={16} />,
    color: "#14b8a6",
  },
]

const timeline = [
  {
    year: "2021–2025",
    role: "BTech Computer Science",
    org: "NIST University",
    desc: "Specialization in Programming Language, DBMS, System Design, Computer Network, Problem Solving.",
  },
  {
    year: "2019–2021",
    role: "Intermediate - Science",
    org: "Bhadrak Higher Secondary School",
    desc: "Specialization in Physics, Chemistry, Math, Biology.",
  },
]

const categories = ["All", "Web", "Mobile", "AI"]

// ─── Animation Variants ───────────────────────────────────────────────────────

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}
const stagger = (delay = 0.1): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
})

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useTyping(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("")
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]
    const delay = deleting ? speed / 2 : charIdx === word.length ? pause : speed
    const t = setTimeout(() => {
      if (!deleting && charIdx < word.length) {
        setDisplayed(word.slice(0, charIdx + 1))
        setCharIdx((c) => c + 1)
      } else if (!deleting && charIdx === word.length) {
        setDeleting(true)
      } else if (deleting && charIdx > 0) {
        setDisplayed(word.slice(0, charIdx - 1))
        setCharIdx((c) => c - 1)
      } else {
        setDeleting(false)
        setWordIdx((i) => (i + 1) % words.length)
      }
    }, delay)
    return () => clearTimeout(t)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return displayed
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar({
  dark,
  onToggleDark,
}: {
  dark: boolean
  onToggleDark: () => void
}) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState("home")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setActive(id)
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="font-display font-bold text-xl tracking-tight"
          >
            <span className="gradient-text">satya</span>
            <span className="text-[#64748b]">.dev</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg"
                style={{ color: active === l.id ? "#14b8a6" : "#94a3b8" }}
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: "rgba(20,184,166,0.1)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onToggleDark}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/5"
              style={{ color: "#64748b" }}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              className="hidden md:flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg btn-primary text-white"
              onClick={() => scrollTo("contact")}
            >
              Hire Me
            </button>
            <button
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ color: "#94a3b8" }}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 glass border-t border-[#1e1e35] md:hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="px-4 py-3 text-left text-sm font-medium rounded-lg transition-all"
                  style={{
                    color: active === l.id ? "#14b8a6" : "#94a3b8",
                    background:
                      active === l.id ? "rgba(20,184,166,0.08)" : "transparent",
                  }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const roles = [
    "Software Engineer",
    "Web Developer",
    "AI Enthusiast",
    "Open Source Advocate",
  ]
  const typed = useTyping(roles)

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden mesh-bg"
    >
      {/* Grid dots */}
      <div className="absolute inset-0 grid-dots opacity-60 pointer-events-none" />

      {/* Orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono mb-8"
          style={{
            background: "rgba(20,184,166,0.1)",
            border: "1px solid rgba(20,184,166,0.25)",
            color: "#14b8a6",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[#14b8a6] animate-pulse" />
          Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold leading-none tracking-tight mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          Hi, I'm <span className="gradient-text">Satyajit</span>
          <br />
          <span style={{ color: "#e2e8f0" }}>Nayak.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-mono text-lg md:text-xl mb-10"
          style={{ color: "#64748b" }}
        >
          <span style={{ color: "#8b5cf6" }}>&gt; </span>
          <span style={{ color: "#14b8a6" }}>{typed}</span>
          <span className="animate-pulse" style={{ color: "#8b5cf6" }}>
            |
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg leading-relaxed mb-12 max-w-2xl mx-auto"
          style={{ color: "#64748b" }}
        >
          I design and build fast, beautiful ideas — from AI-powered platforms
          to pixel-perfect mobile or desktop apps. Turning complex ideas into
          elegant code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="btn-primary px-7 py-3.5 rounded-xl text-white font-semibold text-sm flex items-center gap-2"
          >
            View My Work
            <ArrowUpRight size={16} />
          </button>

          <a
            href={resume}
            download
            className="btn-outline px-7 py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center justify-center gap-6 mt-14"
        ></motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" },
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "#334155" }}
        aria-label="Scroll down"
      >
        <span
          className="text-xs font-mono tracking-widest uppercase"
          style={{ fontSize: "10px" }}
        >
          scroll
        </span>
        <ChevronDown size={16} />
      </motion.button>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section id="about" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={stagger()}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-4"
          >
            <span
              className="text-xs font-mono tracking-widest uppercase"
              style={{ color: "#8b5cf6" }}
            >
              01 / About
            </span>
            <div
              className="flex-1 h-px"
              style={{
                background:
                  "linear-gradient(90deg, rgba(139,92,246,0.3), transparent)",
              }}
            />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-3xl md:text-5xl mb-16"
            style={{ color: "#e2e8f0" }}
          >
            The person behind the code
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0"
              style={{ boxShadow: "0 0 60px rgba(139,92,246,0.15)" }}
            >
              <img
                src={profile}
                alt="Satyajit Nayak"
                className="w-full h-full object-cover"
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(20,184,166,0.08), rgba(139,92,246,0.08))",
                }}
              />
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-6"
          >
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed"
              style={{ color: "#94a3b8" }}
            >
              I'm a full-stack engineer and AI practitioner based in Odisha,
              India. I specialize in building high-performance web and mobile
              applications that sit at the intersection of great engineering and
              thoughtful design.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed"
              style={{ color: "#94a3b8" }}
            >
              When I'm not shipping code, I contribute to open source, write
              about systems engineering on my blog. I care deeply about
              developer experience, API ergonomics, and the craft of building
              software that lasts.
            </motion.p>

            {/* Timeline */}
            <motion.div variants={fadeUp} className="pt-4 space-y-0">
              <h3
                className="text-sm font-semibold mb-4"
                style={{ color: "#e2e8f0" }}
              >
                Education
              </h3>
              {timeline.map((t, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: i === 0 ? "#14b8a6" : "#334155" }}
                    />
                    {i < timeline.length - 1 && (
                      <div
                        className="w-px flex-1 my-1"
                        style={{ background: "#1e1e35" }}
                      />
                    )}
                  </div>
                  <div
                    className={`pb-5 ${i === timeline.length - 1 ? "" : ""}`}
                  >
                    <div
                      className="font-mono text-xs mb-0.5"
                      style={{ color: "#8b5cf6" }}
                    >
                      {t.year}
                    </div>
                    <div
                      className="font-semibold text-sm"
                      style={{ color: "#e2e8f0" }}
                    >
                      {t.role} · {t.org}
                    </div>
                    <div
                      className="text-xs mt-0.5 leading-relaxed"
                      style={{ color: "#64748b" }}
                    >
                      {t.desc}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-2xl rounded-2xl overflow-hidden"
          style={{
            background: "#0f0f1a",
            border: "1px solid #1e1e35",
            maxHeight: "90vh",
            overflowY: "auto",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, #0f0f1a, transparent)",
              }}
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-xl flex items-center justify-center transition-all"
              style={{
                background: "rgba(15,15,26,0.8)",
                border: "1px solid #1e1e35",
                color: "#94a3b8",
              }}
            >
              <X size={16} />
            </button>
            <div className="absolute bottom-4 left-6">
              <span
                className="px-2.5 py-1 rounded-lg text-xs font-mono"
                style={{
                  background: "rgba(139,92,246,0.2)",
                  color: "#8b5cf6",
                  border: "1px solid rgba(139,92,246,0.3)",
                }}
              >
                {project.category}
              </span>
            </div>
          </div>
          <div className="p-6">
            <h3
              className="font-display font-bold text-2xl mb-3"
              style={{ color: "#e2e8f0" }}
            >
              {project.title}
            </h3>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "#94a3b8" }}
            >
              {project.longDesc}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((t, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono"
                  style={{
                    background: "#16162a",
                    border: "1px solid #1e1e35",
                    color: "#64748b",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">

              {project.live && (
              <a
                href={project.live}
                className="btn-primary flex-1 py-2.5 rounded-xl text-sm font-semibold text-white text-center flex items-center justify-center gap-2"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
              )}

              {project.github && (
              <a
                href={project.github}
                target = "_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-1 py-2.5 rounded-xl text-sm font-semibold text-center flex items-center justify-center gap-2"
                style={{ color: "#e2e8f0" }}
              >
                <GithubIcon size={14} /> Source
              </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function Projects() {
  const [filter, setFilter] = useState("All")
  const [selected, setSelected] = useState<Project | null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-10%" })

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section
      id="projects"
      ref={ref}
      className="py-28 px-6"
      style={{ background: "#0a0a12" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger()}
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-4"
          >
            <span
              className="text-xs font-mono tracking-widest uppercase"
              style={{ color: "#14b8a6" }}
            >
              02 / Work
            </span>
            <div
              className="flex-1 h-px"
              style={{
                background:
                  "linear-gradient(90deg, rgba(20,184,166,0.3), transparent)",
              }}
            />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-3xl md:text-5xl mb-4"
            style={{ color: "#e2e8f0" }}
          >
            Selected Projects
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base mb-10 max-w-xl"
            style={{ color: "#64748b" }}
          >
            A curated selection of production products I've designed, built, and
            shipped.
          </motion.p>

          {/* Filter */}
          <motion.div variants={fadeUp} className="flex gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  background:
                    filter === c
                      ? "linear-gradient(135deg, #14b8a6, #8b5cf6)"
                      : "#16162a",
                  color: filter === c ? "#fff" : "#64748b",
                  border: filter === c ? "none" : "1px solid #1e1e35",
                }}
              >
                {c}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group rounded-2xl overflow-hidden cursor-pointer card-hover"
                style={{ background: "#0f0f1a", border: "1px solid #1e1e35" }}
                onClick={() => setSelected(p)}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: "rgba(8,8,14,0.7)" }}
                  >
                    <span
                      className="text-sm font-medium px-4 py-2 rounded-xl"
                      style={{
                        background: "rgba(139,92,246,0.2)",
                        border: "1px solid rgba(139,92,246,0.4)",
                        color: "#8b5cf6",
                      }}
                    >
                      View Details
                    </span>
                  </div>
                  {p.featured && (
                    <div className="absolute top-3 left-3">
                      <span
                        className="px-2.5 py-1 rounded-lg text-xs font-mono flex items-center gap-1.5"
                        style={{
                          background: "rgba(20,184,166,0.15)",
                          border: "1px solid rgba(20,184,166,0.3)",
                          color: "#14b8a6",
                        }}
                      >
                        <Star size={10} fill="currentColor" /> Featured
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3
                      className="font-display font-bold text-base"
                      style={{ color: "#e2e8f0" }}
                    >
                      {p.title}
                    </h3>
                    <span
                      className="text-xs font-mono ml-2 flex-shrink-0 mt-0.5 px-2 py-0.5 rounded-md"
                      style={{
                        color: "#8b5cf6",
                        background: "rgba(139,92,246,0.1)",
                      }}
                    >
                      {p.category}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "#64748b" }}
                  >
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 3).map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-xs font-mono"
                        style={{
                          background: "#16162a",
                          color: "#475569",
                          border: "1px solid #1e1e35",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                    {p.tags.length > 3 && (
                      <span
                        className="px-2 py-0.5 rounded text-xs font-mono"
                        style={{ color: "#475569" }}
                      >
                        +{p.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}

// ─── Skills ───────────────────────────────────────────────────────────────────

function AnimatedBar({
  level,
  color,
  inView,
}: {
  level: number
  color: string
  inView: boolean
}) {
  return (
    <div
      className="relative h-2 rounded-full overflow-hidden"
      style={{ background: "#16162a" }}
    >
      <motion.div
        className="h-full rounded-full progress-bar"
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
      />
    </div>
  )
}

function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section id="skills" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger()}
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-4"
          >
            <span
              className="text-xs font-mono tracking-widest uppercase"
              style={{ color: "#8b5cf6" }}
            >
              03 / Skills
            </span>
            <div
              className="flex-1 h-px"
              style={{
                background:
                  "linear-gradient(90deg, rgba(139,92,246,0.3), transparent)",
              }}
            />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-3xl md:text-5xl mb-4"
            style={{ color: "#e2e8f0" }}
          >
            Tools & Technologies
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base mb-14 max-w-xl"
            style={{ color: "#64748b" }}
          >
            Technologies I've used in production environments at scale.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                delay: i * 0.07,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <span style={{ color: skill.color }}>{skill.icon}</span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#e2e8f0" }}
                  >
                    {skill.name}
                  </span>
                </div>
                <span
                  className="text-xs font-mono"
                  style={{ color: "#64748b" }}
                >
                  {skill.level}%
                </span>
              </div>
              <AnimatedBar
                level={skill.level}
                color={skill.color}
                inView={inView}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-10%" })
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setSending(true);

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setSending(false);
    setSent(true);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    setSending(false);
    alert("Failed to send message. Please try again.");
  }
};

  return (
    <section id="contact" ref={ref} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={stagger()}
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-4"
          >
            <span
              className="text-xs font-mono tracking-widest uppercase"
              style={{ color: "#8b5cf6" }}
            >
              04 / Contact
            </span>
            <div
              className="flex-1 h-px"
              style={{
                background:
                  "linear-gradient(90deg, rgba(139,92,246,0.3), transparent)",
              }}
            />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-3xl md:text-5xl mb-4"
            style={{ color: "#e2e8f0" }}
          >
            Let's build something
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base mb-14 max-w-xl"
            style={{ color: "#64748b" }}
          >
            Have a project in mind? I'm currently available for full-time
            opportunities.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              {
                icon: <Mail size={16} />,
                label: "Email",
                value: "satyajitnayk931@gmail.com",
              },
              {
                icon: <MapPin size={16} />,
                label: "Location",
                value: "Odisha, India",
              },
              {
                icon: <Code2 size={16} />,
                label: "Availability",
                value: "Open to offers",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex gap-4 items-start p-4 rounded-xl"
                style={{ background: "#0f0f1a", border: "1px solid #1e1e35" }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(20,184,166,0.1)",
                    color: "#14b8a6",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    className="text-xs font-mono mb-0.5"
                    style={{ color: "#64748b" }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "#e2e8f0" }}
                  >
                    {item.value}
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <p
                className="text-xs font-mono mb-4"
                style={{ color: "#334155" }}
              >
                Find me on
              </p>
              <div className="flex gap-3">
                {[
                  {
                    icon: <GithubIcon size={16} />,
                    label: "GitHub",
                    href: "https://github.com/satyajitnayak20",
                  },
                  {
                    icon: <LinkedinIcon size={16} />,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/satyajit-nayak-08153b255/",
                  },
                  {
                    icon: <LeetCodeIcon size={16} />,
                    label: "LeetCode",
                    href: "https://leetcode.com/u/Nayak_Satyajit/",
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                    style={{
                      background: "#0f0f1a",
                      border: "1px solid #1e1e35",
                      color: "#64748b",
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.color = "#8b5cf6"
                      ;(e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(139,92,246,0.4)"
                      ;(e.currentTarget as HTMLElement).style.background =
                        "rgba(139,92,246,0.08)"
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.color = "#64748b"
                      ;(e.currentTarget as HTMLElement).style.borderColor =
                        "#1e1e35"
                      ;(e.currentTarget as HTMLElement).style.background =
                        "#0f0f1a"
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-16 rounded-2xl"
                  style={{
                    background: "#0f0f1a",
                    border: "1px solid rgba(20,184,166,0.3)",
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.2,
                    }}
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{
                      background: "rgba(20,184,166,0.1)",
                      border: "1px solid rgba(20,184,166,0.3)",
                    }}
                  >
                    <CheckCircle2 size={28} style={{ color: "#14b8a6" }} />
                  </motion.div>
                  <h3
                    className="font-display font-bold text-xl mb-2"
                    style={{ color: "#e2e8f0" }}
                  >
                    Message sent!
                  </h3>
                  <p className="text-sm" style={{ color: "#64748b" }}>
                    I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="rounded-2xl p-8 space-y-5"
                  style={{ background: "#0f0f1a", border: "1px solid #1e1e35" }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { field: "name", label: "Your name", type: "text" },
                      { field: "email", label: "Email address", type: "email" },
                    ].map((f) => (
                      <div key={f.field} className="floating-label-group">
                        <input
                          type={f.type}
                          placeholder=" "
                          required
                          value={form[(f.field as keyof typeof form)]}
                          onChange={(e) =>
                            setForm((p) => ({
                              ...p,
                              [f.field]: e.target.value,
                            }))
                          }
                          className="w-full px-4 pt-6 pb-2 rounded-xl text-sm transition-all"
                          style={{
                            background: "#16162a",
                            border: "1px solid #1e1e35",
                            color: "#e2e8f0",
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor =
                              "rgba(20,184,166,0.5)"
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = "#1e1e35"
                          }}
                        />
                        <label>{f.label}</label>
                      </div>
                    ))}
                  </div>
                  <div className="floating-label-group">
                    <input
                      type="text"
                      placeholder=" "
                      required
                      value={form.subject}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, subject: e.target.value }))
                      }
                      className="w-full px-4 pt-6 pb-2 rounded-xl text-sm transition-all"
                      style={{
                        background: "#16162a",
                        border: "1px solid #1e1e35",
                        color: "#e2e8f0",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(20,184,166,0.5)"
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "#1e1e35"
                      }}
                    />
                    <label>Subject</label>
                  </div>
                  <div className="floating-label-group">
                    <textarea
                      placeholder=" "
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      className="w-full px-4 pt-6 pb-2 rounded-xl text-sm transition-all resize-none"
                      style={{
                        background: "#16162a",
                        border: "1px solid #1e1e35",
                        color: "#e2e8f0",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(20,184,166,0.5)"
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "#1e1e35"
                      }}
                    />
                    <label>Your message</label>
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {sending ? (
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    ) : (
                      <>
                        <Send size={14} /> Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-10 px-6 border-t" style={{ borderColor: "#1e1e35" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-3 items-center gap-4">
        <div className="font-display font-bold">
          <span className="gradient-text">satya</span>
          <span style={{ color: "#334155" }}>.dev</span>
        </div>
        <p className="text-xs font-mono text-center" style={{ color: "#334155" }}>
          © {new Date().getFullYear()} Satyajit Nayak. Built with passion.
        </p>
        <div />
      </div>
    </footer>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [dark, setDark] = useState(true)

  return (
    <div style={{ background: "#08080e", minHeight: "100vh" }}>
      <Navbar dark={dark} onToggleDark={() => setDark((d) => !d)} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
