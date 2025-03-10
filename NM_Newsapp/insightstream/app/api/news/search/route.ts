import { NextResponse } from "next/server"

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY || "YOUR_API_KEY"
const BASE_URL = "https://newsapi.org/v2"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q") || ""

  if (!query) {
    return NextResponse.json({
      status: "ok",
      articles: [],
    })
  }

  try {
    console.log(`Server-side: Searching for "${query}" in API...`)
    const response = await fetch(`${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      console.error(`Server API error ${response.status} for search "${query}"`)
      // Return simple fallback data for search
      return NextResponse.json({
        status: "ok",
        articles: [
          {
            source: { id: "sample", name: "Search Results" },
            author: "Sample Author",
            title: `Search results for "${query}" (Sample)`,
            description: "The API is currently unavailable. This is sample data for your search query.",
            url: "https://example.com/search-sample",
            urlToImage: "/placeholder.svg?height=200&width=400",
            publishedAt: new Date().toISOString(),
            content: "This is sample content for your search query...",
          },
        ],
      })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error(`Server error fetching search results for "${query}":`, error)
    return NextResponse.json({
      status: "ok",
      articles: [
        {
          source: { id: "sample", name: "Search Results" },
          author: "Sample Author",
          title: `Search results for "${query}" (Sample)`,
          description: "The API is currently unavailable. This is sample data for your search query.",
          url: "https://example.com/search-sample",
          urlToImage: "/placeholder.svg?height=200&width=400",
          publishedAt: new Date().toISOString(),
          content: "This is sample content for your search query...",
        },
      ],
    })
  }
}

