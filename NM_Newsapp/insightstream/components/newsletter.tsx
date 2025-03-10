"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setStatus("error")
      setMessage("Please enter your email address")
      return
    }

    try {
      setStatus("loading")
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setStatus("success")
      setMessage("Thank you for subscribing to our newsletter!")
      setEmail("")

      // Reset success message after 3 seconds
      setTimeout(() => {
        setStatus("idle")
        setMessage("")
      }, 3000)
    } catch (error) {
      setStatus("error")
      setMessage("Failed to subscribe. Please try again later.")
    }
  }

  return (
    <section className="bg-blue-50 rounded-lg p-8 mb-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter to receive the latest news updates directly in your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={status === "loading"}
          />
          <button
            type="submit"
            className="btn-primary flex items-center justify-center gap-2"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              "Subscribing..."
            ) : (
              <>
                Subscribe <Send size={16} />
              </>
            )}
          </button>
        </form>

        {message && <p className={`mt-4 ${status === "error" ? "text-red-500" : "text-green-600"}`}>{message}</p>}
      </div>
    </section>
  )
}

