import { NextResponse } from "next/server"
import { fallbackTopNews } from "@/lib/fallback-data"

const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY || "YOUR_API_KEY"
const BASE_URL = "https://newsapi.org/v2"

export async function GET() {
  try {
    console.log("Server-side: Fetching top news from API...")
    const response = await fetch(`${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      console.error(`Server API error ${response.status}`)
      // Return fallback data if API request fails
      return NextResponse.json(fallbackTopNews)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Server error fetching top news:", error)
    return NextResponse.json(fallbackTopNews)
  }
}

