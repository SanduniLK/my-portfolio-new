"use client"

import { Hero } from "../../components/sections/Hero"
import { Projects } from "../../components/sections/Projects"
import { Skills } from "../../components/sections/Skills"
import { Contact } from "../../components/sections/Contact"
import { BackToTop } from "../../components/shared/BackToTop"
import Link from "next/link"
import { Calendar, Clock, User } from "lucide-react"
import { blogPosts } from "../../data/blogs"

export default function Home() {
  // Get latest 3 blog posts for homepage
  const latestPosts = blogPosts?.slice(0, 3) || []

  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Skills />
      
      {/* Blog Preview Section */}
      {latestPosts.length > 0 && (
        <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Latest Articles
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Sharing my knowledge in QA and Mobile Development
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id} className="block group">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center relative">
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          post.category === "QA" 
                            ? "bg-red-500 text-white"
                            : "bg-blue-500 text-white"
                        }`}>
                          {post.category}
                        </span>
                      </div>
                      <span className="text-white text-lg font-bold">{post.category}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <User size={12} />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-600/25 transition-all group"
              >
                View All Articles
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}
      
      <Contact />
      <BackToTop />
      
      <footer className="py-6 bg-gray-100 dark:bg-gray-900 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © 2026 Reshika Geeganage. All rights reserved.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
          QA Engineer | Mobile Developer
        </p>
      </footer>
    </main>
  )
}