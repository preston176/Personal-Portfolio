import { SiNextdotjs, SiTypescript, SiPostgresql, SiPrisma, SiNodedotjs, SiOpenai } from "react-icons/si"
import { FaCheckCircle } from "react-icons/fa"

export const stats = [
  { number: "1,000+", label: "Hours Saved" },
  { number: "$50K+", label: "Cost Reduction" },
  { number: "3", label: "Production Apps" },
]

export const techStack = [
  { icon: SiNextdotjs, name: "Next.js", color: "text-green-500" },
  { icon: SiTypescript, name: "TypeScript", color: "text-green-500" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "text-green-500" },
  { icon: SiPrisma, name: "Prisma", color: "text-green-500" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
  { icon: SiOpenai, name: "AI/LangChain", color: "text-green-500" },
]

export const projectMetrics = [
  { metric: "75%", label: "Search Time Reduced", icon: FaCheckCircle },
  { metric: "30min", label: "Saved Daily per Dev", icon: FaCheckCircle },
  { metric: "60%", label: "Cost Optimization", icon: FaCheckCircle },
]
