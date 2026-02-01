"use client"

import Card from "@/components/Card"
import { motion } from "framer-motion"
import { FaPenNib } from "react-icons/fa"
import { slideFromLeft } from "@/constants/animationVariants"

export const WritingCard = () => {
  return (
    <motion.div variants={slideFromLeft}>
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 md:h-full bg-gradient-to-br from-green-500/10 to-green-400/5 flex items-center justify-center p-8 overflow-hidden">
            {/* Animated lines like writing */}
            <div className="absolute inset-0 flex flex-col justify-center gap-4 px-8 opacity-20">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-1 bg-green-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.random() * 40 + 60}%` }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
              ))}
            </div>
            <motion.div
              animate={{
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaPenNib className="text-7xl text-green-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.5)] relative z-10" />
            </motion.div>
          </div>
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <FaPenNib className="text-2xl text-green-400" />
              <h3 className="text-2xl font-bold text-white">
                Writing & Teaching
              </h3>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              Sharing practical strategies on reducing costs, scaling efficiently, and building profitable products.
            </p>
            <div className="flex gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-1 bg-gradient-to-br from-green-500/10 to-green-400/5 border border-green-500/20 rounded-lg p-4 text-center"
              >
                <div className="text-green-400 font-bold text-lg">FreeCodeCamp</div>
                <div className="text-white/60 text-xs mt-1">Technical Articles</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-1 bg-gradient-to-br from-green-500/10 to-green-400/5 border border-green-500/20 rounded-lg p-4 text-center"
              >
                <div className="text-green-400 font-bold text-lg">Hashnode</div>
                <div className="text-white/60 text-xs mt-1">Real-World Insights</div>
              </motion.div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
