import React from 'react';
import { Link } from 'react-scroll';

const Projects = () => {
  const projectsData = [
    {
      title: "MarketHUB",
      description: "An online fully functional e-commerce website",
      photo: "/images/projects/markethub.png",
      liveURL: "https://markethub-f6f5e.web.app/",
      repoURL: "https://github.com/preston176/ShopMART-E-commerce",
      altText: "An image of MarketHUB project"
    },
    {
      title: "BlogSphere",
      description: "A blogging website",
      photo: "/images/projects/blogsphere.png",
      liveURL: "https://blogsphere-react.web.app/",
      repoURL: "https://github.com/preston176/blogging-website-react-js",
      altText: "An image of BlogSphere project"
    },

    {
      title: "Jobify",
      description: "A platform where you can be able to easily post or find jobs",
      photo: "/images/projects/jobify.png",
      liveURL: "https://jobify-app-3o5e.onrender.com/",
      repoURL: "https://github.com/preston176/jobify",
      altText: "An image of Jobify project"
    },
  ]


  return (
    <div className='px-7 md:px-10 my-8' id='projects'>
      <h1 className='text-3xl mt-5 text-primary font-semibold'>Projects</h1>
      <p className='text-white my-2 md:w-2/3 leading-[2]'>I have worked on a number of projects ... checkout some of my featured projects</p>
      {/* project items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {
          projectsData.map((project, i) =>
            <div key={crypto.randomUUID()} className='project-card flex flex-col shadow-sm md:w-[343px] bg-[#31313f] rounded p-4'>
              <a href={project.photo} className='mb-4'>
                <img src={project.photo} alt={altText} />
              </a>
              <h3 className='text-primary font-semibold text-lg'>{project.title}</h3>
              <p className='text-white mt-1'>{project.description}</p>
              {/* btns */}
              <div className="mt-5">
                <a href={project.liveURL}> <button className='btn bg-primary py-2 px-4 text-white rounded hover:bg-white hover:text-primary transition-all duration-500'>Live Preview</button></a>
                <a href={project.repoURL}> <button className='btn outline px-5 py-1.5 rounded border-none text-white ml-5'>Git Repo</button></a>
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