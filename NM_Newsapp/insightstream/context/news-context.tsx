"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface NewsContextType {
  savedArticles: any[]
  saveArticle: (article: any) => void
  removeArticle: (articleUrl: string) => void
  isSaved: (articleUrl: string) => boolean
}

const NewsContext = createContext<NewsContextType | undefined>(undefined)

export function NewsProvider({ children }: { children: ReactNode }) {
  const [savedArticles, setSavedArticles] = useState<any[]>([])

  const saveArticle = (article: any) => {
    setSavedArticles((prev) => {
      // Check if article already exists
      if (prev.some((item) => item.url === article.url)) {
        return prev
      }
      return [...prev, article]
    })
  }

  const removeArticle = (articleUrl: string) => {
    setSavedArticles((prev) => prev.filter((article) => article.url !== articleUrl))
  }

  const isSaved = (articleUrl: string) => {
    return savedArticles.some((article) => article.url === articleUrl)
  }

  return (
    <NewsContext.Provider value={{ savedArticles, saveArticle, removeArticle, isSaved }}>
      {children}
    </NewsContext.Provider>
  )
}

export function useNews() {
  const context = useContext(NewsContext)
  if (context === undefined) {
    throw new Error("useNews must be used within a NewsProvider")
  }
  return context
}

