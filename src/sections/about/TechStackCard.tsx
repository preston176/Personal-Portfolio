"use client"

import Card from "@/components/Card"
import { motion } from "framer-motion"
import { FaCode } from "react-icons/fa"
import { scaleIn } from "@/constants/animationVariants"
import { techStack } from "@/constants/aboutData"

export const TechStackCard = () => {
  return (
    <motion.div variants={scaleIn}>
      <Card className="p-8">
        <div className="flex items-center justify-center gap-3 mb-6">
          <FaCode className="text-2xl text-green-400" />
          <h3 className="text-2xl font-bold text-white text-center">
            Technical Stack
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)"
              }}
              className="relative bg-gradient-to-br from-gray-950 to-gray-900 border border-white/10 rounded-xl p-6 flex flex-col items-center gap-3 cursor-pointer group overflow-hidden"
            >
              {/* Green glow overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <tech.icon className={`text-5xl ${tech.color} relative z-10 transition-transform group-hover:scale-110 ${tech.color === 'text-white' ? '' : 'group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]'}`} />
              <span className="text-white/80 text-sm font-medium relative z-10">{tech.name}</span>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-white/60 text-center mt-8 text-sm italic"
        >
          The tools are just tools. What matters is shipping something that solves real problems.
        </motion.p>
      </Card>
    </motion.div>
  )
}
