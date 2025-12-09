"use client";

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import { getHashnodeArticles } from "@/lib/hashnode";
import { ArticleCard } from "@/components/ArticleCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaRocket, FaRobot, FaCode, FaPenNib, FaCheckCircle, FaLightbulb, FaCogs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPostgresql, SiPrisma, SiNodedotjs, SiOpenai } from "react-icons/si";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";

export const AboutSection = () => {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getHashnodeArticles("codewithpres.hashnode.dev", 3);
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setArticles([]);
      }
    };

    fetchArticles();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { number: "1,000+", label: "Hours Saved" },
    { number: "$50K+", label: "Cost Reduction" },
    { number: "3", label: "Production Apps" },
  ];

  const techStack = [
    { icon: SiNextdotjs, name: "Next.js", color: "text-green-500" },
    { icon: SiTypescript, name: "TypeScript", color: "text-green-500" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "text-green-500" },
    { icon: SiPrisma, name: "Prisma", color: "text-green-500" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    { icon: SiOpenai, name: "AI/LangChain", color: "text-green-500" },
  ];

  const projects = [
    { metric: "75%", label: "Search Time Reduced", icon: FaCheckCircle },
    { metric: "30min", label: "Saved Daily per Dev", icon: FaCheckCircle },
    { metric: "60%", label: "Cost Optimization", icon: FaCheckCircle },
  ];

  return (
    <section className="py-20 lg:py-28" id="about">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <SectionHeader
            eyebrow="About Me"
            title="I Build Tools That Save Time & Money"
            description="Shipping products that cut costs and boost productivity"
          />

          {/* Stats Bar */}
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

          {/* Split Layout Sections */}
          <div className="mt-16 space-y-12">
            {/* What I've Shipped - Image Left, Text Right */}
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
                      {projects.map((project, idx) => (
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

            {/* What I Automate - Text Left, Image Right */}
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

            {/* Tech Stack - Visual Grid */}
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

            {/* Writing - Image Left, Text Right */}
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
          </div>

          {/* Articles Section */}
          <motion.div
            variants={scaleIn}
            className="mt-20 flex flex-col gap-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-center">Latest Articles</h3>

              {articles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              ) : (
                <Card className="p-6 text-center text-gray-400">
                  <p>No articles found. Check back soon!</p>
                </Card>
              )}

              {/* Read More Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-20">
                <a
                  href="https://codewithpres.hashnode.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl transition hover:bg-gray-200 hover:text-gray-900 font-semibold"
                >
                  Read More on Hashnode
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.freecodecamp.org/news/author/preston176/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl transition hover:bg-gray-200 font-semibold"
                >
                  Read More on FreeCodeCamp
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
