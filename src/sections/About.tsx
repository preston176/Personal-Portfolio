import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg"
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaNpm } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux, SiJest, SiPostgresql, SiFigma, SiPrisma } from "react-icons/si";
import { SkillIcon } from "@/components/SkillIcon";

const skillSet = [
  { title: "JavaScript", icon: FaJs },
  { title: "TypeScript", icon: SiTypescript },
  { title: "HTML5", icon: FaHtml5  },
  { title: "CSS3", icon: FaCss3Alt  },
  { title: "React", icon: FaReact  },
  { title: "Next.js", icon: SiNextdotjs  },
  { title: "Prisma", icon: SiPrisma  },
  { title: "Tailwind CSS", icon: SiTailwindcss  },
  { title: "Node.js", icon: FaNodeJs  },
  { title: "PostgreSQL", icon: SiPostgresql  },
  { title: "Git", icon: FaGitAlt  },
  { title: "GitHub", icon: FaGithub  },
  { title: "NPM", icon: FaNpm  },
  { title: "Jest", icon: SiJest  },
  { title: "Figma", icon: SiFigma  },
];


export const AboutSection = () => {
  return <section className="pb-96">
    <SectionHeader eyebrow="About Me" title="A glimpse into my world" description="Learn more about who I am and what I do" />
    <Card>
      <div className="">
        <StarIcon />
        <h3>My Reads</h3>
        <p>Explore the books shaping my perspectives</p>
      </div>
      <Image src={bookImage} alt="Book cover" />
    </Card>
    <Card>
      <div className="">
        <StarIcon />
        <h3>Tech Stack</h3>
        <p>Explore the technologies and tools I use for my craft</p>
      </div>
      <div className="">
        {skillSet.map((skill, index) => (
          <div key={index} className="">
           <SkillIcon component={skill.icon} />
            <span>{skill.title}</span>
          </div>
        ))}
      </div>
    </Card>
    <Card>
    <div className="">
        <StarIcon />
        <h3>Beyond the Code</h3>
        <p>Explore the technologies and tools I use for my craft</p>
      </div>
    </Card>
    <Card>
    </Card>
  </section>;
};
