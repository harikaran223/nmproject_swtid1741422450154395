"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { fetchNewsByCategory } from "@/lib/api"
import NewsGrid from "@/components/news-grid"
import { Loader2 } from "lucide-react"

export default function CategoryPage() {
  const params = useParams()
  const category = params.slug as string
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true)
        console.log(`Fetching news for category: ${category}`)
        const data = await fetchNewsByCategory(category)

        if (data && data.articles) {
          console.log(`Received ${data.articles.length} articles for ${category}`)
          setNews(data.articles || [])
          setError("")
        } else {
          console.error("Invalid data format received:", data)
          setError("Received invalid data format from the news service.")
        }
      } catch (err) {
        console.error(`Error in component while fetching ${category} news:`, err)
        setError("Failed to load news. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    if (category) {
      getNews()
    }
  }, [category])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 capitalize">{category} News</h1>

      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      ) : error ? (
        <div className="text-center text-red-500 py-8">{error}</div>
      ) : news.length === 0 ? (
        <div className="text-center py-8">No news found for this category.</div>
      ) : (
        <NewsGrid articles={news} />
      )}
    </div>
  )
}

