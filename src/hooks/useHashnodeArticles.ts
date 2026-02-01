import { useState, useEffect } from "react"
import { getHashnodeArticles } from "@/lib/hashnode"

export const useHashnodeArticles = (hostname: string, limit: number = 3) => {
  const [articles, setArticles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true)
        const data = await getHashnodeArticles(hostname, limit)
        setArticles(data)
        setError(null)
      } catch (err) {
        console.error("Error fetching articles:", err)
        setArticles([])
        setError(err instanceof Error ? err.message : "Failed to fetch articles")
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [hostname, limit])

  return { articles, loading, error }
}
