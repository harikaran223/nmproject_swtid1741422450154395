"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ArticlePage() {
  const searchParams = useSearchParams()
  const url = searchParams.get("url") || ""

  useEffect(() => {
    // Redirect to the original article URL
    if (url) {
      window.open(url, "_blank")
    }
  }, [url])

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4">
        <ArrowLeft size={20} />
        <span>Back to home</span>
      </Link>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="mb-4">Redirecting to article...</h1>
        <p className="mb-4">If you are not automatically redirected, please click the link below:</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
          {url}
        </a>
      </div>
    </div>
  )
}

