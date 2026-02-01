"use client"

import SectionHeader from "@/components/SectionHeader"
import { motion } from "framer-motion"
import { containerVariants } from "@/constants/animationVariants"
import { StatsBar } from "./about/StatsBar"
import { ShippedProjectsCard } from "./about/ShippedProjectsCard"
import { AutomationCard } from "./about/AutomationCard"
import { TechStackCard } from "./about/TechStackCard"
import { WritingCard } from "./about/WritingCard"
import { ArticlesSection } from "./about/ArticlesSection"

export const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28" id="about">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <SectionHeader
            eyebrow="About Me"
            title="I Build Tools That Save Time & Money"
            description="Shipping products that cut costs and boost productivity"
          />

          <StatsBar />

          <div className="mt-16 space-y-12">
            <ShippedProjectsCard />
            <AutomationCard />
            <TechStackCard />
            <WritingCard />
          </div>

          <ArticlesSection />
        </motion.div>
      </div>
    </section>
  )
}
