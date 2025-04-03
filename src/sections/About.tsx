import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg"
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaNpm } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux, SiJest, SiPostgresql, SiFigma, SiPrisma } from "react-icons/si";
import { CardHeader } from "@/components/CardHeader";
import { SkillItems } from "@/components/SkillItems";

const skillSet = [
  { title: "JavaScript", icon: FaJs },
  { title: "TypeScript", icon: SiTypescript },
  { title: "HTML5", icon: FaHtml5 },
  { title: "CSS3", icon: FaCss3Alt },
  { title: "React", icon: FaReact },
  { title: "Next.js", icon: SiNextdotjs },
  { title: "Prisma", icon: SiPrisma },
  { title: "Tailwind CSS", icon: SiTailwindcss },
  { title: "Node.js", icon: FaNodeJs },
  { title: "PostgreSQL", icon: SiPostgresql },
  { title: "Git", icon: FaGitAlt },
  { title: "GitHub", icon: FaGithub },
  { title: "NPM", icon: FaNpm },
  { title: "Jest", icon: SiJest },
  { title: "Figma", icon: SiFigma },
];

const philosophy = [
  { title: "Clean Code", emoji: "🧼", left: "5%", top: "5%" },
  { title: "User-Centered", emoji: "📚", left: "45%", top: "15%" },
  { title: "Collaboration", emoji: "🤝", left: "35%", top: "40%" },
  { title: "Efficiency", emoji: "⚡", left: "5%", top: "65%" },
  { title: "Accessibility", emoji: "🤖", left: "45%", top: "70%" },
];


export const AboutSection = () => {
  return <section className="py-20">
    <div className="container">

      <SectionHeader eyebrow="About Me" title="A glimpse into my world" description="Learn more about who I am and what I do" />
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 ">
          <Card className="h-[320px] md:col-span-2 col-span-3">
            <CardHeader title="My Reads" description="Explore the books shaping my perspectives" />
            <div className="w-40 mx-auto ">
              <Image src={bookImage} alt="Book cover" />
            </div>
          </Card>
          <Card className="h-[320px] p-0 col-span-3">
            <CardHeader title="Tech Stack" description="Explore the technologies and tools I use for my craft" className="px-6 pt-6" />

            <SkillItems skillSet={skillSet} className="mt-6" />
            <SkillItems skillSet={skillSet} className="mt-6" skillWrapperClassName=" -translate-x-1/2" />


          </Card>
        </div>
        <Card className="h-[320px] p-0 flex flex-col">
          <CardHeader
            title="My Philosophy"
            description="Core principles that shape my approach to development"
            className="px-6 py-6"
          />

          <div className="relative flex-1 h-full px-6 py-4 grid grid-cols-2 gap-4">
            {philosophy.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-teal-400 to-green-500 rounded-full shadow-md whitespace-nowrap "
                style={{
                  position: "absolute",
                  left: item.left,
                  top: item.top,
                }}
              >
                <span className="font-medium text-black ">{item.title}</span>
                <span>{item.emoji}</span>
              </div>
            ))}
          </div>
        </Card>


        {/* <Card className="h-[320px] p-0 flex flex-col">
  <CardHeader
    title="My Location"
    description="Find me on the map"
    className="px-6 py-6"
  />

  <div className="flex-1">
    <iframe
      className="w-full h-full rounded-lg"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177136.4740275185!2d36.8219!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10a3f3d3d3d3%3A0xa9c3f6e4e4e4e4e4!2sKenya!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</Card> */}

      </div>
    </div>
  </section>;
};
