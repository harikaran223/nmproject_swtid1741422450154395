"use client"

import { useEffect, useState } from "react"
import { fetchTopNews } from "@/lib/api"
import NewsCard from "./news-card"
import { Loader2 } from "lucide-react"

export default function TrendingNews() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const getTopNews = async () => {
      try {
        setLoading(true)
        console.log("Component: Fetching top news...")
        const data = await fetchTopNews()

        if (data && data.articles) {
          console.log(`Received ${data.articles.length} articles`)
          setNews(data.articles?.slice(0, 6) || [])
          setError("")
        } else {
          console.error("Invalid data format received:", data)
          setError("Received invalid data format from the news service.")
        }
      } catch (err) {
        console.error("Error in component while fetching top news:", err)
        setError("Failed to load trending news. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    getTopNews()
  }, [])

  if (loading) {
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Trending News</h2>
        <div className="flex justify-center items-center min-h-[300px]">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Trending News</h2>
        <div className="text-center text-red-500 py-8">{error}</div>
      </section>
    )
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Trending News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </section>
  )
}

