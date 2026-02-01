"use client"

import { motion } from "framer-motion"
import { scaleIn } from "@/constants/animationVariants"
import { stats } from "@/constants/aboutData"

export const StatsBar = () => {
  return (
    <motion.div
      variants={scaleIn}
      className="mt-12 grid grid-cols-3 gap-4 max-w-3xl mx-auto"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-2xl p-6 text-center"
        >
          <div className="text-3xl md:text-4xl font-bold text-green-400">{stat.number}</div>
          <div className="text-sm text-white/60 mt-2">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  )
}
