import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Projects = () => {
  const projectsData = [
    {
      title: "Nexus AI",
      description: "Securely store and chat with your Documents efficiently",
      photo: "/images/projects/nexusai.PNG",
      liveURL: "https://nexusai-pdf.vercel.app/",
      repoURL: "https://github.com/preston176/nexusAI",
      altText: "An image of NexusAI project",
    },
    {
      title: "YTDL- Youtube Downloader",
      description: "Download your Favourite YouTube videos and music for Free. No Ads.",
      photo: "/images/projects/ytdl.PNG",
      liveURL: "https://ytdl-next.vercel.app",
      repoURL: "https://github.com/preston176/ytdl-next",
      altText: "An image of YTDL project",
    },
    {
      title: "Postman To OpenAPI Converter",
      description: "Convert Postman collections to OpenSpecAPI",
      photo: "/images/projects/postmanopenspec.png",
      liveURL: "https://postmantoopenapiconverter.netlify.app/",
      repoURL: "https://github.com/preston176/PostmanToOpenAPIConverter",
      altText: "An image of my collaborative Project",
    },
  ];

  return (
    <div className="px-7 md:px-10 my-8" id="projects">
      <h1 className="text-4xl mt-5 text-primary font-semibold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {projectsData.map((project) => (
          <Card key={crypto.randomUUID()} className="shadow-md border border-gray-700 bg-[#1a1a29] rounded px-3">
            <CardHeader>
              <Image src={project.photo} alt={project.altText} className="rounded-lg mb-4 w-full" width={1920} height={100} quality={100} />
              <h3 className="text-2xl font-semibold text-primary">{project.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-300">{project.description}</p>
              <div className="mt-5 flex gap-4">
                <a href={project.liveURL} target="_blank" rel="noopener noreferrer">
                  <Button variant={"default"} className=" text-black hover:bg-gray-200 cursor-pointer hover:scale-105">Live Preview</Button>
                </a>
                <a href={project.repoURL} target="_blank" rel="noopener noreferrer">
                  <Button variant="link" className="text-white border-gray-500 cursor-pointer hover:scale-105">Git Repo</Button>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
