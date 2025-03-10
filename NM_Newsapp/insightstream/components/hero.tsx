"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Navigate the News Landscape</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Discover breaking stories, trending topics, and in-depth coverage from around the world.
        </p>

        <form onSubmit={handleSearch} className="max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder="Search for news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-3 px-4 pr-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </form>
      </div>
    </div>
  )
}

