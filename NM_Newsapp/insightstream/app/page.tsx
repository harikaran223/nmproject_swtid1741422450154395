import Hero from "@/components/hero"
import PopularCategories from "@/components/popular-categories"
import TrendingNews from "@/components/trending-news"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <PopularCategories />
        <TrendingNews />
        <Newsletter />
      </div>
      <Footer />
    </main>
  )
}

