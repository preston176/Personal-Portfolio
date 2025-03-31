import nexusAILandingPage from "@/assets/images/nexus-ai-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Link from "next/link";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

const portfolioProjects = [
  {
    company: "Solo Project",
    year: "2025",
    title: "NexusAI",
    results: [
      "Learnt how to do Payment integration for SaaS apps.",
      "Used Langchain, Pinecone and Groq for embeddings.",
      "Designed a clean, distraction-free interface."
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: nexusAILandingPage,
    alt: "Screenshot of the NexusAI landing page"
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      "Boosted sales by 20%", "Expanded customer reach by 35%", "Increased brand awareness by 15%"
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
    alt: "Screenshot of the Light Saas Landing Page"
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      "Enhanced user experience by 40%", "Improved site speed by 50%", "Increased mobile traffic by 35%"
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
    alt: "Screenshot of the AI Startup Landing Page"
  }
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader eyebrow=" Real-world Results" title="Featured Project" description="Explore impactful projects that delivered real-world value." />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <article
              key={index}
              className="bg-gray-800 rounded-3xl overflow-hidden shadow-lg px-8 pt-8 md:px-10 lg:px-16 pb-10 border border-white/40"
              aria-labelledby={`project-title-${index}`}
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
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <button
                  className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:underline focus:ring-4 focus:ring-green-300 focus:outline-none"
                  aria-label={`View live site for ${project.title}`}
                >
                  <span>View Live Site</span>
                  <ArrowUpRightIcon className="size-4" aria-hidden="true" />
                </button>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
