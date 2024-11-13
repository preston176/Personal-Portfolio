// TechStack.tsx
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import { FaReact, FaNodeJs, FaJsSquare, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiPostgresql, SiUnity, SiFigma, SiNextdotjs, SiGraphql, SiAdobexd, SiGooglecloud } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';
import { FaPython } from 'react-icons/fa6';
import { PiFileCSharp } from 'react-icons/pi';

interface Tech {
    name: string;
    icon: React.ReactElement;
    color: string;
}

const TechStack: React.FC = () => {
    const techs: Tech[] = [
        { name: 'React', icon: <FaReact />, color: '#61DBFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
        { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' }, 
        { name: 'Node.js', icon: <FaNodeJs />, color: '#68A063' },
        { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#4DB33D' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
        { name: 'TypeScript', icon: <FaReact />, color: '#3178C6' }, // Strongly typed JS, professional best practice
        { name: 'JavaScript', icon: <FaJsSquare />, color: '#F0DB4F' },
        { name: 'Git', icon: <FaGitAlt />, color: '#F1502F' },
        { name: 'Docker', icon: <FaDocker />, color: '#2496ED' }, // For containerization
        { name: 'Google Cloud', icon: <SiGooglecloud />, color: '#FF9900' },
        { name: 'Firebase', icon: <IoLogoFirebase />, color: '#FFA611' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38B2AC' },
        { name: 'Figma', icon: <SiFigma />, color: '#CA5151' },
        { name: 'Adobe XD', icon: <SiAdobexd />, color: '#FF61F6' }, 
        { name: 'Unity', icon: <SiUnity />, color: '#ffffff' },
        { name: 'Python', icon: <FaPython />, color: '#306998' }, 
        { name: 'C#', icon: <PiFileCSharp />, color: '#5E2BFF' },
    ];


    return (
        <section className="py-12 bg-none text-center">
            <h2 className="text-3xl font-semibold mb-8 text-primary">My Stack</h2>

            {/* Conditionally render Splide for mobile screens */}
            <div className="block md:hidden">
                <Splide
                    options={{
                        type: 'loop',
                        perPage: 3,
                        gap: '1rem',
                        arrows: true,
                        pagination: true,
                        drag: true,
                    }}
                >
                    {techs.map((tech, index) => (
                        <SplideSlide key={index}>
                            <div className="flex flex-col items-center text-center w-24 hover:scale-110 transition-transform">
                                <div className="text-5xl" style={{ color: tech.color }}>
                                    {tech.icon}
                                </div>
                                <p className="mt-2 text-lg text-white font-normal">{tech.name}</p>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
                {/* Custom style for pagination */}
            </div>

            {/* Grid view for larger screens */}
            <div className="hidden md:flex flex-wrap justify-center gap-6">
                {techs.map((tech, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center w-24 hover:scale-110 transition-transform"
                    >
                        <div className="text-5xl" style={{ color: tech.color }}>
                            {tech.icon}
                        </div>
                        <p className="mt-2 text-lg font-medium text-white">{tech.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
