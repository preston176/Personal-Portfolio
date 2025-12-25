import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "../../../../lib/constants";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { FaGithub } from "react-icons/fa";

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = portfolioProjects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Preston Mayieka`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = portfolioProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-8 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-gradient-to-r from-green-500 to-green-200 inline-flex gap-2 font-bold uppercase tracking-widest text-sm bg-clip-text text-transparent">
              {project.company}
            </span>
            <span className="text-green-400">&bull;</span>
            <span className="bg-gradient-to-r from-green-500 to-green-200 inline-flex gap-2 font-bold uppercase tracking-widest text-sm bg-clip-text text-transparent">
              {project.year}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 flex-wrap mb-12">
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-gray-950 h-12 px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors focus:ring-4 focus:ring-green-300 focus:outline-none">
              <span>View Live Site</span>
              <ArrowUpRightIcon className="size-4" />
            </button>
          </Link>
          {project.githubLink && (
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <button className="border border-white/15 text-white h-12 px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 hover:bg-white/5 transition-colors focus:ring-4 focus:ring-green-300 focus:outline-none">
                <span>View GitHub</span>
                <FaGithub className="size-5" />
              </button>
            </Link>
          )}
        </div>

        {/* Backstory Section */}
        {project.backstory && (
          <div className="mb-12 bg-gradient-to-br from-green-500/5 to-green-400/5 border border-green-500/20 rounded-2xl p-8">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">The Story</h2>
            <ul className="space-y-3">
              {(Array.isArray(project.backstory) ? project.backstory : [project.backstory]).map((point: string, index: number) => (
                <li key={index} className="flex gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span className="text-white/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Project Image */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-white/10">
          <Image
            src={project.image}
            alt={project.alt}
            className="w-full h-auto"
            quality={100}
            priority
          />
        </div>

        {/* Video Demo Section */}
        {project.videoUrl && (
          <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Video Demo</h2>
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
              <iframe
                width="100%"
                height="100%"
                src={project.videoUrl.replace("watch?v=", "embed/")}
                title={`${project.title} Demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Key Features */}
            <section>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Key Features</h2>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckCircleIcon className="size-6 flex-shrink-0 text-green-400" />
                    <span className="text-white/80 text-lg">{result}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges */}
            {project.challenges && (
              <section>
                <h2 className="font-serif text-3xl md:text-4xl mb-6">Challenges & Solutions</h2>
                <div className="space-y-6">
                  {/* Challenge */}
                  <div>
                    <h3 className="text-green-400 font-semibold text-lg mb-2">The Challenge</h3>
                    <p className="text-white/80 leading-relaxed">
                      {project.challenges}
                    </p>
                  </div>

                  {/* What I Learned */}
                  {project.lessonsLearned && (
                    <div>
                      <h3 className="text-green-400 font-semibold text-lg mb-3">What I Learned</h3>
                      <ul className="space-y-2">
                        {project.lessonsLearned.map((lesson, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="text-green-400 mt-1">•</span>
                            <span className="text-white/80">{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Impact */}
                  {project.impact && (
                    <div>
                      <h3 className="text-green-400 font-semibold text-lg mb-3">Impact & Growth</h3>
                      <ul className="space-y-2">
                        {project.impact.map((item, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="text-green-400 mt-1">•</span>
                            <span className="text-white/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Technologies */}
            <section className="bg-gray-800 rounded-2xl p-6 border border-white/10 sticky top-8">
              <h3 className="font-serif text-2xl mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-green-500/10 text-green-400 px-3 py-1.5 rounded-lg text-sm font-medium border border-green-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-12 border-t border-white/10 text-center">
          <h3 className="font-serif text-2xl md:text-3xl mb-4">
            Want to see more?
          </h3>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-lg transition-colors"
          >
            View all projects
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
