"use client"

import Card from "@/components/Card"
import { motion } from "framer-motion"
import { FaCogs, FaLightbulb } from "react-icons/fa"
import { HiLightningBolt } from "react-icons/hi"
import { slideFromRight } from "@/constants/animationVariants"

export const AutomationCard = () => {
  return (
    <motion.div variants={slideFromRight}>
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="p-6 md:p-8 order-2 md:order-1">
            <div className="flex items-center gap-3 mb-4">
              <HiLightningBolt className="text-2xl text-green-400" />
              <h3 className="text-2xl font-bold text-white">
                Automation That Pays Off
              </h3>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Systems that eliminate manual work, reduce costs, and free up your team to do high-value work.
            </p>
            <div className="space-y-4">
              <div className="group">
                <div className="flex items-center gap-2 mb-2">
                  <FaLightbulb className="text-green-400" />
                  <span className="text-white font-semibold">AI Pipelines</span>
                </div>
                <div className="h-2 bg-gray-900/50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
                <p className="text-white/60 text-sm mt-1">Zero manual processing costs</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-2 mb-2">
                  <FaCogs className="text-green-400" />
                  <span className="text-white font-semibold">CI/CD Workflows</span>
                </div>
                <div className="h-2 bg-gray-900/50 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-400 to-green-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  />
                </div>
                <p className="text-white/60 text-sm mt-1">Ship faster, reduce overhead</p>
              </div>
            </div>
          </div>
          <div className="relative h-64 md:h-full bg-gradient-to-br from-green-500/10 to-green-400/5 flex items-center justify-center p-8 order-1 md:order-2 overflow-hidden">
            {/* Orbiting elements */}
            <motion.div
              className="absolute"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="relative w-40 h-40">
                <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-green-400 rounded-full" />
                <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-green-500 rounded-full" />
                <motion.div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full" />
                <motion.div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full" />
              </div>
            </motion.div>
            <FaCogs className="text-7xl text-green-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.5)] z-10" />
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
