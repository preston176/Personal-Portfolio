

const Projects = () => {
  const projectsData = [
    {
      title: "Nexus AI",
      description: "Nexus AI is an innovative platform designed to empower users by securely storing their documents and providing intelligent, document-based responses",
      photo: "/images/projects/nexusai.PNG",
      liveURL: "https://nexusai-pdf.vercel.app/",
      repoURL: "https://github.com/preston176/nexusAI",
      altText: "An image of NexusAI project"
    },
    {
      title: "YTDL- Youtube Downloader",
      description: "Download your Favourite YouTube videos and music for Free. No Ads.",
      photo: "/images/projects/ytdl.PNG",
      liveURL: "https://ytdl-next.vercel.app",
      repoURL: "https://github.com/preston176/ytdl-next",
      altText: "An image of YTDL project"
    },

    {
      title: "PostmanToOpenAPIConverter",
      description: "Convert Postman collections to OpenSpecAPI",
      photo: "/images/projects/postmanopenspec.png",
      liveURL: "https://postmantoopenapiconverter.netlify.app/",
      repoURL: "https://github.com/preston176/PostmanToOpenAPIConverter",
      altText: "An image of my collaborative Project"
    },
  ]


  return (
    <div className='px-7 md:px-10 my-8' id='projects'>
      <h1 className='text-3xl mt-5 text-primary font-semibold'>Projects</h1>
      <p className='text-white my-2 md:w-2/3 leading-[2]'>I have worked on a number of projects ... checkout some of my featured projects</p>
      {/* project items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {
          projectsData.map((project) =>
            <div key={crypto.randomUUID()} className='project-card flex flex-col shadow-sm md:w-[343px] border border-white rounded p-4'>
              <a href={project.photo} className='mb-4'>
                <img src={project.photo} alt={project.altText} />
              </a>
              <h3 className='text-primary font-semibold text-lg'>{project.title}</h3>
              <p className='text-white mt-1'>{project.description}</p>
              {/* btns */}
              <div className="mt-5">
                <a href={project.liveURL} target="_blank"> <button className=' bg-white py-2 px-4 text-black rounded  hover:bg-black hover:text-white transition-all duration-500'>Live Preview</button></a>
                <a href={project.repoURL} target="_blank"> <button className=' outline px-5 py-1.5 rounded border-none text-white ml-5'>Git Repo</button></a>
              </div>
            </div>
          )
        }
      </div>


    </div>
  );
};

export default Projects;

// {
//   title: "ChatSphere",
//   description: "A chatting app that lets you talk to your friends",
//   photo: "/images/projects/chatsphere.png",
//   liveURL: "https://chatsphere-chatapp.web.app/",
//   repoURL: "https://github.com/preston176/ChatSphere-react"
// },