import React from 'react'

import Link from "next/link";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image, { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";


interface Project {
    slug: string;
    image: string | StaticImageData;
    title: string;
    company: string;
    year: string | number;
    results: string[];
    description: string;
    technologies?: string[];
    challenges?: string;
    link: string;
    githubLink?: string;
    videoUrl?: string;
    alt: string;
}


const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
    return (
        <article
            key={index}
            className="bg-gray-800 rounded-3xl overflow-hidden shadow-lg px-8 pt-6 md:px-10 lg:px-12 pb-6 border border-white/40"
            aria-labelledby={`project-title-${index}`}
        >
            <div className="w-full rounded-lg overflow-hidden max-h-[300px] md:max-h-[350px]">
                <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top rounded-lg"
                    quality={100}
                    priority={index === 0} // Only prioritize the first project (above the fold)
                    loading={index === 0 ? "eager" : "lazy"} // Eager loading for LCP image, lazy for others
                />

            </div>
            <div className="mt-4">
                <p className="bg-gradient-to-r from-green-500 to-green-200 inline-flex gap-2 font-bold uppercase tracking-widest text-sm bg-clip-text text-transparent">
                    <span>{project.company}</span> <span>&bull;</span> <span>{project.year}</span>
                </p>
                <h3 id={`project-title-${index}`} className="font-serif text-2xl mt-2 md:text-3xl">
                    {project.title}
                </h3>
                <hr className="border-t-2 border-white/5 mt-3" />
            </div>
            <ul className="flex flex-col gap-2 mt-3" role="list">
                {project.results.map((result, i) => (
                    <li key={i} className="flex gap-2 text-sm text-white/50">
                        <CheckCircleIcon className="size-5 flex-shrink-0" aria-hidden="true" />
                        <span>{result}</span>
                    </li>
                ))}
            </ul>
            <div className="flex gap-4 flex-wrap">
                <Link href={`/projects/${project.slug}`}>
                    <button
                        className="bg-gradient-to-r from-green-500 to-green-400 text-gray-950 h-10 md:h-12 w-full md:w-auto px-4 md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-4 hover:from-green-600 hover:to-green-500 transition-all focus:ring-4 focus:ring-green-300 focus:outline-none"
                        aria-label={`Learn more about ${project.title}`}
                    >
                        <span>Learn More</span>
                        <ArrowUpRightIcon className="size-4" aria-hidden="true" />
                    </button>
                </Link>
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <button
                        className="bg-white text-gray-950 h-10 md:h-12 w-full md:w-auto px-4 md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-4 hover:bg-gray-100 transition-colors focus:ring-4 focus:ring-green-300 focus:outline-none"
                        aria-label={`View live site for ${project.title}`}
                    >
                        <span>View Live Site</span>
                        <ArrowUpRightIcon className="size-4" aria-hidden="true" />
                    </button>
                </Link>
                {project.githubLink &&
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <button
                            className=" border border-white/15 text-white h-10 md:h-12 w-full md:w-auto px-4 md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-4 hover:bg-white/5 transition-colors focus:ring-4 focus:ring-green-300 focus:outline-none"
                            aria-label={`View GitHub repository for ${project.title}`}
                        >
                            <span>View GitHub</span>
                            <FaGithub />
                        </button>
                    </Link>
                }
            </div>
        </article>
    )
}

export default ProjectCard