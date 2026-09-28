"use client";

import { useState } from "react";
import { motion } from "framer-motion";


/* =========================================================
   SKILL CATEGORY COMPONENT
========================================================= */

function SkillCategory({
  number,
  title,
  skills,
  delay,
}: {
  number: string;
  title: string;
  skills: [string, string][];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="group relative border border-[#D0D3BF] bg-white/75 backdrop-blur-sm p-5 sm:p-7 overflow-hidden transition-all duration-500 hover:border-[#8B9270] hover:shadow-[0_18px_45px_rgba(122,128,101,0.12)]"
    >

      {/* Animated top accent */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: delay + 0.15 }}
        className="absolute top-0 left-0 h-[3px] bg-[#8B9270]"
      />

      {/* Hover glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#C8CF9F]/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Category heading */}
      <div className="relative flex items-center gap-3 pb-5 border-b border-[#D4D6C8]">
        <span className="text-xs font-bold text-[#809671]">
          /{number}
        </span>

        <h3 className="text-sm sm:text-base font-black uppercase tracking-[0.04em]">
          {title}
        </h3>
      </div>

      {/* Skill cards */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">

        {skills.map(([name, desc], index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: delay + 0.2 + index * 0.07,
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            className="group/skill border border-[#D9DACF] bg-[#F5F2EA] p-4 sm:p-5 cursor-default transition-all duration-300 hover:border-[#8B9270] hover:bg-[#EEF0E2] hover:shadow-[0_12px_30px_rgba(122,128,101,0.15)]"
          >

            <div className="flex items-start justify-between gap-2">

              <h4 className="font-bold text-sm sm:text-base leading-tight">
                {name}
              </h4>

              <span className="text-[#8B9270] text-sm opacity-0 translate-x-[-4px] group-hover/skill:opacity-100 group-hover/skill:translate-x-0 transition-all duration-300">
                ↗
              </span>

            </div>

            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#62645C]">
              {desc}
            </p>

            <p className="mt-4 text-[9px] uppercase tracking-[0.15em] text-[#8B9270]">
              • Technical Skill
            </p>

          </motion.div>
        ))}

      </div>
    </motion.div>
  );
}


/* =========================================================
   MAIN PAGE
========================================================= */
function AchievementRow({
  number,
  title,
  subtitle,
  tag,
  delay,
}: {
  number: string;
  title: string;
  subtitle: string;
  tag: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="
        group
        w-full
        min-w-0
        grid
        grid-cols-[28px_minmax(0,1fr)]
        sm:grid-cols-[45px_minmax(0,1fr)_150px]
        items-start
        gap-x-3
        sm:gap-x-5
        gap-y-2
        py-5 sm:py-6
        border-b border-[#4A4A45]
        transition-all duration-300
      "
    >
      {/* Number */}
      <span
        className="
          pt-0.5
          text-[10px] sm:text-xs
          font-bold
          text-[#AEB67D]
        "
      >
        {number}
      </span>

      {/* Main Content */}
      <div className="min-w-0 w-full">

        <h3
          className="
            max-w-full
            break-words
            font-sans
            font-black
            text-[13px] sm:text-base lg:text-lg
            leading-tight
            uppercase
            tracking-[-0.015em]
            text-[#F5F2EA]
            transition-transform duration-300
            group-hover:translate-x-1
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-1
            max-w-full
            break-words
            text-[10px] sm:text-xs
            leading-relaxed
            text-[#B8B7AE]
          "
        >
          {subtitle}
        </p>

        {/* Mobile tag */}
        <div className="mt-2 sm:hidden">
          <AchievementTag tag={tag} />
        </div>

      </div>

      {/* Desktop tag */}
      <div className="hidden sm:flex justify-end items-start">
        <AchievementTag tag={tag} />
      </div>

    </motion.div>
  );
}


function AchievementTag({
  tag,
}: {
  tag: string;
}) {
  return (
    <span
      className="
        inline-flex
        max-w-full
        items-center
        whitespace-nowrap
        border border-[#596044]
        px-2 sm:px-2.5
        py-1
        text-[7px] sm:text-[9px]
        font-bold
        uppercase
        tracking-[0.12em]
        text-[#AEB67D]
        transition-all duration-300
        group-hover:border-[#8B9270]
        group-hover:bg-[#8B9270]
        group-hover:text-[#242421]
      "
    >
      {tag}
    </span>
  );
}

function ExperienceRow({
  number,
  role,
  company,
  duration,
  mode,
  description,
  ongoing = false,
}: {
  number: string;
  role: string;
  company: string;
  duration: string;
  mode: string;
  description: string;
  ongoing?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        group
        grid
        grid-cols-[32px_minmax(0,1fr)]
        sm:grid-cols-[55px_minmax(0,1fr)_180px]
        gap-x-4
        sm:gap-x-6
        py-7
        sm:py-8
        border-b border-[#4A4A45]
      "
    >
      {/* Number */}
      <span className="pt-1 text-xs font-bold text-[#AEB67D]">
        {number}
      </span>

      {/* Main Content */}
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-sans font-black text-lg sm:text-xl lg:text-2xl uppercase tracking-[-0.02em] text-[#F5F2EA] transition-transform duration-300 group-hover:translate-x-1">
            {role}
          </h3>

          {ongoing && (
            <span className="inline-flex items-center gap-1.5 border border-[#596044] px-2 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-[#AEB67D]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#AEB67D] animate-pulse" />
              Ongoing
            </span>
          )}
        </div>

        <p className="mt-2 text-sm sm:text-base font-medium text-[#D7D5CB]">
          {company}
        </p>

        <p className="mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-[#B8B7AE]">
          {description}
        </p>

        {/* Mobile details */}
        <div className="flex sm:hidden flex-wrap gap-2 mt-4">
          <span className="border border-[#596044] px-2 py-1 text-[8px] font-bold uppercase tracking-[0.1em] text-[#AEB67D]">
            {duration}
          </span>

          <span className="border border-[#596044] px-2 py-1 text-[8px] font-bold uppercase tracking-[0.1em] text-[#AEB67D]">
            {mode}
          </span>
        </div>
      </div>

      {/* Desktop Details */}
      <div className="hidden sm:flex flex-col items-end gap-2 pt-1">
        <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#AEB67D] text-right">
          {duration}
        </span>

        <span className="border border-[#596044] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-[#AEB67D]">
          {mode}
        </span>
      </div>
    </motion.div>
  );
}




export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
  return (
    <main className="min-h-screen bg-[#F5F2EA] text-[#171717] overflow-x-hidden">


      {/* =====================================================
          NAVBAR + HERO
      ===================================================== */}

      <section
        id="home"
        className="relative min-h-screen bg-[#F5F2EA] overflow-hidden"
      >

        {/* ================= MOBILE MENU ================= */}
{isMenuOpen && (
  <div className="md:hidden border-t border-[#D6D3C8] bg-[#F5F2EA] px-5 py-5">
    <div className="flex flex-col gap-4">
      {[
        ["Home", "#home"],
        ["About", "#about"],
        ["Work", "#projects"],
        ["Skills", "#skills"],
        ["Achievements", "#achievements"],
        ["Experience", "#experience"],
        ["Contact", "#contact"],
      ].map(([label, href]) => (
        <a
          key={label}
          href={href}
          onClick={() => setIsMenuOpen(false)}
          className="
            text-sm
            font-bold
            uppercase
            tracking-[0.15em]
            text-[#242421]
            transition-colors
            duration-300
            hover:text-[#7A8065]
          "
        >
          {label}
        </a>
      ))}
    </div>
  </div>
)}

{/* ==================== NAVBAR ==================== */}

{/* ==================== NAVBAR ==================== */}
<nav
  className="
    fixed
    top-0
    left-0
    right-0
    z-50
    w-full
    border-b
    border-[#D6D3C8]
    bg-[#F5F2EA]/95
    backdrop-blur-md
  "
>
  <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 md:px-12 lg:px-16">
 {/* ================= LOGO + RESUME ================= */}
<div className="flex items-center gap-6 sm:gap-7">

  {/* LOGO */}
  <motion.a
    href="#home"
    initial={{ opacity: 0, x: -15 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="
      shrink-0
      text-[17px]
      sm:text-lg
      font-black
      tracking-[-0.04em]
      text-[#242421]
      transition-colors
      duration-300
      hover:text-[#7A8065]
    "
  >
    NISTHA JAIN.
  </motion.a>

  {/* RESUME */}
  <motion.a
    href="Nistha_Resume.docx"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="
      hidden
      sm:inline-flex
      group
      items-center
      gap-1.5
      border
      border-[#8B9270]
      px-3
      py-2
      text-[9px]
      font-bold
      uppercase
      tracking-[0.16em]
      text-[#242421]
      transition-all
      duration-300
      hover:bg-[#8B9270]
      hover:text-[#F5F2EA]
    "
  >
    Resume
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      ↗
    </span>
  </motion.a>

</div>
    


    {/* ================= DESKTOP NAV ================= */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="
        hidden
        md:flex
        items-center
        gap-7
        lg:gap-8
      "
    >

      {/* HOME */}
      <a
        href="#home"
        className="
          group
          relative
          py-2
          text-[13px]
          lg:text-[14px]
          font-bold
          uppercase
          tracking-[0.15em]
          text-[#242421]
          transition-colors
          duration-300
          hover:text-[#7A8065]
        "
      >
        Home

        <span
          className="
            absolute
            left-0
            bottom-0
            h-[2px]
            w-0
            bg-[#7A8065]
            transition-all
            duration-300
            ease-out
            group-hover:w-full
          "
        />
      </a>


      {/* ABOUT */}
      <a
        href="#about"
        className="
          group
          relative
          py-2
          text-[13px]
          lg:text-[14px]
          font-bold
          uppercase
          tracking-[0.15em]
          text-[#242421]
          transition-colors
          duration-300
          hover:text-[#7A8065]
        "
      >
        About

        <span
          className="
            absolute
            left-0
            bottom-0
            h-[2px]
            w-0
            bg-[#7A8065]
            transition-all
            duration-300
            ease-out
            group-hover:w-full
          "
        />
      </a>


      {/* WORK */}
      <a
        href="#projects"
        className="
          group
          relative
          py-2
          text-[13px]
          lg:text-[14px]
          font-bold
          uppercase
          tracking-[0.15em]
          text-[#242421]
          transition-colors
          duration-300
          hover:text-[#7A8065]
        "
      >
        Work

        <span
          className="
            absolute
            left-0
            bottom-0
            h-[2px]
            w-0
            bg-[#7A8065]
            transition-all
            duration-300
            ease-out
            group-hover:w-full
          "
        />
      </a>


      {/* SKILLS */}
      <a
        href="#skills"
        className="
          group
          relative
          py-2
          text-[13px]
          lg:text-[14px]
          font-bold
          uppercase
          tracking-[0.15em]
          text-[#242421]
          transition-colors
          duration-300
          hover:text-[#7A8065]
        "
      >
        Skills

        <span
          className="
            absolute
            left-0
            bottom-0
            h-[2px]
            w-0
            bg-[#7A8065]
            transition-all
            duration-300
            ease-out
            group-hover:w-full
          "
        />
      </a>


      {/* ================= MORE DROPDOWN ================= */}
      <div className="group relative">

        {/* MORE BUTTON */}
        <button
          type="button"
          className="
            flex
            items-center
            gap-2
            py-2
            text-[13px]
            lg:text-[14px]
            font-bold
            uppercase
            tracking-[0.15em]
            text-[#242421]
            transition-colors
            duration-300
            group-hover:text-[#7A8065]
          "
        >
          More

          <span
            className="
              text-[11px]
              transition-transform
              duration-300
              group-hover:rotate-180
            "
          >
            ↓
          </span>
        </button>


        {/* DROPDOWN */}
        <div
          className="
            invisible
            absolute
            right-0
            top-full
            w-48
            translate-y-2
            border
            border-[#D0CEC3]
            bg-[#F5F2EA]
            opacity-0
            shadow-[0_18px_40px_rgba(36,36,33,0.10)]
            transition-all
            duration-300
            group-hover:visible
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >

          {/* DROPDOWN TOP LINE */}
          <div className="h-[2px] w-full bg-[#7A8065]" />


          {/* ACHIEVEMENTS */}
          <a
            href="#achievements"
            className="
              group/item
              flex
              items-center
              justify-between
              border-b
              border-[#D9D6CB]
              px-5
              py-4
              text-[11px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-[#242421]
              transition-colors
              duration-300
              hover:bg-[#E7E9DC]
              hover:text-[#7A8065]
            "
          >
            <span>Achievements</span>

            <span
              className="
                translate-x-[-4px]
                opacity-0
                transition-all
                duration-300
                group-hover/item:translate-x-0
                group-hover/item:opacity-100
              "
            >
              ↗
            </span>
          </a>


          {/* EXPERIENCE */}
          <a
            href="#experience"
            className="
              group/item
              flex
              items-center
              justify-between
              border-b
              border-[#D9D6CB]
              px-5
              py-4
              text-[11px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-[#242421]
              transition-colors
              duration-300
              hover:bg-[#E7E9DC]
              hover:text-[#7A8065]
            "
          >
            <span>Experience</span>

            <span
              className="
                translate-x-[-4px]
                opacity-0
                transition-all
                duration-300
                group-hover/item:translate-x-0
                group-hover/item:opacity-100
              "
            >
              ↗
            </span>
          </a>


          {/* CONTACT */}
          <a
            href="#contact"
            className="
              group/item
              flex
              items-center
              justify-between
              px-5
              py-4
              text-[11px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-[#242421]
              transition-colors
              duration-300
              hover:bg-[#E7E9DC]
              hover:text-[#7A8065]
            "
          >
            <span>Contact</span>

            <span
              className="
                translate-x-[-4px]
                opacity-0
                transition-all
                duration-300
                group-hover/item:translate-x-0
                group-hover/item:opacity-100
              "
            >
              ↗
            </span>
          </a>

        </div>

      </div>

    </motion.div>


    {/* ================= RIGHT SIDE ================= */}
    <motion.div
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="
        hidden
        md:flex
        items-center
        gap-2
      "
    >

      <span
        className="
          text-[9px]
          lg:text-[10px]
          font-bold
          uppercase
          tracking-[0.18em]
          text-[#6F7068]
        "
      >
        Portfolio &apos;26
      </span>

      <span
        className="
          h-2
          w-2
          rounded-full
          bg-[#8B9270]
          animate-pulse
        "
      />

    </motion.div>


{/* ================= MOBILE MENU BUTTON ================= */}
<button
  type="button"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className="
    flex
    md:hidden
    items-center
    justify-center
    border
    border-[#CFCBC0]
    px-3
    py-2
    text-[10px]
    font-bold
    uppercase
    tracking-[0.15em]
    text-[#242421]
    transition-all
    duration-300
    hover:border-[#7A8065]
    hover:text-[#7A8065]
  "
>
  {isMenuOpen ? "Close" : "Menu"}
</button>
  </div>
  </nav>


        {/* HERO CONTENT */}
        <div className="min-h-screen max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative flex items-center justify-center">

          {/* TOP LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute left-5 sm:left-8 md:left-12 lg:left-16 top-[25%]"
          >
<p className="text-xs sm:text-sm uppercase tracking-[0.22em] font-extrabold text-[#7A8065]">
  Computer Science
</p>

<p className="mt-1 text-xs sm:text-sm uppercase tracking-[0.22em] font-extrabold text-[#6F7068]">
  AI / ML
</p>
          </motion.div>


          {/* AVAILABILITY */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute right-5 sm:right-8 md:right-12 lg:right-16 top-[25%] flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-[#8B9270] rounded-full animate-pulse" />

<div className="flex flex-col items-center">
  <span className="text-[9px] sm:text-[14px] uppercase tracking-[0.18em] font-extrabold text-[#6F7068]">
    Available
  </span>

  <span className="text-[9px] sm:text-[14px] uppercase tracking-[0.18em] font-extrabold text-[#6F7068]">
     For
  </span>

  <span className="text-[9px] sm:text-[14px] uppercase tracking-[0.18em] font-extrabold text-[#6F7068]">
    Opportunities
  </span>
</div>
          </motion.div>


          {/* CENTER PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 w-[210px] h-[290px] sm:w-[260px] sm:h-[350px] md:w-[300px] md:h-[410px] lg:w-[340px] lg:h-[460px] mt-16"
          >

            {/* IMAGE FRAME */}
            <div className="absolute inset-0 border border-[#B9B9AC] translate-x-3 translate-y-3" />

            <div className="relative w-full h-full overflow-hidden bg-[#D9DDCB]">
              <img
                src="/NisthaImg.png"
                alt="Nistha Jain"
                className="w-full h-full object-cover"
              />
            </div>

            {/* OLIVE LINE */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute -bottom-7 -left-8 h-[2px] bg-[#8B9270]"
            />

          </motion.div>


          {/* HEY THERE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="absolute top-[17%] text-center font-serif italic text-[clamp(2.3rem,5vw,5rem)] text-[#171717] font-extrabold"
          >
            Hey, there.
          </motion.p>


          {/* LEFT BIG TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="absolute left-5 sm:left-8 md:left-12 lg:left-16 bottom-[17%] z-20"
          >
            <p className="font-black text-[clamp(3rem,8vw,8rem)] leading-[0.78] tracking-[-0.07em]">
              I AM
            </p>

            <p className="font-black text-[clamp(3rem,8vw,8rem)] leading-[0.78] tracking-[-0.07em]">
              NISTHA
            </p>
          </motion.div>


          {/* RIGHT BIG TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="absolute right-5 sm:right-8 md:right-12 lg:right-16 bottom-[18%] z-20 text-right"
          >
            <p className="font-black text-[clamp(1.5rem,3.2vw,3.6rem)] leading-[0.85] tracking-[-0.055em] uppercase">
              Software
            </p>

            <p className="font-black text-[clamp(1.5rem,3.2vw,3.6rem)] leading-[0.85] tracking-[-0.055em] uppercase">
              Engineer
            </p>

            <p className="mt-2 font-serif italic text-[clamp(1rem,2vw,2rem)] text-[#7A8065]">
              × AI / ML
            </p>
          </motion.div>


          {/* SCROLL INDICATOR */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          >
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#6F7068]">
              Scroll
            </span>

            <motion.div
              animate={{ height: [20, 35, 20] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="w-px bg-[#7A8065]"
            />
          </motion.div>

        </div>
      </section>


{/* ABOUT SECTION */}
<section
  id="about"
  className="scroll-mt-20 bg-[#242421] text-[#F5F2EA]"
>
  <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-0 py-14 sm:py-16">

    {/* Section Label */}
    <div className="flex items-center gap-4 mb-10">
      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#AEB67D]">
        ABOUT / 01
      </span>

      <span className="h-px w-10 bg-[#8B9270]" />
    </div>


    {/* Main About Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.9fr] gap-12 lg:gap-16">

      {/* LEFT SIDE */}
      <div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-[760px]"
        >
          {/* Editorial opening */}
          <p className="font-serif italic text-[clamp(3rem,5vw,5.2rem)] leading-[0.82] tracking-[-0.045em] text-[#F5F2EA]">
            Curious by
            <br />
            nature.
          </p>

          {/* Strong statement */}
          <p className="mt-5 font-sans font-black uppercase text-[clamp(3rem,5vw,5.4rem)] leading-[0.78] tracking-[-0.065em] text-[#F5F2EA]">
            DRIVEN BY
          </p>

          <p className="font-sans font-black uppercase text-[clamp(3rem,5vw,5.4rem)] leading-[0.78] tracking-[-0.065em] text-[#8B9270]">
            TECHNOLOGY.
          </p>

          {/* Closing statement */}
          <p className="mt-5 font-serif italic text-[clamp(2.6rem,4.3vw,4.6rem)] leading-[0.84] tracking-[-0.04em] text-[#B8BBA8]">
            Always digging
            <br />
            deeper.
          </p>
        </motion.div>


        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-7 max-w-[620px] text-sm sm:text-[15px] leading-[1.7] text-[#D7D5CB]"
        >
          I’m Nistha Jain, a Computer Science student specializing in
          Artificial Intelligence and Machine Learning. I enjoy exploring
          technology, understanding how things work, experimenting with new
          ideas, and diving deeper into every concept I learn.
        </motion.p>


        {/* WHAT I'M INTO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8"
        >
          <p className="mb-4 text-[9px] uppercase tracking-[0.22em] font-bold text-[#AEB67D]">
            WHAT I&apos;M INTO
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              "AI / ML",
              "SOFTWARE DEVELOPMENT",
              "DATA",
              "PROBLEM SOLVING",
              "BUILDING",
            ].map((item) => (
              <span
                key={item}
                className="border border-[#55554E] px-3 py-2 text-[10px] sm:text-[11px] uppercase tracking-[0.12em] text-[#F5F2EA]"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>


      {/* RIGHT SIDE */}
      <div className="space-y-5">

        {/* EDUCATION CARD */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border border-[#4A4A45] p-6 sm:p-7"
        >
          <div className="flex items-center justify-between">
            <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#AEB67D]">
              EDUCATION
            </p>

            <span className="text-[9px] text-[#6F7068]">
              03 / 04
            </span>
          </div>

          <h3 className="mt-7 text-base sm:text-lg font-bold">
            B.Tech CSE × AI/ML
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-[#B8B7AE]">
            Amity University Madhya Pradesh
          </p>

          <div className="mt-8 flex items-end justify-between">
            <span className="text-[9px] uppercase tracking-[0.18em] text-[#6F7068]">
              3RD YEAR
            </span>

            <span className="font-serif italic text-3xl text-[#AEB67D]">
              9.41
            </span>
          </div>
        </motion.div>


        {/* BEYOND THE CLASSROOM CARD */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="border border-[#4A4A45] p-6 sm:p-7"
        >
          <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#AEB67D]">
            BEYOND THE CLASSROOM
          </p>

          <div className="mt-5">

            <div className="flex items-center justify-between py-3 border-b border-[#3E3E3A]">
              <div>
                <p className="text-sm font-bold">
                  Amity Coding Club
                </p>

                <p className="mt-1 text-[10px] text-[#8F9088]">
                  Technical Team
                </p>
              </div>

              <span className="text-[#AEB67D]">↗</span>
            </div>


            <div className="flex items-center justify-between py-3 border-b border-[#3E3E3A]">
              <div>
                <p className="text-sm font-bold">
                  Smart India Hackathon
                </p>

                <p className="mt-1 text-[10px] text-[#8F9088]">
                  Selected for Round 2
                </p>
              </div>

              <span className="text-[#AEB67D]">↗</span>
            </div>


            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-bold">
                  Tech Events & Workshops
                </p>

                <p className="mt-1 text-[10px] leading-relaxed text-[#8F9088]">
                  Microsoft Workshop · IIT Roorkee
                  <br />
                  DevFest · GDG Gwalior
                </p>
              </div>

              <span className="text-[#AEB67D]">↗</span>
            </div>

          </div>
        </motion.div>

      </div>

    </div>
  </div>
</section>

      {/* =====================================================
          WORK / PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="relative bg-[#F5F2EA] text-[#171717] px-5 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 lg:py-24"
      >

        <div className="max-w-6xl mx-auto">

          {/* LABEL */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >

            <span className="text-[11px] sm:text-xs font-bold tracking-[0.28em] uppercase text-[#6F7068]">
              Work / 02
            </span>

            <span className="w-12 h-[2px] bg-[#7A8065]" />

          </motion.div>


          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >

            <p className="font-serif italic text-[clamp(2.8rem,5vw,5rem)] leading-[0.8]">
              Selected
            </p>

            <p className="font-black uppercase text-[clamp(2.8rem,5vw,5rem)] leading-[0.82] tracking-[-0.06em]">
              Work
            </p>

          </motion.div>


          {/* PROJECT 01 */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border-t-2 border-[#171717] py-8"
          >

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">

              {/* NUMBER */}
              <div className="md:col-span-1 pt-1">
                <span className="text-xs font-bold text-[#7A8065]">
                  01
                </span>
              </div>


              {/* PROJECT */}
              <div className="md:col-span-8">

                <h3 className="text-[clamp(2rem,3.8vw,4rem)] font-black uppercase tracking-[-0.055em] leading-[0.85] hover:text-[#7A8065] transition-colors">
                  CreditSense
                </h3>

                <p className="mt-4 max-w-xl text-sm sm:text-base text-[#55554E] leading-relaxed">
                  An AI-powered credit risk dashboard that uses machine
                  learning to analyze customer data and predict potential
                  credit default risk.
                </p>

                <div className="flex flex-wrap gap-2 mt-5">

                  {[
                    "Python",
                    "Machine Learning",
                    "Random Forest",
                    "Streamlit",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 border border-[#D8D5CC] text-[10px] uppercase tracking-[0.08em] text-[#6F7068]"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>


              {/* TYPE + LINKS */}
              <div className="md:col-span-3 md:text-right pt-1">

                <p className="text-[10px] uppercase tracking-[0.2em] text-[#7A8065]">
                  AI / ML
                </p>

                <div className="flex md:justify-end items-center gap-3 mt-2">

                  <a
                    href="YOUR_CREDITSENSE_GITHUB_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold uppercase tracking-[0.08em] hover:text-[#7A8065] transition-colors"
                  >
                    GitHub ↗
                  </a>

                  <span className="text-[#B5B2A8] text-[10px]">
                    •
                  </span>

                  <a
                    href="YOUR_CREDITSENSE_LIVE_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold uppercase tracking-[0.08em] hover:text-[#7A8065] transition-colors"
                  >
                    Live Demo ↗
                  </a>

                </div>

              </div>

            </div>

          </motion.article>


          {/* PROJECT 02 */}
          <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="border-t border-[#BDBBB2] py-8"
          >

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">

              {/* NUMBER */}
              <div className="md:col-span-1 pt-1">
                <span className="text-xs font-bold text-[#7A8065]">
                  02
                </span>
              </div>


              {/* PROJECT */}
              <div className="md:col-span-8">

                <h3 className="text-[clamp(2rem,3.8vw,4rem)] font-black uppercase tracking-[-0.055em] leading-[0.85] hover:text-[#7A8065] transition-colors">
                  Unemployment Analysis
                </h3>

                <p className="mt-4 max-w-xl text-sm sm:text-base text-[#55554E] leading-relaxed">
                  A data analysis project exploring unemployment trends
                  across India and examining the impact of the COVID-19
                  period using statistical analysis and visualization.
                </p>

                <div className="flex flex-wrap gap-2 mt-5">

                  {[
                    "Python",
                    "Pandas",
                    "Data Analysis",
                    "Visualization",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 border border-[#D8D5CC] text-[10px] uppercase tracking-[0.08em] text-[#6F7068]"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>


              {/* TYPE + LINKS */}
              <div className="md:col-span-3 md:text-right pt-1">

                <p className="text-[10px] uppercase tracking-[0.2em] text-[#7A8065]">
                  DATA SCIENCE
                </p>

                <div className="flex md:justify-end items-center gap-3 mt-2">

                  <a
                    href="YOUR_UNEMPLOYMENT_GITHUB_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold uppercase tracking-[0.08em] hover:text-[#7A8065] transition-colors"
                  >
                    GitHub ↗
                  </a>

                  <span className="text-[#B5B2A8] text-[10px]">
                    •
                  </span>

                  <a
                    href="YOUR_UNEMPLOYMENT_LIVE_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold uppercase tracking-[0.08em] hover:text-[#7A8065] transition-colors"
                  >
                    Live Demo ↗
                  </a>

                </div>

              </div>

            </div>

          </motion.article>


          {/* WORK FOOTER */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border-t border-[#BDBBB2] pt-6 flex items-center justify-between"
          >

            <p className="font-serif italic text-lg text-[#6F7068]">
              More experiments in progress.
            </p>

            <span className="text-[10px] tracking-[0.2em] text-[#7A8065]">
              02
            </span>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          SKILLS / 03
      ===================================================== */}

      <section
        id="skills"
        className="relative bg-[#E5E0D8] text-[#171717] px-5 sm:px-8 md:px-12 lg:px-16 py-20 sm:py-24 lg:py-28 overflow-hidden"
      >

        {/* BACKGROUND EFFECT 01 */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-28 -right-28 w-80 h-80 rounded-full bg-[#C8CF9F]/35 blur-3xl pointer-events-none"
        />


        {/* BACKGROUND EFFECT 02 */}
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 -left-32 w-96 h-96 rounded-full bg-[#AEB67D]/20 blur-3xl pointer-events-none"
        />


        <div className="max-w-6xl mx-auto relative z-10">


          {/* SECTION LABEL */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-7"
          >

            <span className="text-[11px] sm:text-xs font-bold tracking-[0.28em] uppercase text-[#7A8065]">
              Skills / 03
            </span>

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-[2px] bg-[#8B9270]"
            />

          </motion.div>


          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >

            <h2 className="text-[clamp(2.8rem,6vw,5.8rem)] leading-[0.86] tracking-[-0.055em] font-black uppercase">

              Engineering &{" "}

              <motion.span
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="font-serif italic font-normal normal-case text-[#8B9270]"
              >
                Technical
              </motion.span>{" "}

              Skills

            </h2>


            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 max-w-2xl text-sm sm:text-base text-[#5F6258] leading-relaxed"
            >
              A focused collection of technologies, technical foundations,
              and tools I use to learn, experiment, and build.
            </motion.p>

          </motion.div>


          {/* SKILL CATEGORIES */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">


            {/* PROGRAMMING */}
            <SkillCategory
              number="01"
              title="Programming Languages"
              skills={[
                ["Python", "Programming, scripting & AI/ML development"],
                ["C++", "Object-oriented programming & DSA"],
                ["JavaScript", "Web development & API integration"],
                ["SQL", "Queries, joins & database operations"],
                ["Java", "Basic programming & OOP"],
              ]}
              delay={0}
            />


            {/* AI / ML */}
            <SkillCategory
              number="02"
              title="AI / Machine Learning"
              skills={[
                ["Machine Learning", "Supervised, unsupervised & predictive modeling"],
                ["Data Analysis", "EDA, preprocessing & visualization"],
                ["Computer Vision", "Image processing & visual recognition"],
                ["CNN", "Deep learning for image classification"],
                ["TensorFlow / Keras", "Neural network model development"],
                ["Scikit-learn", "ML algorithms, evaluation & preprocessing"],
              ]}
              delay={0.1}
            />


            {/* DEVELOPMENT */}
            <SkillCategory
              number="03"
              title="Development"
              skills={[
                ["HTML", "Semantic structure & modern web layouts"],
                ["CSS", "Responsive styling & visual interfaces"],
                ["FastAPI", "Backend APIs & Python web services"],
                ["API Integration", "Connecting applications with external services"],
              ]}
              delay={0.2}
            />


            {/* CORE CS */}
            <SkillCategory
              number="04"
              title="Core Computer Science"
              skills={[
                ["Data Structures & Algorithms", "Problem solving & algorithmic thinking"],
                ["OOP", "Classes, objects, inheritance & abstraction"],
                ["DBMS", "Database concepts, queries & normalization"],
                ["Software Engineering", "Development practices & software design"],
              ]}
              delay={0.3}
            />


            {/* TOOLS */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:col-span-2 group relative border border-[#D0D3BF] bg-white/75 backdrop-blur-sm p-5 sm:p-7 overflow-hidden transition-all duration-500 hover:border-[#8B9270] hover:shadow-[0_18px_45px_rgba(122,128,101,0.12)]"
            >

              {/* Animated line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute top-0 left-0 h-[3px] bg-[#8B9270]"
              />

              {/* Glow */}
              <div className="absolute -top-24 right-10 w-48 h-48 rounded-full bg-[#C8CF9F]/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />


              <div className="relative flex items-center gap-3 pb-5 border-b border-[#D0D3BF]">

                <span className="text-xs font-bold text-[#7A8065]">
                  /05
                </span>

                <h3 className="text-sm sm:text-base font-black uppercase tracking-[0.04em]">
                  Tools & Platforms
                </h3>

              </div>


              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">

                {[
                  ["Git / GitHub", "Version control & collaboration"],
                  ["VS Code", "Primary development environment"],
                  ["Jupyter", "Data analysis & ML workflows"],
                  ["MySQL Workbench", "Database design & SQL"],
                ].map(([name, desc], index) => (

                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.45 + index * 0.08,
                    }}
                    whileHover={{
                      y: -6,
                      scale: 1.02,
                    }}
                    className="border border-[#D6D8C9] bg-[#F5F2EA] p-4 sm:p-5 transition-all duration-300 hover:border-[#8B9270] hover:bg-[#EEF0E2] hover:shadow-[0_12px_30px_rgba(122,128,101,0.15)]"
                  >

                    <h4 className="font-bold text-sm sm:text-base">
                      {name}
                    </h4>

                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#65685F]">
                      {desc}
                    </p>

                    <p className="mt-4 text-[9px] uppercase tracking-[0.15em] text-[#8B9270]">
                      • Tool
                    </p>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          </div>


          {/* CURRENTLY EXPLORING */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-9 relative overflow-hidden border-2 border-[#8B9270] bg-white/75 px-6 sm:px-8 py-6 sm:py-7"
          >

            {/* Moving light */}
            <motion.div
              animate={{
                x: ["-120%", "250%"],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 left-0 w-1/3 h-full bg-white/35 blur-2xl pointer-events-none"
            />


            <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">

              <div className="flex items-center gap-3 shrink-0">

                <motion.span
                  animate={{
                    scale: [1, 1.35, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="w-2 h-2 rounded-full bg-[#7A8065]"
                />

                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#62694F]">
                  Currently Exploring
                </p>

              </div>


              <div className="hidden sm:block w-8 h-px bg-[#AAB18C]" />


              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm sm:text-base font-medium text-[#45483F]">

                <span className="hover:text-[#7A8065] transition-colors">
                  Generative AI
                </span>

                <span className="text-[#9AA078]">•</span>

                <span className="hover:text-[#7A8065] transition-colors">
                  Agentic AI
                </span>

                <span className="text-[#9AA078]">•</span>

                <span className="hover:text-[#7A8065] transition-colors">
                  Reinforcement Learning
                </span>

                <span className="text-[#9AA078]">•</span>

                <span className="hover:text-[#7A8065] transition-colors">
                  App Development
                </span>

              </div>

            </div>

          </motion.div>


          {/* BOTTOM */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 flex items-center justify-between"
          >

            <p className="font-serif italic text-lg sm:text-xl text-[#6F7068]">
              Always learning. Always building.
            </p>

            <span className="text-[10px] font-bold tracking-[0.2em] text-[#7A8065]">
              03
            </span>

          </motion.div>

        </div>
      </section>


      {/* ==================== ACHIEVEMENTS ==================== */}
      <section
        id="achievements"
        className="relative w-full max-w-full bg-[#242421] px-5 sm:px-8 md:px-10 lg:px-16 py-14 sm:py-18 lg:py-20 overflow-x-hidden"
      >
        <div className="mx-auto w-full max-w-7xl min-w-0">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8 sm:mb-10"
          >
            <div className="flex items-end justify-between gap-5">
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#AEB67D]">
                  /05
                </p>

                <h2 className="mt-2 max-w-full break-words font-sans font-black uppercase text-[clamp(2.7rem,10vw,5.5rem)] leading-[0.82] tracking-[-0.065em] text-[#F5F2EA]">
                  ACHIEVEMENTS
                </h2>
              </div>

              <p className="hidden md:block max-w-xs shrink-0 text-right font-serif italic text-xl text-[#B8B7AE]">
                Beyond the classroom.
              </p>
            </div>

            <p className="mt-4 max-w-[620px] text-xs sm:text-sm leading-relaxed text-[#B8B7AE]">
              Milestones, events and experiences that have shaped my journey
              beyond academics.
            </p>
          </motion.div>

          {/* Achievement List */}
          <div className="w-full min-w-0 border-t border-[#4A4A45]">

            <AchievementRow
              number="01"
              title="ZYNK INDUSTRY BASED HACKATHON"
              subtitle="Amity University Madhya Pradesh"
              tag="RANK 07"
              delay={0}
            />

            <AchievementRow
              number="02"
              title="SMART INDIA HACKATHON"
              subtitle="Selected for Round 02"
              tag="ROUND 02"
              delay={0.06}
            />

            <AchievementRow
              number="03"
              title="GOOGLE GEMINI — BATTLE OF BANDS"
              subtitle="The Raagsters · GSA Program"
              tag="1ST PLACE"
              delay={0.12}
            />

            <AchievementRow
              number="04"
              title="AMITY CODING CLUB"
              subtitle="Technical Team Member"
              tag="TECHNICAL TEAM"
              delay={0.18}
            />

            <AchievementRow
              number="05"
              title="HACKSETU"
              subtitle="Hackathon Volunteer · 24 HR"
              tag="VOLUNTEER"
              delay={0.24}
            />

            <AchievementRow
              number="06"
              title="MICROSOFT"
              subtitle="Generative AI Workshop"
              tag="WORKSHOP"
              delay={0.30}
            />

            <AchievementRow
              number="07"
              title="SALESFORCE"
              subtitle="Agentic AI Workshop"
              tag="WORKSHOP"
              delay={0.36}
            />

            <AchievementRow
              number="08"
              title="IIT ROORKEE — COGNIZANCE"
              subtitle="Technical Lecture / Session"
              tag="IIT ROORKEE"
              delay={0.42}
            />

            <AchievementRow
              number="09"
              title="GDG GWALIOR — DEVFEST"
              subtitle="Developer Community Event"
              tag="DEVFEST"
              delay={0.48}
            />

          </div>

        </div>
      </section>

{/* ================= EXPERIENCE ================= */}
<section
  id="experience"
  className="relative bg-[#E7E9DC] px-5 sm:px-8 lg:px-12 py-18 sm:py-22 overflow-hidden"
>
  {/* Soft decorative background */}
  <motion.div
    animate={{
      y: [0, -20, 0],
      x: [0, 15, 0],
      opacity: [0.12, 0.2, 0.12],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      -top-32
      -right-32
      w-80
      h-80
      rounded-full
      bg-[#AEB67D]
      blur-3xl
      pointer-events-none
    "
  />

  <motion.div
    animate={{
      y: [0, 20, 0],
      x: [0, -15, 0],
      opacity: [0.08, 0.14, 0.08],
    }}
    transition={{
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      -bottom-40
      -left-40
      w-96
      h-96
      rounded-full
      bg-[#C8CF9F]
      blur-3xl
      pointer-events-none
    "
  />

  <div className="relative mx-auto max-w-6xl">

    {/* ================= SECTION HEADER ================= */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        flex
        items-center
        justify-between
        border-b
        border-[#AEB3A0]
        pb-6
      "
    >
      <div className="flex items-center gap-4">

        <span className="text-sm font-bold text-[#6F7655]">
          /05
        </span>

        <span
          className="
            text-sm
            sm:text-base
            font-bold
            uppercase
            tracking-[0.15em]
            text-[#5F6258]
          "
        >
          Experience
        </span>

      </div>

      <span
        className="
          hidden
          sm:block
          text-[10px]
          uppercase
          tracking-[0.18em]
          text-[#7B7E72]
        "
      >
        Professional Journey
      </span>

    </motion.div>


    {/* ================= HEADING ================= */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="pt-10 pb-8"
    >

      <h2
        className="
          max-w-3xl
          font-serif
          italic
          text-4xl
          sm:text-5xl
          lg:text-6xl
          leading-[0.95]
          text-[#242421]
        "
      >
        Building experience.
      </h2>

      <p
        className="
          mt-6
          max-w-2xl
          text-sm
          sm:text-base
          leading-relaxed
          text-[#62645C]
        "
      >
        From web development to software engineering, continuously
        learning through real-world projects and professional work.
      </p>

    </motion.div>


    {/* ================= EXPERIENCE LIST ================= */}
    <div
      className="
        overflow-hidden
        border-t
        border-[#AEB3A0]
        bg-[#F5F2EA]/60
        backdrop-blur-sm
      "
    >

      {/* ================= EXPERIENCE 01 ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          group
          grid
          grid-cols-[40px_minmax(0,1fr)]
          sm:grid-cols-[60px_minmax(0,1fr)_210px]
          gap-x-5
          sm:gap-x-8
          p-6
          sm:p-8
          lg:p-9
          border-b
          border-[#C7C9BC]
          transition-all
          duration-300
          hover:bg-[#F5F2EA]
        "
      >

        {/* Number */}
        <span
          className="
            pt-1
            text-sm
            font-bold
            text-[#6F7655]
          "
        >
          01
        </span>


        {/* Main Content */}
        <div className="min-w-0">

          <p
            className="
              text-[10px]
              sm:text-xs
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#6F7655]
              mb-3
            "
          >
            Web Development
          </p>


          <h3
            className="
              font-sans
              font-black
              text-lg
              sm:text-xl
              lg:text-2xl
              uppercase
              tracking-tight
              text-[#242421]
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            Web Development Intern
          </h3>


          <p
            className="
              mt-3
              text-sm
              sm:text-base
              font-semibold
              text-[#4F5249]
            "
          >
            THE HS TECHNOLOGIES
          </p>


          <p
            className="
              mt-4
              max-w-2xl
              text-xs
              sm:text-sm
              leading-relaxed
              text-[#6A6C63]
            "
          >
            Completed a web development internship, gaining professional
            experience in a team-based development environment.
          </p>


          {/* Mobile Details */}
          <div className="flex sm:hidden flex-wrap gap-2 mt-5">

            <span
              className="
                border
                border-[#9EA58A]
                bg-[#E7E9DC]
                px-3
                py-1.5
                text-[9px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-[#6F7655]
              "
            >
              02 JUL — 16 AUG 2026
            </span>

            <span
              className="
                border
                border-[#9EA58A]
                bg-[#E7E9DC]
                px-3
                py-1.5
                text-[9px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-[#6F7655]
              "
            >
              HYBRID
            </span>

          </div>

        </div>


        {/* Desktop Details */}
        <div
          className="
            hidden
            sm:flex
            flex-col
            items-end
            gap-4
            pt-1
          "
        >

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#6F7655]
              text-right
            "
          >
            02 JUL 2026 — 16 AUG 2026
          </span>

          <span
            className="
              border
              border-[#9EA58A]
              bg-[#E7E9DC]
              px-3
              py-1.5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#6F7655]
            "
          >
            Hybrid
          </span>

        </div>

      </motion.div>


      {/* ================= EXPERIENCE 02 ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.12 }}
        className="
          group
          grid
          grid-cols-[40px_minmax(0,1fr)]
          sm:grid-cols-[60px_minmax(0,1fr)_210px]
          gap-x-5
          sm:gap-x-8
          p-7
          sm:p-9
          lg:p-10
          transition-all
          duration-300
          hover:bg-[#F5F2EA]
        "
      >

        {/* Number */}
        <span
          className="
            pt-1
            text-sm
            font-bold
            text-[#6F7655]
          "
        >
          02
        </span>


        {/* Main Content */}
        <div className="min-w-0">

          <div className="flex flex-wrap items-center gap-3 mb-3">

            <p
              className="
                text-[10px]
                sm:text-xs
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#6F7655]
              "
            >
              Software Engineering
            </p>


            <span
              className="
                inline-flex
                items-center
                gap-2
                border
                border-[#7D8760]
                bg-[#7D8760]
                px-2.5
                py-1.5
                text-[9px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#F5F2EA]
              "
            >

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#D9DDCB]
                  animate-pulse
                "
              />

              Ongoing

            </span>

          </div>


          <h3
            className="
              font-sans
              font-black
              text-xl
              sm:text-2xl
              lg:text-3xl
              uppercase
              tracking-tight
              text-[#242421]
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            Software Engineer
          </h3>


          <p
            className="
              mt-3
              text-base
              sm:text-lg
              font-semibold
              text-[#4F5249]
            "
          >
            SOMYA INNOVATIONS
          </p>


          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              sm:text-base
              leading-relaxed
              text-[#6A6C63]
            "
          >
            Currently working on a CRM Business Dashboard, contributing
            to the development of software solutions for business operations.
          </p>


          {/* Current Focus */}
          <div
            className="
              mt-5
              inline-flex
              items-center
              gap-3
              border-l-2
              border-[#7D8760]
              pl-4
            "
          >

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-[#6F7655]
              "
            >
              Current Focus
            </span>

            <span
              className="
                text-xs
                sm:text-sm
                font-semibold
                text-[#4F5249]
              "
            >
              CRM Business Dashboard
            </span>

          </div>


          {/* Mobile Details */}
          <div className="flex sm:hidden flex-wrap gap-2 mt-5">

            <span
              className="
                border
                border-[#9EA58A]
                bg-[#E7E9DC]
                px-3
                py-1.5
                text-[9px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-[#6F7655]
              "
            >
              23 SEP 2026 — PRESENT
            </span>

          </div>

        </div>


        {/* Desktop Details */}
        <div
          className="
            hidden
            sm:flex
            flex-col
            items-end
            gap-4
            pt-1
          "
        >

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#6F7655]
              text-right
            "
          >
            23 SEP 2026 — PRESENT
          </span>


          <span
            className="
              border
              border-[#7D8760]
              bg-[#7D8760]
              px-3
              py-1.5
              text-[9px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-[#F5F2EA]
            "
          >
            Ongoing
          </span>

        </div>

      </motion.div>

    </div>

  </div>
</section>



{/* ================= CONTACT / EXIT ================= */}
<section
  id="contact"
  className="relative overflow-hidden bg-[#242421] px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24"
>
  {/* ================= ANIMATED BACKGROUND ================= */}

  <motion.div
    animate={{
      x: [0, 50, 0],
      y: [0, -30, 0],
      scale: [1, 1.12, 1],
      opacity: [0.12, 0.2, 0.12],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#AEB67D] blur-[110px]"
  />

  <motion.div
    animate={{
      x: [0, -40, 0],
      y: [0, 30, 0],
      scale: [1, 1.08, 1],
      opacity: [0.06, 0.13, 0.06],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -bottom-48 -left-40 h-[450px] w-[450px] rounded-full bg-[#8B9270] blur-[110px]"
  />

  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      duration: 35,
      repeat: Infinity,
      ease: "linear",
    }}
    className="pointer-events-none absolute right-[5%] top-[18%] hidden h-[320px] w-[320px] rounded-full border border-[#AEB67D]/10 lg:block"
  />

  <div className="relative z-10 mx-auto max-w-6xl">

    {/* ================= TOP BAR ================= */}

    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex items-center justify-between border-b border-[#606653] pb-5"
    >
      <div className="flex items-center gap-3">
        <span className="text-xs font-bold text-[#C8CF9F]">
          /06
        </span>

        <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.17em] text-[#F5F2EA]">
          Contact
        </span>
      </div>

      <span className="hidden sm:block text-[9px] uppercase tracking-[0.2em] text-[#AEB67D]">
        Let&apos;s connect
      </span>
    </motion.div>


    {/* ================= MAIN CONTACT ================= */}

    <div className="grid grid-cols-1 gap-14 pt-16 sm:pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:pt-24">

      {/* ================= LEFT ================= */}

      <div className="relative">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#AEB67D] sm:text-xs"
        >
          Open to opportunities
        </motion.p>


        {/* BIG HEADING */}

<div className="overflow-visible">
            <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 max-w-4xl font-serif text-[clamp(3.2rem,9vw,7.5rem)] italic leading-[0.78] tracking-[-0.06em] text-[#F5F2EA]"
          >
            Let&apos;s
            <br />
            <span className="text-[#D9DDCB]">
              build.
            </span>
          </motion.h2>
        </div>


        {/* ACCENT LINE */}

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.35,
            ease: "easeOut",
          }}
          className="mt-8 h-[3px] bg-[#AEB67D]"
        />


        {/* DESCRIPTION */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
          className="mt-7 max-w-xl text-sm leading-relaxed text-[#D0D2C7] sm:text-base"
        >
          I&apos;m interested in building meaningful software,
          exploring AI / ML, and working on problems that
          challenge me to keep learning.
        </motion.p>


        {/* AVAILABILITY */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.55,
          }}
          className="mt-8 flex items-center gap-3"
        >
          <span className="relative flex h-2.5 w-2.5">

            <motion.span
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-0 rounded-full bg-[#C8CF9F]"
            />

            <span className="relative h-2.5 w-2.5 rounded-full bg-[#C8CF9F]" />
          </span>

          <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#D9DDCB] sm:text-[10px]">
            Available for opportunities
          </span>
        </motion.div>

      </div>


      {/* ================= RIGHT ================= */}

      <motion.div
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.15,
        }}
        className="flex flex-col justify-end"
      >

        {/* AVAILABLE FOR */}

        <div className="border-t border-[#606653] py-6">
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#AEB67D]">
            Available for
          </p>

          <div className="mt-5 space-y-2">
            <p className="text-base font-bold text-[#F5F2EA] sm:text-lg">
              Software Engineering
            </p>

            <p className="text-base font-bold text-[#F5F2EA] sm:text-lg">
              AI / ML
            </p>

            <p className="text-base font-bold text-[#F5F2EA] sm:text-lg">
              Data & Development
            </p>
          </div>
        </div>


        {/* EMAIL */}

        <a
          href="mailto:nisthajain609@gmail.com"
          className="group flex items-center justify-between gap-4 border-t border-[#606653] py-6 transition-all duration-300 hover:bg-[#3F4437] hover:px-3"
        >
          <div className="min-w-0">
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#AEB67D]">
              Email
            </p>

            <p className="mt-2 break-all text-sm font-semibold text-[#F5F2EA] sm:text-base">
              nisthajain609@gmail.com
            </p>
          </div>

          <span className="shrink-0 text-lg text-[#AEB67D] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </a>


        {/* LINKEDIN */}

        <a
          href="https://www.linkedin.com/in/nistha-jain-577ab0340?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-4 border-t border-[#606653] py-6 transition-all duration-300 hover:bg-[#3F4437] hover:px-3"
        >
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#AEB67D]">
              LinkedIn
            </p>

            <p className="mt-2 text-sm font-semibold text-[#F5F2EA] sm:text-base">
              Connect with me
            </p>
          </div>

          <span className="text-lg text-[#AEB67D] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </a>


        {/* GITHUB */}

        <a
          href="https://github.com/NisthaJain698"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-4 border-t border-[#606653] py-6 transition-all duration-300 hover:bg-[#3F4437] hover:px-3"
        >
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#AEB67D]">
              GitHub
            </p>

            <p className="mt-2 text-sm font-semibold text-[#F5F2EA] sm:text-base">
              Explore my work
            </p>
          </div>

          <span className="text-lg text-[#AEB67D] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </a>

      </motion.div>
    </div>


    {/* ================= MOVING MARQUEE ================= */}

    <div className="relative mt-16 overflow-hidden border-y border-[#606653] py-5 sm:mt-20">
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max whitespace-nowrap"
      >
        {[
          "SOFTWARE ENGINEERING",
          "AI / ML",
          "BUILD",
          "LEARN",
          "CREATE",
          "DATA",
          "DEVELOPMENT",
          "SOFTWARE ENGINEERING",
          "AI / ML",
          "BUILD",
          "LEARN",
          "CREATE",
          "DATA",
          "DEVELOPMENT",
        ].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-6 px-4"
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#D9DDCB] sm:text-[10px]">
              {item}
            </span>

            <span className="text-sm text-[#AEB67D]">
              ×
            </span>
          </div>
        ))}
      </motion.div>
    </div>


    {/* ================= FINAL CTA ================= */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-16 border-t border-[#606653] pt-8 sm:mt-20"
    >
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">

        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#AEB67D]">
            Have a project or opportunity?
          </p>

          <p className="mt-2 text-sm font-semibold text-[#D9DDCB] sm:text-base">
            Let&apos;s make something meaningful.
          </p>
        </div>


        <a
          href="mailto:nisthajain609@gmail.com"
          className="group inline-flex w-full items-center justify-center gap-4 bg-[#C8CF9F] px-7 py-4 text-[10px] font-black uppercase tracking-[0.16em] text-[#303229] transition-all duration-300 hover:gap-6 hover:bg-[#F5F2EA] sm:w-auto"
        >
          <span>
            Get in touch
          </span>

          <span className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </a>

      </div>
    </motion.div>


    {/* ================= FINAL EXIT ================= */}

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: 0.25,
      }}
      className="pb-2 pt-16 text-center sm:pt-20"
    >
      <p className="font-serif text-xl italic text-[#C8CF9F] sm:text-2xl">
        Always learning. Always building.
      </p>

      <motion.div
        animate={{
          width: [35, 90, 35],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mx-auto mt-5 h-px bg-[#AEB67D]"
      />
    </motion.div>

  </div>
</section>

{/* ================= FOOTER ================= */}
<footer className="bg-[#50583F] text-[#F5F2EA] px-5 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-12">

  <div className="mx-auto max-w-7xl">

    {/* TOP */}
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

      {/* BRAND */}
      <div>
        <p className="text-2xl sm:text-3xl font-black tracking-[-0.05em]">
          NISTHA.
        </p>

        <p className="mt-2 text-xs sm:text-sm font-medium text-[#D5D8C8]">
          Software Engineer × AI / ML
        </p>
      </div>


      {/* LINKS */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">

        <a
          href="#home"
          className="
            text-[10px]
            sm:text-[11px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-[#E1E3D8]
            transition-colors
            duration-300
            hover:text-[#FFFFFF]
          "
        >
          Home
        </a>

        <a
          href="#projects"
          className="
            text-[10px]
            sm:text-[11px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-[#E1E3D8]
            transition-colors
            duration-300
            hover:text-[#FFFFFF]
          "
        >
          Work
        </a>

        <a
          href="#experience"
          className="
            text-[10px]
            sm:text-[11px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-[#E1E3D8]
            transition-colors
            duration-300
            hover:text-[#FFFFFF]
          "
        >
          Experience
        </a>

        <a
          href="#contact"
          className="
            text-[10px]
            sm:text-[11px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-[#E1E3D8]
            transition-colors
            duration-300
            hover:text-[#FFFFFF]
          "
        >
          Contact
        </a>

        {/* RESUME */}
        <a
          href="Nistha_Resume.docx"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            inline-flex
            items-center
            gap-1.5
            border
            border-[#D5D8C8]
            px-3
            py-2
            text-[9px]
            font-bold
            uppercase
            tracking-[0.15em]
            text-[#F5F2EA]
            transition-all
            duration-300
            hover:bg-[#F5F2EA]
            hover:text-[#50583F]
          "
        >
          Resume

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </a>

      </div>

    </div>


    {/* DIVIDER */}
    <div className="my-8 h-px bg-[#858C6F]/60" />


    {/* BOTTOM */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">

      <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-[#C2C6B3]">
        © 2026 Nistha Jain
      </p>

      <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-[#C2C6B3]">
        Portfolio '26
      </p>

      <a
        href="#home"
        className="
          text-[9px]
          sm:text-[10px]
          font-bold
          uppercase
          tracking-[0.15em]
          text-[#C2C6B3]
          transition-colors
          duration-300
          hover:text-[#FFFFFF]
        "
      >
        Back to top ↑
      </a>

    </div>

  </div>

</footer>

</main>
  );
}