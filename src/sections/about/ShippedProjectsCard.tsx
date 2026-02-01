"use client"

import Card from "@/components/Card"
import { motion } from "framer-motion"
import { FaRocket } from "react-icons/fa"
import { HiSparkles } from "react-icons/hi"
import { slideFromLeft } from "@/constants/animationVariants"
import { projectMetrics } from "@/constants/aboutData"

export const ShippedProjectsCard = () => {
  return (
    <motion.div variants={slideFromLeft}>
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 md:h-full bg-gradient-to-br from-green-500/10 to-green-400/5 flex flex-col items-center justify-center p-8 overflow-hidden">
            {/* Animated background elements */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)",
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaRocket className="text-7xl text-green-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]" />
            </motion.div>
          </div>
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <HiSparkles className="text-2xl text-green-400" />
              <h3 className="text-2xl font-bold text-white">
                Saving Time, Cutting Costs
              </h3>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Built <span className="text-green-400 font-semibold">3 apps</span> that help users work faster and spend less. Real tools solving expensive problems.
            </p>
            <div className="space-y-3">
              {projectMetrics.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 bg-gray-900/50 rounded-lg p-3"
                >
                  <project.icon className="text-green-400 text-xl flex-shrink-0" />
                  <div>
                    <span className="text-green-400 font-bold">{project.metric}</span>
                    <span className="text-white/60 text-sm ml-2">{project.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
