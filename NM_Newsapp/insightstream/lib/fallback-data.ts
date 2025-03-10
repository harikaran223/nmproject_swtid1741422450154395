// Sample fallback data for when the API fails
export const fallbackTopNews = {
  status: "ok",
  articles: [
    {
      source: { id: "sample", name: "TechNews" },
      author: "John Doe",
      title: "The Future of AI in Everyday Technology",
      description:
        "How artificial intelligence is becoming integrated into our daily lives through smart devices and automation.",
      url: "https://example.com/ai-future",
      urlToImage: "/placeholder.svg?height=200&width=400",
      publishedAt: new Date().toISOString(),
      content: "Artificial intelligence continues to evolve...",
    },
    {
      source: { id: "sample", name: "Business Insider" },
      author: "Jane Smith",
      title: "Global Markets React to Economic Policy Changes",
      description: "Stock markets worldwide show volatility as central banks announce new economic policies.",
      url: "https://example.com/market-changes",
      urlToImage: "/placeholder.svg?height=200&width=400",
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
      content: "In an unexpected move, central banks...",
    },
    {
      source: { id: "sample", name: "Health Today" },
      author: "Dr. Emily Johnson",
      title: "New Research Shows Benefits of Mediterranean Diet",
      description: "A comprehensive study reveals how the Mediterranean diet can improve heart health and longevity.",
      url: "https://example.com/diet-research",
      urlToImage: "/placeholder.svg?height=200&width=400",
      publishedAt: new Date(Date.now() - 172800000).toISOString(),
      content: "The study followed 10,000 participants...",
    },
    {
      source: { id: "sample", name: "Science Daily" },
      author: "Robert Chen",
      title: "Breakthrough in Renewable Energy Storage",
      description: "Scientists develop a new type of battery that could revolutionize how we store renewable energy.",
      url: "https://example.com/energy-storage",
      urlToImage: "/placeholder.svg?height=200&width=400",
      publishedAt: new Date(Date.now() - 259200000).toISOString(),
      content: "The new battery technology uses abundant materials...",
    },
    {
      source: { id: "sample", name: "Sports Network" },
      author: "Michael Torres",
      title: "Underdog Team Wins Championship in Stunning Upset",
      description:
        "In a surprising turn of events, the underdog team defeated the reigning champions in the final match.",
      url: "https://example.com/sports-upset",
      urlToImage: "/placeholder.svg?height=200&width=400",
      publishedAt: new Date(Date.now() - 345600000).toISOString(),
      content: "The match was tied until the final minutes...",
    },
    {
      source: { id: "sample", name: "Entertainment Weekly" },
      author: "Sarah Johnson",
      title: "Anticipated Movie Sequel Breaks Box Office Records",
      description:
        "The long-awaited sequel to the popular film franchise has broken opening weekend records worldwide.",
      url: "https://example.com/movie-records",
      urlToImage: "/placeholder.svg?height=200&width=400",
      publishedAt: new Date(Date.now() - 432000000).toISOString(),
      content: "Fans lined up for hours to be among the first...",
    },
  ],
}

const fallbackCategoryNews = {
  business: {
    status: "ok",
    articles: [
      {
        source: { id: "sample", name: "Financial Times" },
        author: "Alex Morgan",
        title: "Tech Giant Announces Major Acquisition",
        description:
          "One of the world's largest tech companies has announced the acquisition of a promising startup for $2 billion.",
        url: "https://example.com/tech-acquisition",
        urlToImage: "/placeholder.svg?height=200&width=400",
        publishedAt: new Date().toISOString(),
        content: "The acquisition is expected to close by the end of the quarter...",
      },
      {
        source: { id: "sample", name: "Wall Street Journal" },
        author: "David Chen",
        title: "Startup Raises $50M in Series B Funding",
        description:
          "An innovative fintech startup has secured $50 million in its latest funding round led by major venture capital firms.",
        url: "https://example.com/startup-funding",
        urlToImage: "/placeholder.svg?height=200&width=400",
        publishedAt: new Date(Date.now() - 86400000).toISOString(),
        content: "The company plans to use the funding to expand into new markets...",
      },
      {
        source: { id: "sample", name: "Bloomberg" },
        author: "Sarah Williams",
        title: "Oil Prices Surge Amid Global Supply Concerns",
        description:
          "Global oil prices have increased by 5% following reports of production disruptions in major oil-producing regions.",
        url: "https://example.com/oil-prices",
        urlToImage: "/placeholder.svg?height=200&width=400",
        publishedAt: new Date(Date.now() - 172800000).toISOString(),
        content: "Analysts predict that prices could continue to rise if...",
      },
    ],
  },
  technology: {
    status: "ok",
    articles: [
      {
        source: { id: "sample", name: "TechCrunch" },
        author: "James Wilson",
        title: "New Smartphone Features Revolutionary Camera Technology",
        description:
          "The latest flagship smartphone includes camera technology that could change mobile photography forever.",
        url: "https://example.com/smartphone-camera",
        urlToImage: "/placeholder.svg?height=200&width=400",
        publishedAt: new Date().toISOString(),
        content: "The camera system uses a new type of sensor that...",
      },
      {
        source: { id: "sample", name: "Wired" },
        author: "Lisa Chen",
        title: "Quantum Computing Breakthrough Announced",
        description:
          "Scientists have achieved a significant milestone in quantum computing that brings practical applications closer to reality.",
        url: "https://example.com/quantum-breakthrough",
        urlToImage: "/placeholder.svg?height=200&width=400",
        publishedAt: new Date(Date.now() - 86400000).toISOString(),
        content: "The research team was able to maintain quantum coherence for...",
      },
      {
        source: { id: "sample", name: "The Verge" },
        author: "Michael Brown",
        title: "Major Software Update Brings AI Features to Millions of Devices",
        description:
          "A popular operating system's latest update includes AI-powered features that will enhance user experience across devices.",
        url: "https://example.com/software-ai-update",
        urlToImage: "/placeholder.svg?height=200&width=400",
        publishedAt: new Date(Date.now() - 172800000).toISOString(),
        content: "The new features include smart suggestions and automated...",
      },
    ],
  },
  health: {
    status: "ok",
    articles: [
      {
        source: { id: "sample", name: "Health Magazine" },
        author: "Dr. Sarah Johnson",
        title: "New Study Reveals Benefits of Intermittent Fasting",
        description:
          "Researchers have found significant health improvements in participants who practiced intermittent fasting over a six-month period.",
        url: "https://example.com/fasting-benefits",
        urlToImage: "/placeholder.svg?height=200&width=400",
        publishedAt: new Date().toISOString(),
        content: "The study tracked various health markers including...",
      },
      {
        source: { id: "sample", name: "Medical News Today" },
        author: "Dr. Michael Chen",
        title: "Breakthrough in Alzheimer's Research Offers New Hope",
        description:
          "A new treatment approach has shown promising results in early clinical trials, potentially slowing the progression of Alzheimer's disease.",
        url: "https://example.com/alzheimers-research",
        urlToImage: "/placeholder.svg?height=200&width=400",
        publishedAt: new Date(Date.now() - 86400000).toISOString(),
        content: "The treatment targets specific proteins that...",
      },
    ],
  },
  science: {
    status: "ok",
    articles: [
      {
        source: { id: "sample", name: "Science Daily" },
        author: "Dr. Emily Roberts",
        title: "Astronomers Discover Earth-like Planet in Habitable Zone",
        description:
          "Scientists have identified a planet with similar characteristics to Earth orbiting a star 40 light-years away.",
        url: "https://example.com/new-planet",
        urlToImage: "/placeholder.svg?height=200&width=400",
        publishedAt: new Date().toISOString(),
        content: "The planet, named Kepler-186f, is approximately...",
      },
      {
        source: { id: "sample", name: "Nature" },
        author: "Dr. James Wilson",
        title: "Revolutionary Material Could Transform Energy Storage",
        description:
          "Researchers have developed a new material that could significantly improve the efficiency and capacity of batteries.",
        url: "https://example.com/battery-material",
        urlToImage: "/placeholder.svg?height=200&width=400",
        publishedAt: new Date(Date.now() - 86400000).toISOString(),
        content: "The material, a form of graphene composite...",
      },
    ],
  },
}

// Helper function to get fallback data for a category
export function getFallbackCategoryData(category) {
  return (
    fallbackCategoryNews[category] || {
      status: "ok",
      articles: [
        {
          source: { id: "sample", name: "Sample News" },
          author: "Sample Author",
          title: `Sample ${category.charAt(0).toUpperCase() + category.slice(1)} Article`,
          description: `This is a sample article for the ${category} category when the API is unavailable.`,
          url: "https://example.com/sample",
          urlToImage: "/placeholder.svg?height=200&width=400",
          publishedAt: new Date().toISOString(),
          content: "This is sample content...",
        },
      ],
    }
  )
}

