"use client"

import SectionHeader from "@/components/SectionHeader";
import { portfolioProjects } from "../../lib/constants";
import ProjectCard from "@/components/ProjectCard";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export const ProjectsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
    });
  }, []);

  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader eyebrow=" Real-world Results" title="Featured Projects" description="Explore impactful projects that delivered real-world value." />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <ProjectCard key={index} index={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};