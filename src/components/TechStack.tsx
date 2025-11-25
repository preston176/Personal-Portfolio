"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaNpm } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJest, SiPostgresql, SiFigma, SiPrisma } from "react-icons/si";
import { SkillItems } from "@/components/SkillItems";

const skillSet = [
  { title: "JavaScript", icon: FaJs },
  { title: "TypeScript", icon: SiTypescript },
  { title: "HTML5", icon: FaHtml5 },
  { title: "CSS3", icon: FaCss3Alt },
  { title: "React", icon: FaReact },
  { title: "Next.js", icon: SiNextdotjs },
  { title: "Prisma", icon: SiPrisma },
  { title: "Tailwind CSS", icon: SiTailwindcss },
  { title: "Node.js", icon: FaNodeJs },
  { title: "PostgreSQL", icon: SiPostgresql },
  { title: "Git", icon: FaGitAlt },
  { title: "GitHub", icon: FaGithub },
  { title: "NPM", icon: FaNpm },
  { title: "Jest", icon: SiJest },
  { title: "Figma", icon: SiFigma },
];

export const TechStack = () => {
  return (
    <div className="relative w-full mt-6 overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex flex-col gap-4"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <div className="flex gap-6">
          <SkillItems skillSet={skillSet.slice(0, skillSet.length / 2)} />
        </div>
        <div className="flex gap-6">
          <SkillItems skillSet={skillSet.slice(skillSet.length / 2)} />
        </div>
      </motion.div>
    </div>
  );
};
