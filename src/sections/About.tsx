"use client";

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import ArticleImage from "@/assets/images/ArticleImage.png";
import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaNpm } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJest, SiPostgresql, SiFigma, SiPrisma } from "react-icons/si";
import { CardHeader } from "@/components/CardHeader";
import { SkillItems } from "@/components/SkillItems";
import Link from "next/link";
import { motion } from "framer-motion";

// Skill set for the tech stack
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

export const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Crafting Code with Purpose"
          description="Learn more about who I am and what I do"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Link
              href={"https://codewithpres.hashnode.dev/"}
              target="_blank"
              className="hover:scale-105"
            >
              <Card className="h-[320px] md:col-span-2 col-span-3 lg:col-span-1 hover:bg-slate-600 transition duration-150 ease-in">
                <CardHeader
                  title="My Articles"
                  description="Dive into topics I write about—tech, tutorials, and more."
                />
                <div className="w-full my-7 mx-auto">
                  <Image
                    className="rounded-md"
                    src={ArticleImage}
                    alt="Article thumbnail"
                  />
                </div>
              </Card>
            </Link>

            <Card className="h-[320px] p-0 col-span-3 lg:col-span-2 overflow-hidden">
              <CardHeader
                title="Tech Stack"
                description="Explore the technologies and tools I use for my craft"
                className="px-6 pt-6"
              />
              <div className="relative w-full mt-6 overflow-hidden whitespace-nowrap">
                <motion.div
                  className="flex flex-col gap-4"
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                >
                  {/* First Row of Skills */}
                  <div className="flex gap-6">
                    <SkillItems skillSet={skillSet.slice(0, skillSet.length / 2)} />
                  </div>

                  {/* Second Row of Skills */}
                  <div className="flex gap-6">
                    <SkillItems skillSet={skillSet.slice(skillSet.length / 2)} />
                  </div>
                </motion.div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
