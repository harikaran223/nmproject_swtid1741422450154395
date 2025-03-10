import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { NewsProvider } from "@/context/news-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "InsightStream - Navigate the News Landscape",
  description: "A revolutionary web application designed to redefine how people discover and consume news.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NewsProvider>
          <Navbar />
          {children}
        </NewsProvider>
      </body>
    </html>
  )
}



import './globals.css'