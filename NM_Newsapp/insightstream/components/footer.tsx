import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">InsightStream</h3>
            <p className="text-gray-300">
              Navigate the news landscape with our revolutionary web application designed to redefine how people
              discover and consume news.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/category/business" className="text-gray-300 hover:text-white">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/category/technology" className="text-gray-300 hover:text-white">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/category/health" className="text-gray-300 hover:text-white">
                  Health
                </Link>
              </li>
              <li>
                <Link href="/category/science" className="text-gray-300 hover:text-white">
                  Science
                </Link>
              </li>
              <li>
                <Link href="/category/entertainment" className="text-gray-300 hover:text-white">
                  Entertainment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-white" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-white" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
            <p className="text-gray-300">Subscribe to our newsletter for the latest updates.</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} InsightStream. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

