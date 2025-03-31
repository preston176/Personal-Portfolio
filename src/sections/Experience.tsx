"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";

const experienceData = [
  {
    company: "Tech Innovators",
    logo: "/images/company1-logo.png",
    start: "Jan 2023",
    end: "Present",
    title: "Senior Frontend Developer",
    achievements: [
      "Developed a high-performance web app using Next.js and TypeScript.",
      "Implemented SEO best practices, increasing organic traffic by 30%.",
      "Optimized page speed and accessibility, scoring 95+ on Lighthouse."
    ]
  },
  {
    company: "Creative Solutions",
    logo: "/images/company2-logo.png",
    start: "May 2021",
    end: "Dec 2022",
    title: "Frontend Engineer",
    achievements: [
      "Redesigned a SaaS dashboard, improving user engagement by 40%.",
      "Implemented dark mode and accessibility features.",
      "Led a team of 5 developers to build a scalable component library."
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="experience">
      <div className="container">
        <SectionHeader eyebrow="Career Path" title="Experience" description="A glimpse into my professional journey" />
        
          {experienceData.map((experience, index) => (
            <motion.div 
              key={index}
              className="relative pl-10 pb-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
         
              <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-white/40">
                <div className="flex items-center gap-4">
                  <Image src={experience.logo} alt={`${experience.company} logo`} width={50} height={50} className="rounded-full" />
                  <h3 className="font-serif text-xl md:text-2xl">{experience.title}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-400">{experience.company}</p>
                <p className="text-gray-400 text-sm mt-2">{experience.start} - {experience.end}</p>
                <hr className="border-t-2 border-white/5 mt-4" />
                <ul className="flex flex-col gap-4 mt-4" role="list">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-2 text-sm text-white/50">
                      <CheckCircleIcon className="size-5" aria-hidden="true" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
    
      </div>
    </section>
  );
};
