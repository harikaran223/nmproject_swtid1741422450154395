import Link from "next/link"
import { Briefcase, Cpu, Heart, FlaskRoundIcon as Flask, Film, Landmark, Plane, BookOpen } from "lucide-react"

const categories = [
  { name: "Business", icon: <Briefcase className="h-6 w-6" />, slug: "business" },
  { name: "Technology", icon: <Cpu className="h-6 w-6" />, slug: "technology" },
  { name: "Health", icon: <Heart className="h-6 w-6" />, slug: "health" },
  { name: "Science", icon: <Flask className="h-6 w-6" />, slug: "science" },
  { name: "Entertainment", icon: <Film className="h-6 w-6" />, slug: "entertainment" },
  { name: "Politics", icon: <Landmark className="h-6 w-6" />, slug: "politics" },
  { name: "Travel", icon: <Plane className="h-6 w-6" />, slug: "travel" },
  { name: "Education", icon: <BookOpen className="h-6 w-6" />, slug: "education" },
]

export default function PopularCategories() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Popular Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow"
          >
            <div className="bg-blue-100 text-blue-600 p-3 rounded-full mb-3">{category.icon}</div>
            <span className="font-medium">{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

