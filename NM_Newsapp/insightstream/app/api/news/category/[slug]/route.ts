import { NextResponse } from "next/server"
import { getFallbackCategoryData } from "@/lib/fallback-data"

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY || "YOUR_API_KEY"
const BASE_URL = "https://newsapi.org/v2"

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const category = params.slug

  try {
    console.log(`Server-side: Fetching ${category} news from API...`)
    const response = await fetch(`${BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      console.error(`Server API error ${response.status} for ${category}`)
      // Return fallback data if API request fails
      return NextResponse.json(getFallbackCategoryData(category))
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error(`Server error fetching ${category} news:`, error)
    return NextResponse.json(getFallbackCategoryData(category))
  }
}

