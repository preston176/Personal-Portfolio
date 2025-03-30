import nexusAILandingPage from "@/assets/images/nexus-ai-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Link from "next/link";
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import Image from "next/image";

const portfolioProjects = [
  {
    company: "Solo Project",
    year: "2025",
    title: "NexusAI",
    results: [
      { title: "Learnt how to do Payment integration for SaaS apps." },
      { title: "Used Langchain, Pinecone and Groq for embeddings." },
      { title: "Designed a clean, distraction-free interface." },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: nexusAILandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return <section className="pb-16" id="projects">
    <div className="container">
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-green-500 to-green-200 text-transparent bg-clip-text text-center">Real-world Results</p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured Projects</h2>
      <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto">See how I ...</p>
      <div className="flex flex-col mt-10 gap-20 md:mt-20">
        {
          portfolioProjects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 after:pointer-events-none">

              <div className="bg-gradient-to-r from-green-500 to-green-200 inline-flex gap-2 font-bold uppercase tracking-widest text-sm bg-clip-text text-transparent">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>

              <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
              <Image src={project.image} alt={project.title} className="mt-8 md:-mb-0 rounded-md" quality={100} />
              <ul className="flex flex-col gap-4 mt-4">
                {project.results.map((result, index) => (
                  <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                    <CheckCircleIcon className="size-5 md:size-6" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <Link href={project.link}>
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 mb-6 hover:underline ">
                  <span>View Live Site</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </Link>

            </div>
          ))
        }
      </div>
    </div>
  </section>;
};
