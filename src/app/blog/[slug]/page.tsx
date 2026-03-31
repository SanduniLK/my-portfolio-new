import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Tag, User } from "lucide-react"
import { blogPosts } from "../../../../data/blogs"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 mb-4 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to All Blogs
        </Link>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-600 mb-8 text-sm ml-6 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-6">
          <span className="inline-flex px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-600">
            {post.category}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b">
          <span className="flex items-center gap-1"><User size={16} />{post.author}</span>
          <span className="flex items-center gap-1"><Calendar size={16} />{post.date}</span>
          <span className="flex items-center gap-1"><Clock size={16} />{post.readTime}</span>
        </div>

        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mt-8 pt-6 border-t">
          <h3 className="text-sm font-semibold text-gray-500 mb-3 flex items-center gap-2">
            <Tag size={16} /> Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">#{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}