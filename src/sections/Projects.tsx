"use client"

import SectionHeader from "@/components/SectionHeader";
import { portfolioProjects } from "../../lib/constants";
import ProjectCard from "@/components/ProjectCard";

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader eyebrow=" Real-world Results" title="Featured Projects" description="Explore impactful projects that delivered real-world value." />
        <div className="mt-10 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <div
              key={index}
              className="sticky"
              style={{
                top: `${40 + index * 40}px`,
                marginBottom: index < portfolioProjects.length - 1 ? '120px' : '0',
                zIndex: index + 1,
              }}
            >
              <ProjectCard index={index} project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};