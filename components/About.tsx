import Image from "next/image";
import { useMemo } from "react";

const About = () => {
  // Define skills with optimized static imports
  const skills = [
    { name: "HTML, CSS & JavaScript", image: "/assets/icons/code.png", altText: "Web development stack including HTML, CSS, and JavaScript." },
    { name: "Frontend Frameworks - React", image: "/assets/icons/react.png", altText: "React.js logo representing frontend frameworks expertise." },
    { name: "Backend Frameworks - Express.js", image: "/assets/icons/backend.png", altText: "Express.js logo representing backend development skills." },
    { name: "Databases - MySQL & MongoDB", image: "/assets/icons/server.png", altText: "Database technologies including MySQL and MongoDB." },
    { name: "Deployment - Heroku, Firebase, Vercel", image: "/assets/icons/deploy.png", altText: "Cloud deployment platforms: Heroku, Firebase, and Vercel." },
  ];

  // Dynamically calculate years of experience
  const yearsOfExperience = useMemo(() => {
    const startYear = 2022;
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  }, []);

  return (
    <section className="py-10 px-5 sm:mt-24" id="about">
      <h1 className="text-4xl text-primary font-semibold mb-4">About Me</h1>
      <p className="text-white text-lg leading-relaxed md:w-10/12">
        Passionate about continuous learning, I specialize in <strong>technical documentation</strong> and <strong>web development</strong>.  
        My goal is to make <strong>tech education more accessible</strong> and contribute to a world powered by insightful knowledge.
      </p>

      {/* Years of Experience */}
      <div className="flex items-center my-7">
        <p className="text-primary text-7xl font-bold">{yearsOfExperience}+</p>
        <p className="text-white text-2xl ml-5">
          Years of experience in web development & technical writing
        </p>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#1a1a29] hover:scale-105 transition-transform duration-300 p-5 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <Image src={skill.image} alt={skill.altText} width={60} height={60} />
            <p className="text-white text-xl font-semibold mt-3">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
