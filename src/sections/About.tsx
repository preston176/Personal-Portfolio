import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaNpm } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJest, SiPostgresql, SiFigma, SiPrisma } from "react-icons/si";
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
  { title: "Clean Code", emoji: "🧼" },
  { title: "User-Centered", emoji: "📚" },
  { title: "Collaboration", emoji: "🤝" },
  { title: "Efficiency", emoji: "⚡" },
  { title: "Accessibility", emoji: "🤖" },
  { title: "Continuous Learning", emoji: "📖" },
  { title: "Innovation", emoji: "💡" },
];

export const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A glimpse into my world"
          description="Learn more about who I am and what I do"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 col-span-3 lg:col-span-1">
              <CardHeader title="My Reads" description="Explore the books shaping my perspectives" />
              <div className="w-40 mx-auto">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] p-0 col-span-3 lg:col-span-2">
              <CardHeader title="Tech Stack" description="Explore the technologies and tools I use for my craft" className="px-6 pt-6" />
              <SkillItems skillSet={skillSet} className="mt-6" />
              <SkillItems skillSet={skillSet} className="mt-6" skillWrapperClassName="-translate-x-1/2" />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
          </div>
        </div>
      </div>
    </section>
  );
};
