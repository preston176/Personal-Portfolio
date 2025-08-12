import React from 'react'

import Link from "next/link";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image, { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";


interface Project {
    image: string | StaticImageData;
    title: string;
    company: string;
    year: string | number;
    results: string[];
    link: string;
    githubLink?: string;
}


const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
    return (
        <article
            key={index}
            className="bg-gray-800 rounded-3xl overflow-hidden shadow-lg px-8 pt-8 md:px-10 lg:px-16 pb-10 border border-white/40"
            aria-labelledby={`project-title-${index}`}
            data-aos="fade-left" 
        >
            <div className="w-full rounded-lg overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto rounded-lg"
                    quality={100}
                    priority={index === 0} // Only prioritize the first project (above the fold)
                    loading={index === 0 ? "eager" : "lazy"} // Eager loading for LCP image, lazy for others
                />

            </div>
            <div className="mt-6">
                <p className="bg-gradient-to-r from-green-500 to-green-200 inline-flex gap-2 font-bold uppercase tracking-widest text-sm bg-clip-text text-transparent">
                    <span>{project.company}</span> <span>&bull;</span> <span>{project.year}</span>
                </p>
                <h3 id={`project-title-${index}`} className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                </h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
            </div>
            <ul className="flex flex-col gap-4 mt-4" role="list">
                {project.results.map((result, i) => (
                    <li key={i} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" aria-hidden="true" />
                        <span>{result}</span>
                    </li>
                ))}
            </ul>
            <div className="flex gap-4">
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <button
                        className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:underline focus:ring-4 focus:ring-green-300 focus:outline-none"
                        aria-label={`View live site for ${project.title}`}
                    >
                        <span>View Live Site</span>
                        <ArrowUpRightIcon className="size-4" aria-hidden="true" />
                    </button>
                </Link>
                {project.githubLink &&
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <button
                            className=" border border-white/15 text-white h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:underline focus:ring-4 focus:ring-green-300 focus:outline-none"
                            aria-label={`View GitHub repository for ${project.title}`}
                        >
                            <span>View GitHub Repository</span>
                            <FaGithub />
                        </button>
                    </Link>
                }
            </div>
        </article>
    )
}

export default ProjectCard