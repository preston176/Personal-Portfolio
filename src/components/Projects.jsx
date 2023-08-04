import React from 'react';

const Projects = () => {
  const projectsData = [
     {title: "",
      description: "",
      photo: ""},
      {title: "",
      description: "",
      photo: ""},
      {title: "",
      description: "",
      photo: ""},
      {title: "",
      description: "",
      photo: ""},
      {title: "",
      description: "",
      photo: ""},
    ]


  return (
    <div className='px-7 md:px-10 my-8' id='projects'>
      <h1 className='text-3xl mt-5 text-primary font-semibold'>Projects</h1>
      <p className='text-white my-2 md:w-2/3 leading-[2]'>I have worked on a number of projects ... checkout some of my featured projects</p>
      {/* project items */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
      {
        projectsData.map((project, i) => 
        <div key={crypto.randomUUID()} className='flex flex-col shadow-sm md:w-[343px] bg-[#31313f] rounded p-4'> 
        <a href={project.photo} className='mb-4'>
        <img src={project.photo} alt="project-image" />
        </a>
        <h3 className='text-primary font-semibold text-lg'>{project.title}</h3>
        <p className='text-white mt-1'>{project.description}</p>
{/* btns */}
        <div className="mt-5">
                        <button className='btn bg-primary py-2 px-4 text-white rounded hover:bg-white hover:text-primary transition-all duration-500'>About me</button>
                        <button className='btn outline px-5 py-1.5 rounded border-none text-white ml-5'>Download CV</button>
                    </div>
        </div>
        )
      }
    </div>


    </div>
  );
};

export default Projects;