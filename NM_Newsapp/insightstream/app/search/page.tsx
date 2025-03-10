"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { fetchNewsBySearch } from "@/lib/api"
import NewsGrid from "@/components/news-grid"
import { Loader2 } from "lucide-react"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const getNews = async () => {
      if (!query) {
        setNews([])
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        console.log(`Searching for: ${query}`)
        const data = await fetchNewsBySearch(query)

        if (data && data.articles) {
          console.log(`Received ${data.articles.length} search results for "${query}"`)
          setNews(data.articles || [])
          setError("")
        } else {
          console.error("Invalid data format received:", data)
          setError("Received invalid data format from the news service.")
        }
      } catch (err) {
        console.error(`Error in component while searching for "${query}":`, err)
        setError("Failed to load news. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    getNews()
  }, [query])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6">Search Results: {query}</h1>

      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
      ) : error ? (
        <div className="text-center text-red-500 py-8">{error}</div>
      ) : news.length === 0 ? (
        <div className="text-center py-8">
          {query ? "No results found. Try a different search term." : "Enter a search term to find news."}
        </div>
      ) : (
        <NewsGrid articles={news} />
      )}
    </div>
  )
}

