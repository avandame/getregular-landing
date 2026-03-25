"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  type Variants,
} from "framer-motion";

const APP_STORE_URL =
  "https://apps.apple.com/ca/app/get-regular/id6749188690";

/* ───────────────────── ANIMATION VARIANTS ───────────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.93, rotateX: 12 },
  visible: { opacity: 1, y: 0, scale: 1, rotateX: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const staggerContainerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const staggerSlow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

/* ───────────────────── FLOATING HEADING ───────────────────── */

function FloatingHeading({
  children,
  className = "",
  style,
  inView,
  delay = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  inView: boolean;
  delay?: number;
}) {
  const headingRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start end", "end start"],
  });
  const floatY = useTransform(scrollYProgress, [0, 1], [6, -6]);

  return (
    <motion.h2
      ref={headingRef}
      style={{ y: floatY, ...style }}
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 50, filter: "blur(10px)" }
      }
      transition={{
        duration: 1.4,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.h2>
  );
}

/* ───────────────────── REUSABLE COMPONENTS ───────────────────── */

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function AppleIcon({ className = "w-[18px] h-[18px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

/* ───────────────────── NAV ───────────────────── */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#problem", label: "The Problem" },
    { href: "#how", label: "How It Works" },
    { href: "#community", label: "Community" },
    { href: "#science", label: "Science" },
    { href: "#founders", label: "Founders" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 transition-all duration-500 ${
        scrolled
          ? "bg-cream/30 backdrop-blur-[16px] saturate-[120%] border-b border-white/10 shadow-[0_1px_8px_rgba(0,0,0,0.02)]"
          : "bg-transparent"
      }`}
    >
      <a href="#" className="relative z-50">
        <Image
          src={scrolled ? "/logo-black.svg" : "/logo-white.svg"}
          alt="Get Regular"
          width={120}
          height={40}
          className="h-8 w-auto transition-opacity duration-300"
          priority
        />
      </a>

      {/* Desktop links */}
      <ul className="hidden lg:flex items-center gap-9">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`text-[11px] font-medium tracking-[0.14em] uppercase transition-colors duration-300 ${
                scrolled
                  ? "text-taupe hover:text-ink"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[11px] font-medium tracking-[0.14em] uppercase px-6 py-2.5 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-ink text-white hover:bg-ink-light glass-hover"
                : "glass-pill-dark text-white"
            }`}
          >
            Download
          </a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden relative z-50 flex flex-col gap-[5px] p-1"
        aria-label="Menu"
      >
        <span
          className={`block w-6 h-[1.5px] transition-all duration-300 ${
            menuOpen
              ? "translate-y-[6.5px] rotate-45 bg-white"
              : scrolled
                ? "bg-ink"
                : "bg-white"
          }`}
        />
        <span
          className={`block w-6 h-[1.5px] transition-all duration-300 ${
            menuOpen
              ? "opacity-0"
              : scrolled
                ? "bg-ink"
                : "bg-white"
          }`}
        />
        <span
          className={`block w-6 h-[1.5px] transition-all duration-300 ${
            menuOpen
              ? "-translate-y-[6.5px] -rotate-45 bg-white"
              : scrolled
                ? "bg-ink"
                : "bg-white"
          }`}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-ink z-40 flex flex-col items-center justify-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-[28px] text-white tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="bg-accent text-white px-9 py-3.5 rounded-full font-body text-sm font-medium tracking-wide"
          >
            Download
          </a>
        </div>
      )}
    </motion.nav>
  );
}

/* ───────────────────── HERO ───────────────────── */

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], ["0px", "80px"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-ink overflow-hidden flex items-center pt-28 pb-20 lg:pt-0 lg:pb-0"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(196,168,130,0.08)_0%,transparent_55%)] pointer-events-none" />

      <div className="relative z-[2] w-full max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: text content */}
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[11px] tracking-[0.25em] uppercase text-white/40 mb-6"
          >
            AI-Powered &middot; Clinically Validated &middot; Available on iOS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="font-display font-light text-white tracking-tight mb-7"
            style={{ fontSize: "clamp(44px, 6vw, 88px)" }}
          >
            Your gut is <em className="italic text-accent">talking.</em>
            <br />
            Are you listening?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="text-white/55 font-light leading-relaxed max-w-[440px] mx-auto lg:mx-0 mb-10"
            style={{ fontSize: "clamp(15px, 1.6vw, 17px)" }}
          >
            Get Regular analyzes your stool, meals, symptoms and biomarkers to
            give you personalized insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="hidden lg:flex flex-wrap items-start gap-2.5"
          >
            {["Find your triggers", "Stop guessing", "Feel better daily"].map((label, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-white/70 px-3.5 py-1.5 rounded-full text-[13px] font-medium tracking-wide bg-white/[0.03] border border-white/[0.08]"
              >
                {label}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Right: phone with app video */}
        <motion.div
          style={{ y: phoneY }}
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto lg:mx-0 w-[260px] md:w-[280px] lg:w-[300px]"
        >
          {/* Phone bezel */}
          <div className="relative rounded-[38px] p-[5px] bg-gradient-to-b from-[#2a2520] to-[#1a1714] shadow-[0_24px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.05)]">
            {/* Dynamic island */}
            <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-10" />

            {/* Screen */}
            <div className="rounded-[34px] overflow-hidden bg-black">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto block"
              >
                <source
                  src="https://storage.googleapis.com/getregular-public-assets/onboarding-v1.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          {/* Reflection glow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[70%] h-20 bg-[radial-gradient(ellipse,rgba(196,168,130,0.12)_0%,transparent_70%)] blur-2xl pointer-events-none" />
        </motion.div>

        {/* Mobile pills + scroll hint — under phone */}
        <div className="flex lg:hidden flex-col items-center col-span-full mt-6 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-2.5"
          >
            {["Find your triggers", "Stop guessing", "Feel better daily"].map((label, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-white/70 px-3.5 py-1.5 rounded-full text-[13px] font-medium tracking-wide bg-white/[0.03] border border-white/[0.08]"
              >
                {label}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-col items-center gap-2.5"
          >
            <span className="text-[10px] tracking-[0.22em] uppercase text-white/30">
              Keep things moving
            </span>
            <div
              className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
              style={{ animation: "scrollPulse 2s ease-in-out infinite 1.6s" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[2] hidden lg:flex flex-col items-center gap-2.5"
      >
        <span className="text-[10px] tracking-[0.22em] uppercase text-white/30">
          Keep things moving
        </span>
        <div
          className="w-px h-11 bg-gradient-to-b from-white/30 to-transparent"
          style={{ animation: "scrollPulse 2s ease-in-out infinite 1.6s" }}
        />
      </motion.div>
    </section>
  );
}

/* ───────────────────── MARQUEE ───────────────────── */

function Marquee() {
  const items = [
    "AI stool analysis",
    "Full nutrition breakdown",
    "Gut Check AI advisor",
    "Daily gut & nutrition scores",
    "Personalized experiments",
    "Check your food score first",
    "Weekly digest reports",
  ];

  return (
    <div className="bg-ink/95 backdrop-blur-xl py-4 overflow-hidden whitespace-nowrap border-y border-white/[0.04]" aria-hidden="true">
      <div
        className="inline-flex"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-10">
            <span className="inline-block w-[5px] h-[5px] rounded-full bg-white/[0.12] shadow-[0_0_4px_rgba(255,255,255,0.06),inset_0_0.5px_0_rgba(255,255,255,0.15)] shrink-0" />
            <span className="font-body text-[13px] font-medium tracking-[0.08em] uppercase text-taupe-light/70 pr-10">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───────────────────── PROBLEM SECTION ───────────────────── */

function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    {
      num: "40%",
      text: "of people worldwide struggle with gut health issues. And most of them are still guessing at the cause.",
    },
    {
      num: "$3,000+",
      text: "what the average gut health sufferer spends per year on supplements, tests, and appointments before finding real answers.",
    },
    {
      num: "3 years",
      text: "the average time it takes someone with a gut disorder to get a correct diagnosis. That\u2019s years of being told it\u2019s stress, anxiety, or just IBS.",
    },
  ];

  const painPoints = [
    {
      icon: "\u2715",
      title: "$400 at-home test kits",
      desc: "A one-time snapshot with no ongoing guidance or actionable follow-up",
      strike: true,
      bg: "/images/bg3-2.png",
    },
    {
      icon: "\u2715",
      title: "Generic supplement stacks",
      desc: "One-size-fits-all probiotics that ignore your actual data and biology",
      strike: true,
      bg: "/images/bg2-1.png",
    },
    {
      icon: "\u2715",
      title: "A different protocol every scroll",
      desc: "None of them know your history, your symptoms, or your biology. They know what gets views.",
      strike: true,
      bg: "/images/bg4-5.png",
    },
    {
      icon: "",
      title: "Get Regular",
      desc: "Daily AI photo analysis + clinical gut scoring + personalized insights + uncover patterns",
      strike: false,
      highlight: true,
      bg: "/images/bg7-1.png",
    },
  ];

  return (
    <section
      ref={ref}
      id="problem"
      className="bg-warm-white py-24 md:py-32 lg:py-36 px-5 md:px-8 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-[1160px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Left: headline + stats */}
        <div>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
            className="block text-[10.5px] tracking-[0.22em] uppercase text-taupe mb-5"
          >
            The Problem
          </motion.span>
          <FloatingHeading
            inView={inView}
            className="font-display font-light tracking-tight text-ink"
            style={{ fontSize: "clamp(40px, 5vw, 74px)", lineHeight: 0.55 }}
          >
            You&apos;ve been flushing your most{" "}
            <motion.em
              className="italic text-accent-dark"
              initial={{ opacity: 0, filter: "blur(6px)", y: 10 }}
              animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              powerful
            </motion.em>
            <br />
            biomarker.
          </FloatingHeading>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerSlow}
            className="mt-14 flex flex-col gap-10"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={slideInLeft}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-2"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? {
                    opacity: 1,
                    scale: 1,
                    y: [0, -5, 0],
                  } : {}}
                  transition={{
                    opacity: { duration: 0.6, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] },
                    scale: { duration: 0.6, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] },
                    y: { duration: 2.5 + i * 0.7, delay: 0.3 + i * 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                  }}
                  className="font-display font-light text-[56px] md:text-[64px] text-accent-dark"
                >
                  {stat.num}
                </motion.div>
                <div className="text-sm text-taupe max-w-[380px]">
                  {stat.text}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right: pain point cards */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerSlow}
          className="flex flex-col gap-3.5"
          style={{ perspective: "1000px" }}
        >
          {painPoints.map((card, i) => (
            <motion.div
              key={i}
              variants={cardReveal}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-2xl overflow-hidden relative glass-hover ${
                card.highlight ? "glass-accent" : "glass"
              }`}
            >
              {/* Card background image */}
              {card.bg && (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.bg})` }}
                />
              )}
              <div className={`absolute inset-0 ${
                card.highlight
                  ? "bg-ink/60"
                  : "bg-ink/65"
              }`} />

              <div className="relative z-[1] p-6 flex items-center gap-4.5">
                <div
                  className={`w-[42px] h-[42px] rounded-[11px] flex items-center justify-center shrink-0 ${
                    card.highlight
                      ? "overflow-hidden shadow-[0_2px_8px_rgba(196,168,130,0.3)]"
                      : "bg-white/10 backdrop-blur-sm border border-white/20 text-[13px] font-medium text-white/80"
                  }`}
                >
                  {card.highlight ? (
                    <Image src="/images/app-icon.png" alt="Get Regular" width={42} height={42} className="rounded-[11px] w-full h-full object-cover" />
                  ) : card.icon}
                </div>
                <div>
                  <strong
                    className={`block text-[15px] font-medium mb-1 ${
                      card.strike
                        ? "line-through text-white/70"
                        : "text-white"
                    }`}
                  >
                    {card.title}
                  </strong>
                  <span className="text-[13.5px] text-white/80">
                    {card.desc}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────── DARK FEATURE / BIOMARKER SECTION ───────────────────── */

function BiomarkerSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      title: "Stool Photo Analysis",
      desc: "Snap a photo. Our AI scores form, color, and frequency to assess digestive function, inflammation, hydration, and microbiome status.",
    },
    {
      title: "Food Photo Logging",
      desc: "Photograph your meals — no manual entry. We identify nutrient gaps, inflammatory patterns, and foods linked to your specific symptoms.",
    },
    {
      title: "Symptom Pattern Recognition",
      desc: "Connect the dots between biomarkers, lifestyle, and how you feel. Root cause identification — not just symptom masking.",
    },
    {
      title: "Daily Gut + Nutrition Scores",
      desc: "Scores that update with every input — a living measure of your digestive health with actionable next steps each day.",
    },
    {
      title: "Supplement Pathway",
      desc: "Targeted supplement recommendations built from your unique data — not a shelf of products picked by an algorithm with no context.",
    },
    {
      title: "Apple Health Sync",
      desc: "Layer in sleep, activity, cycle, and stress. The more context your care plan has, the smarter and more precise it gets.",
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-ink py-24 md:py-32 lg:py-36 px-5 md:px-8 lg:px-12 text-center relative overflow-hidden"
    >
      {/* Radial glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(196,168,130,0.07)_0%,transparent_70%)] pointer-events-none" />

      <motion.span
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.6 }}
        className="block text-[10.5px] tracking-[0.22em] uppercase text-accent mb-5"
      >
        What We Analyze
      </motion.span>

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display font-light text-white leading-[1.05] max-w-[780px] mx-auto mb-6"
        style={{ fontSize: "clamp(40px, 5.8vw, 82px)" }}
      >
        Every bowel movement is a{" "}
        <em className="italic text-accent">window</em> into your health.
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-base text-white/45 max-w-[480px] mx-auto mb-16 lg:mb-18 leading-relaxed"
      >
        Form, color, frequency — the most underutilized health data point you
        produce every single day.
      </motion.p>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1060px] mx-auto rounded-[20px] overflow-hidden glass-dark-elevated"
      >
        {features.map((feat, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className={`p-8 lg:p-10 bg-transparent text-left transition-all duration-300 hover:bg-white/[0.04] ${
              /* Right borders */
              (i + 1) % 3 !== 0 ? "lg:border-r border-white/[0.06]" : ""
            } ${
              (i + 1) % 2 !== 0 ? "md:max-lg:border-r md:max-lg:border-white/[0.06]" : ""
            } ${
              /* Bottom borders — all but last row */
              i < 3 ? "border-b border-white/[0.06]" : ""
            } ${
              i < 4 ? "md:max-lg:border-b md:max-lg:border-white/[0.06]" : ""
            }`}
          >
            <span className="font-display text-xs text-accent tracking-[0.18em] mb-5 block">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-2xl font-normal text-white mb-3">
              {feat.title}
            </h3>
            <p className="text-[13.5px] text-white/42 leading-relaxed">
              {feat.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ───────────────────── HOW IT WORKS ───────────────────── */

function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      title: "Snap it.",
      desc: "Photo your food, stool, and symptoms. Ten seconds, done.",
    },
    {
      title: "We analyze it.",
      desc: "AI cross-references everything against clinical GI guidance to find your patterns.",
    },
    {
      title: "See your scores.",
      desc: "Your daily Gut and Nutrition scores update in real time with every input.",
    },
    {
      title: "Get your plan.",
      desc: "Personalized dietary and supplement recommendations built from your data. Not anyone else\u2019s.",
    },
    {
      title: "Watch it work.",
      desc: "Track what\u2019s moving the needle. Your plan evolves as your gut does.",
    },
  ];

  return (
    <section
      ref={ref}
      id="how"
      className="bg-cream pt-24 md:pt-32 lg:pt-36 pb-0 px-5 md:px-8 lg:px-12"
    >
      <div className="max-w-[1080px] mx-auto">
        <div className="max-w-[560px] mb-0">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
            className="block text-[10.5px] tracking-[0.22em] uppercase text-taupe mb-5"
          >
            How It Works
          </motion.span>
          <FloatingHeading
            className="font-display font-light tracking-tight text-ink"
            style={{ fontSize: "clamp(40px, 5vw, 74px)" }}
            inView={inView}
          >
            We turn gut feelings into{" "}
            <em className="italic text-accent-dark">gut data.</em>
          </FloatingHeading>
        </div>

        {/* Steps with sticky phone */}
        <StepsWithPhone steps={steps} inView={inView} />
      </div>
    </section>
  );
}


function DesktopSteps({ steps, inView }: { steps: { title: string; desc: string }[]; inView: boolean }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0.05, 0.95], ["0%", `-${(steps.length - 1) * 100}%`]);

  return (
    <div ref={outerRef} className="hidden lg:block relative -mt-4" style={{ height: `${steps.length * 50}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="grid grid-cols-[280px_1fr] gap-16 w-full items-center">
          {/* Left: phone */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <img
              src="/images/home.png"
              alt="Get Regular home screen"
              className="w-[260px] h-auto"
            />
          </motion.div>

          {/* Right: horizontal steps */}
          <div className="overflow-hidden">
            <motion.div style={{ x }} className="flex">
              {steps.map((step, i) => (
                <div key={i} className="min-w-full px-4 group">
                  <div className="flex items-center gap-5 mb-5">
                    <div className="w-[56px] h-[56px] rounded-full glass flex items-center justify-center font-display text-[26px] text-accent-dark shrink-0 transition-all duration-300 group-hover:shadow-[0_4px_20px_rgba(196,168,130,0.2)]">
                      <span className="-mb-2">{i + 1}</span>
                    </div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-accent">
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3
                    className="text-[22px] font-semibold text-ink mb-3"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-taupe max-w-[380px]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileSteps({ steps, inView }: { steps: { title: string; desc: string }[]; inView: boolean }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0.05, 0.95], ["0%", `-${(steps.length - 1) * 100}%`]);

  return (
    <div ref={outerRef} className="lg:hidden relative" style={{ height: `${steps.length * 50}vh` }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden px-1">
        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-8"
        >
          <img
            src="/images/home.png"
            alt="Get Regular home screen"
            className="w-[180px] h-auto"
          />
        </motion.div>

        {/* Horizontal steps */}
        <motion.div style={{ x }} className="flex">
          {steps.map((step, i) => (
            <div key={i} className="min-w-full px-2 group">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-[48px] h-[48px] rounded-full glass flex items-center justify-center font-display text-[22px] text-accent-dark shrink-0">
                  <span className="-mb-1.5">{i + 1}</span>
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-accent">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3
                className="text-[17px] font-semibold text-ink mb-2"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {step.title}
              </h3>
              <p className="text-[13px] text-taupe max-w-[300px]">
                {step.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function StepCard({ step, index }: { step: { title: string; desc: string }; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-[40vh] flex items-center"
    >
      <div className="group">
        <div className="flex items-center gap-5 mb-4">
          <div className="w-[56px] h-[56px] rounded-full glass flex items-center justify-center font-display text-[26px] text-accent-dark shrink-0 transition-all duration-300 group-hover:shadow-[0_4px_20px_rgba(196,168,130,0.2)]">
            <span className="-mb-2">{index + 1}</span>
          </div>
          <span className="text-[10px] tracking-[0.2em] uppercase text-accent">
            Step {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3
          className="text-[20px] font-semibold text-ink mb-3"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {step.title}
        </h3>
        <p className="text-[14px] text-taupe max-w-[340px]">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

function StepsWithPhone({ steps, inView }: { steps: { title: string; desc: string }[]; inView: boolean }) {
  return (
    <>
      {/* Desktop: sticky phone left + horizontal scroll-jacked steps right */}
      <DesktopSteps steps={steps} inView={inView} />

      {/* Mobile: scroll-jacked horizontal steps */}
      <MobileSteps steps={steps} inView={inView} />
    </>
  );
}

/* ───────────────────── FEATURES BENTO GRID ───────────────────── */

function BentoGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const cards = [
    {
      title: "The AI Analysis Moat",
      desc: "No competitor combines food photo AI, stool photo analysis, and a personalized supplement pathway in one daily experience.",
      span: "md:col-span-2",
      accent: true,
      bg: "/images/bg4-5.png",
    },
    {
      title: "Dr. Schopis, MD",
      desc: "Board-certified gastroenterologist at NY Presbyterian Weill Cornell. Clinical credibility, not crowd-sourced approximations.",
      span: "",
      bg: "/images/bg9-1.png",
    },
    {
      title: "Daily Gut Score",
      desc: "A living score that updates with every input — your real-time digestive health metric with actionable next steps.",
      span: "",
      bg: "/images/bg10-2.png",
    },
    {
      title: "79% of Serotonin",
      desc: "Produced in your gut. Understanding digestion means understanding your mood, energy, and mental clarity.",
      span: "",
      stat: true,
      bg: "/images/bg14-2.png",
    },
    {
      title: "Apple Health Sync",
      desc: "Sleep, activity, cycle, stress — the more context your care plan has, the smarter it becomes.",
      span: "",
      bg: "/images/bg7-1.png",
    },
    {
      title: "Gut Check AI",
      desc: "Ask anything about your gut health. Get instant, personalized answers backed by your data and clinical science.",
      span: "md:col-span-2",
      bg: "/images/bg2-1.png",
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-warm-white py-24 md:py-32 lg:py-36 px-5 md:px-8 lg:px-12"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center max-w-[600px] mx-auto mb-14 lg:mb-18">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
            className="block text-[10.5px] tracking-[0.22em] uppercase text-taupe mb-5"
          >
            Features
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-light tracking-tight text-ink"
            style={{ fontSize: "clamp(38px, 4.5vw, 64px)" }}
          >
            Everything your gut{" "}
            <em className="italic text-accent-dark">needs.</em>
          </motion.h2>
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainerFast}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className={`${card.span} rounded-2xl overflow-hidden relative glass-hover min-h-[220px] ${
                card.accent
                  ? "glass-dark-elevated text-white"
                  : "glass-elevated"
              }`}
            >
              {/* Background image */}
              {card.bg && (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.bg})` }}
                />
              )}
              {/* Overlay for readability */}
              <div
                className={`absolute inset-0 ${
                  card.accent
                    ? "bg-ink/75"
                    : "bg-gradient-to-t from-cream/90 via-cream/70 to-cream/40"
                }`}
              />
              {/* Content */}
              <div className="relative z-[1] p-7 lg:p-9 h-full flex flex-col justify-end">
                {card.stat && (
                  <div className="font-display text-[56px] font-light text-accent-dark mb-3">
                    79%
                  </div>
                )}
                <h3
                  className={`font-display text-xl lg:text-[22px] font-normal mb-2.5 ${
                    card.accent ? "text-white" : "text-ink"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-[13.5px] ${
                    card.accent ? "text-white/60" : "text-taupe"
                  }`}
                >
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────── TESTIMONIALS ───────────────────── */

function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const quotes = [
    {
      text: "Not to be dramatic, it\u2019s only been 2 days \u2014 but I feel like it\u2019s kind of life changing. Love having something to help keep me accountable to my own gut health and actually think about it on a daily basis. So cool and always such a fan of women\u2019s health innovation.",
      author: "Midwife",
    },
    {
      text: "As someone with celiac disease, it\u2019s so refreshing to use an app that doesn\u2019t reduce every bit of discomfort to your autoimmune condition. It feels really validating and thoughtful.",
      author: "App user",
    },
    {
      text: "Just downloaded and have been using this app for a few days now. This is exactly what I\u2019ve been looking for. From a girl with chronic constipation \u2014 thank you!!!",
      author: "App user",
    },
    {
      text: "I just downloaded it and this is EXACTLY what I have been needing. I\u2019ve been trying to track my gut health for a little bit but never had anything streamlined. I already started using it and it\u2019s amazing! The way it gives you information immediately. This is mindblowing \u2014 they\u2019ve created something spectacular.",
      author: "App user",
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-ink py-24 md:py-32 lg:py-36 px-5 md:px-8 lg:px-12 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(196,168,130,0.06)_0%,transparent_55%)] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto relative z-[1]">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="block text-[10.5px] tracking-[0.22em] uppercase text-accent mb-5 text-center"
        >
          In Their Words
        </motion.span>

        <FloatingHeading
          className="font-display font-light text-white text-center max-w-[640px] mx-auto mb-16"
          style={{ fontSize: "clamp(36px, 4.5vw, 64px)" }}
          inView={inView}
        >
          People are feeling the <em className="italic text-accent">difference.</em>
        </FloatingHeading>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerSlow}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[900px] mx-auto"
          style={{ perspective: "800px" }}
        >
          {quotes.map((quote, i) => (
            <motion.div
              key={i}
              variants={cardReveal}
              className={`glass-dark rounded-2xl p-8 md:p-10 relative group glass-hover ${
                i >= 2 ? "md:col-span-2" : ""
              }`}
            >
              {/* Decorative quote mark */}
              <span className="font-display text-[80px] text-accent/10 absolute -top-2 left-6 select-none">
                &ldquo;
              </span>

              <p
                className="text-[15px] text-white/85 relative z-[1] mb-5"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
              >
                {quote.text}
              </p>
              <span className="text-[11px] tracking-[0.12em] uppercase text-accent/60">
                &mdash; {quote.author}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────── UGC TIKTOK GRID ───────────────────── */

function UGCSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const tiktokVideos = [
    { id: "7615765028137897246", user: "getregular", caption: "Gut health has never been this good, happy pooping!" },
    { id: "7613530170246417695", user: "angpark", caption: "Testing the Get Regular app — this is actually so cool" },
    { id: "7617911085529648414", user: "getregular", caption: "Busy shoot day but still keeping track of my gut health" },
    { id: "7610105927986875678", user: "hallysicle", caption: "This app is actually life changing for gut health" },
    { id: "7610639249355902239", user: "getregular", caption: "Take your probiotics — this is my holy grail" },
    { id: "7610984655134805262", user: "layla.atiles", caption: "She called us cool and honestly, we'd have to agree" },
  ];

  return (
    <section
      ref={ref}
      id="community"
      className="bg-cream py-24 md:py-32 lg:py-36 px-5 md:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center max-w-[560px] mx-auto mb-16">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
            className="block text-[10.5px] tracking-[0.22em] uppercase text-taupe mb-5"
          >
            The Movement
          </motion.span>
          <FloatingHeading
            className="font-display font-light tracking-tight text-ink"
            style={{ fontSize: "clamp(40px, 5vw, 74px)" }}
            inView={inView}
          >
            The <em className="italic text-accent-dark">community</em> is
            talking.
          </FloatingHeading>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base text-taupe leading-relaxed mt-4"
          >
            Thousands of people are already tracking, learning, and feeling
            better. Here&apos;s what they&apos;re saying.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center justify-center gap-6 mt-6"
          >
            <a href="https://www.tiktok.com/@getregular" target="_blank" rel="noopener noreferrer" className="text-taupe hover:text-ink transition-colors text-[11px] tracking-[0.12em] uppercase font-medium">TikTok</a>
            <span className="w-1 h-1 rounded-full bg-taupe/30" />
            <a href="https://www.instagram.com/get.regular" target="_blank" rel="noopener noreferrer" className="text-taupe hover:text-ink transition-colors text-[11px] tracking-[0.12em] uppercase font-medium">Instagram</a>
            <span className="w-1 h-1 rounded-full bg-taupe/30" />
            <a href="https://www.linkedin.com/company/get-regular/" target="_blank" rel="noopener noreferrer" className="text-taupe hover:text-ink transition-colors text-[11px] tracking-[0.12em] uppercase font-medium">LinkedIn</a>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerSlow}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-[800px] mx-auto"
          style={{ perspective: "800px" }}
        >
          {tiktokVideos.map((video) => (
            <motion.div
              key={video.id}
              variants={cardReveal}
              className="relative rounded-2xl overflow-hidden bg-ink"
            >
              <iframe
                src={`https://www.tiktok.com/player/v1/${video.id}?&music_info=1&description=1`}
                className="w-full border-0 aspect-[9/16]"
                allow="encrypted-media"
                allowFullScreen
                title={`TikTok by @${video.user}`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial quotes */}
        <FloatingHeading
          className="font-display font-light tracking-tight text-ink text-center mt-24 mb-12"
          style={{ fontSize: "clamp(36px, 4.5vw, 64px)" }}
          inView={inView}
          delay={0.3}
        >
          Gut feelings. <em className="italic text-accent-dark">Confirmed.</em>
        </FloatingHeading>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerSlow}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[800px] mx-auto"
          style={{ perspective: "800px" }}
        >
          {[
            {
              text: "Not to be dramatic, it\u2019s only been 2 days \u2014 but I feel like it\u2019s kind of life changing. Love having something to help keep me accountable to my own gut health and actually think about it on a daily basis. So cool and always such a fan of women\u2019s health innovation.",
              author: "Midwife",
            },
            {
              text: "As someone with celiac disease, it\u2019s so refreshing to use an app that doesn\u2019t reduce every bit of discomfort to your autoimmune condition. It feels really validating and thoughtful.",
              author: "App user",
            },
            {
              text: "Just downloaded and have been using this app for a few days now. This is exactly what I\u2019ve been looking for. From a girl with chronic constipation \u2014 thank you!!!",
              author: "App user",
              span: true,
            },
            {
              text: "I just downloaded it and this is EXACTLY what I have been needing. I\u2019ve been trying to track my gut health for a little bit but never had anything streamlined. I already started using it and it\u2019s amazing! The way it gives you information immediately. This is mindblowing \u2014 they\u2019ve created something spectacular.",
              author: "App user",
              span: true,
            },
          ].map((quote, i) => (
            <motion.div
              key={i}
              variants={cardReveal}
              className={`glass rounded-2xl p-8 md:p-10 relative group glass-hover ${
                quote.span ? "md:col-span-2" : ""
              }`}
            >
              <span className="font-display text-[80px] text-accent/10 absolute -top-2 left-6 select-none">
                &ldquo;
              </span>
              <p
                className="text-[15px] text-ink/80 relative z-[1] mb-5"
                style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
              >
                {quote.text}
              </p>
              <span className="text-[11px] tracking-[0.12em] uppercase text-accent-dark/50">
                &mdash; {quote.author}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────── SCIENCE / CREDIBILITY ───────────────────── */

function ScienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="science"
      className="bg-cream-dark py-24 md:py-32 lg:py-36 px-5 md:px-8 lg:px-12"
    >
      <div className="max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        {/* Left: content */}
        <div>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6 }}
            className="block text-[10.5px] tracking-[0.22em] uppercase text-taupe mb-5"
          >
            Backed by Science
          </motion.span>
          <FloatingHeading
            className="font-display font-light tracking-tight text-ink"
            style={{ fontSize: "clamp(38px, 4.5vw, 68px)" }}
            inView={inView}
          >
            Built with a{" "}
            <em className="italic text-accent-dark">gastroenterologist,</em>{" "}
            not just an algorithm.
          </FloatingHeading>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base text-taupe mt-4 mb-9"
          >
            Developed with a board-certified gastroenterologist, we bring the
            best of clinical expertise and holistic insight into one easy, daily
            app experience.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-elevated rounded-2xl p-6 flex items-center gap-4.5"
          >
            <img
              src="/images/schopis-cropped.png"
              alt="Dr. Michael Schopis"
              className="w-12 h-12 rounded-full object-cover shrink-0"
            />
            <div>
              <strong className="block text-[13.5px] font-medium mb-0.5">
                Dr. Michael Schopis, MD
              </strong>
              <span className="text-xs text-taupe leading-snug">
                Board-Certified Gastroenterologist
                <br />
                NY Presbyterian &middot; Weill Cornell &middot; Manhattan
                Gastroenterology
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right: quote block */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glass-dark-elevated rounded-[22px] p-10 lg:p-12 relative overflow-hidden !bg-ink/95"
        >
          <span className="font-display text-[140px] text-accent/20 absolute top-0 left-7 leading-none select-none">
            &ldquo;
          </span>
          <p className="text-xl font-light text-white/90 relative z-[1]" style={{ fontFamily: "var(--font-inter)" }}>
            The app&apos;s internal analysis and outputs underwent extensive
            scrutiny and tweaking to ensure it correctly follows all current
            major gastroenterology guidelines as it relates to gut health —
            reliably demonstrating that the app provides users with a
            convenient, evidence-based interpretation of their personal
            digestive wellbeing.
          </p>
          <cite className="block text-[11px] font-body not-italic tracking-[0.15em] uppercase text-accent mt-7">
            Dr. Michael Schopis — Clinical Advisor, Get Regular
          </cite>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────── FINAL CTA ───────────────────── */

/* ───────────────────── FOUNDERS ───────────────────── */

function FoundersSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="founders"
      className="bg-cream py-24 md:py-32 lg:py-36 px-5 md:px-8 lg:px-12"
    >
      <div className="max-w-[860px] mx-auto">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="block text-[10.5px] tracking-[0.22em] uppercase text-taupe mb-5 text-center"
        >
          Who&apos;s Behind This
        </motion.span>

        <FloatingHeading
          className="font-display font-light tracking-tight text-ink text-center"
          style={{ fontSize: "clamp(36px, 4.5vw, 64px)" }}
          inView={inView}
        >
          Built by people who&apos;ve{" "}
          <em className="italic text-accent-dark">been there.</em>
        </FloatingHeading>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-base text-taupe mt-8 text-center max-w-[640px] mx-auto"
        >
          We didn&apos;t build Get Regular because it was a good market
          opportunity. We built it because we spent years feeling dismissed,
          confused, and stuck — cycling through elimination diets, expensive
          tests, temporary solutions and conflicting advice that never actually
          solved anything. So we built the tool we wished existed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 rounded-2xl overflow-hidden max-w-[280px] mx-auto"
        >
          <img
            src="/images/founders.png"
            alt="Athina & Adrianna — Founders of Get Regular"
            className="w-full h-auto"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm text-taupe/60 mt-6 text-center max-w-[540px] mx-auto italic"
        >
          <a href="https://www.instagram.com/athinavandame" target="_blank" rel="noopener noreferrer" className="not-italic text-taupe/80 hover:text-ink transition-colors">Athina</a> designed &amp; built Get Regular. <a href="https://www.instagram.com/adriatiles" target="_blank" rel="noopener noreferrer" className="not-italic text-taupe/80 hover:text-ink transition-colors">Adrianna</a> made sure the world
          knew about it.
        </motion.p>

      </div>
    </section>
  );
}

/* ───────────────────── FINAL CTA ───────────────────── */

function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="bg-ink py-32 md:py-40 px-5 md:px-8 lg:px-12 text-center relative overflow-hidden"
    >
      <div className="absolute -bottom-44 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(196,168,130,0.07)_0%,transparent_65%)] pointer-events-none" />

      <motion.span
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.6 }}
        className="block text-[10.5px] tracking-[0.22em] uppercase text-accent mb-5"
      >
        Available Now on iOS
      </motion.span>

      <FloatingHeading
        className="font-display font-light text-white max-w-[640px] mx-auto mb-6"
        style={{ fontSize: "clamp(44px, 6vw, 84px)" }}
        inView={inView}
      >
        It&apos;s time to <em className="italic text-accent">Get Regular.</em>
      </FloatingHeading>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-base text-white/40 max-w-[380px] mx-auto mb-13 leading-relaxed"
      >
        Questions, comments, or poop photos at{" "}
        <a
          href="mailto:hello@getregular.com"
          className="text-white/60 hover:text-white/80 transition-colors"
        >
          hello@getregular.com
        </a>
      </motion.p>
    </section>
  );
}

/* ───────────────────── VIDEO BREAK ───────────────────── */

function VideoBreak() {
  return (
    <section className="relative w-full bg-ink">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          src="https://www.youtube-nocookie.com/embed/WEEbxLhSRT8?autoplay=1&mute=1&loop=1&playlist=WEEbxLhSRT8&controls=0&playsinline=1&rel=0&modestbranding=1&disablekb=1&fs=0&showinfo=0"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Get Regular"
          className="absolute inset-0 w-full h-full pointer-events-none border-0"
        />
      </div>
    </section>
  );
}

/* ───────────────────── FOOTER ───────────────────── */

function Footer() {
  const footerLinks = [
    {
      href: "/legal/privacy-policy",
      label: "Privacy",
    },
    {
      href: "/legal/terms-of-service",
      label: "Terms",
    },
    { href: "https://www.tiktok.com/@getregular", label: "TikTok" },
    { href: "https://www.instagram.com/get.regular", label: "Instagram" },
    {
      href: "https://www.linkedin.com/company/get-regular/",
      label: "LinkedIn",
    },
    { href: "mailto:hello@getregular.com", label: "Contact" },
  ];

  return (
    <footer className="bg-ink border-t border-white/5 py-10 px-5 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
      <Image
        src="/logo-white.svg"
        alt="Get Regular"
        width={100}
        height={34}
        className="h-6 w-auto opacity-40"
      />
      <ul className="flex flex-wrap gap-6">
        {footerLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10.5px] tracking-[0.14em] uppercase text-white/28 hover:text-white/65 transition-colors duration-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="text-[10.5px] text-white/18">
        <span className="block">&copy; 2025 Get Regular Health, Inc.</span>
        <span className="block mt-1 text-white/12">Made with love and care.</span>
      </div>
    </footer>
  );
}

/* ───────────────────── PAGE ───────────────────── */

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <ProblemSection />
      <VideoBreak />
      <HowItWorks />
      <UGCSection />
      <ScienceSection />
      <FoundersSection />
      <FinalCTA />
      <Footer />

      {/* Sticky CTA */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
      >
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-ink text-white px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-full text-[12px] sm:text-sm font-medium tracking-wide border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all duration-300 whitespace-nowrap"
        >
          <AppleIcon />
          Download on the App Store
        </a>
      </motion.div>
    </>
  );
}
