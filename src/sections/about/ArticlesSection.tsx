"use client"

import Card from "@/components/Card"
import { ArticleCard } from "@/components/ArticleCard"
import { motion } from "framer-motion"
import { scaleIn } from "@/constants/animationVariants"
import { useHashnodeArticles } from "@/hooks/useHashnodeArticles"

export const ArticlesSection = () => {
  const { articles, loading, error } = useHashnodeArticles("codewithpres.hashnode.dev", 3)

  return (
    <motion.div
      variants={scaleIn}
      className="mt-20 flex flex-col gap-8"
    >
      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-center">Latest Articles</h3>

        {loading ? (
          <Card className="p-6 text-center text-gray-400">
            <p>Loading articles...</p>
          </Card>
        ) : error ? (
          <Card className="p-6 text-center text-gray-400">
            <p>Failed to load articles. Please try again later.</p>
          </Card>
        ) : articles.length > 0 ? (
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
  )
}
