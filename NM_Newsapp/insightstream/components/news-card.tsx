import Image from "next/image"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"

interface NewsCardProps {
  article: {
    title: string
    description: string
    urlToImage: string
    publishedAt: string
    source: {
      name: string
    }
    url: string
  }
}

export default function NewsCard({ article }: NewsCardProps) {
  const { title, description, urlToImage, publishedAt, source, url } = article

  // Handle missing data with defaults
  const safeTitle = title || "No title available"
  const safeDescription = description || "No description available"
  const safeSource = source?.name || "Unknown source"

  // Format date or use fallback
  const formattedDate = publishedAt ? formatDistanceToNow(new Date(publishedAt), { addSuffix: true }) : "Unknown date"

  return (
    <div className="card h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={urlToImage || "/placeholder.svg?height=200&width=400"}
          alt={safeTitle}
          fill
          className="object-cover"
          onError={(e) => {
            // Fallback if image fails to load
            const imgElement = e.currentTarget as HTMLImageElement
            imgElement.src = "/placeholder.svg?height=200&width=400"
          }}
        />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{safeSource}</span>
          <span className="mx-2">•</span>
          <span>{formattedDate}</span>
        </div>
        <h3 className="font-bold mb-2 line-clamp-2">{safeTitle}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{safeDescription}</p>
        <Link
          href={`/article?url=${encodeURIComponent(url || "#")}`}
          className="mt-auto text-blue-600 hover:text-blue-800 font-medium"
        >
          Read more
        </Link>
      </div>
    </div>
  )
}

