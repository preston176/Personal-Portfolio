"use client";

import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import { SocialIcons } from "@/components/SocialIcons";
import Link from "next/link";
import { FloatingParticles } from "@/components/FloatingParticles";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="py-32 md:py-48 lg:mt-6 lg:py-60 font-poppins relative overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Floating Particles */}
      <FloatingParticles />

      <div className="container flex flex-col items-center relative z-10">
        {/* Availability Badge - Centered */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-950 border border-gray-800 px-4 py-1.5 flex items-center gap-4 rounded-lg justify-center"
        >
          <div className="bg-green-500 size-2.5 rounded-full animate-pulse" aria-hidden="true"></div>
          <span className="text-sm font-medium">Available for projects</span>
        </motion.div>

        {/* Hero Title */}
        <div className="max-w-lg md:max-w-2xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mt-8 tracking-wide"
          >
            Hi, I&apos;m  Preston <span className="bg-gradient-to-r from-green-400 to-green-500 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">Mayieka</span>
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:text-lg mt-4 text-white/60"
          >
            A Full-Stack Developer <br /> From Eldoret, Kenya
          </motion.h2>
        </div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex space-x-6 mt-8"
        >
          <SocialIcons />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-4 items-center justify-center mt-8"
        >
        <Link href={"#projects"}>
          <button
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl transition hover:bg-gray-200 hover:text-gray-900"
            aria-label="View my projects"
          >
            <span className="font-semibold">View My Projects</span>
            <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
          </button>
          </Link>
          <Link href={"#contact"}>
            <button
              className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl transition hover:bg-gray-200"
              aria-label="Connect with me"
            >
              <span role="img" aria-label="Wave emoji">👋</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </button></Link>
        </motion.div>


      </div>
    </section>
  );
};
