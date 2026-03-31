"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Eye, Upload, X, Image as ImageIcon } from "lucide-react"

export default function AdminBlogPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [preview, setPreview] = useState(false)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>("")
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "QA",
    tags: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setImageFile(null)
    setImagePreview("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Generate slug from title
    const slug = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    
    // Generate image path
    const imageName = imageFile ? `${slug}.jpg` : "your-image.jpg"
    const imagePath = `/images/blogs/${imageName}`
    
    setTimeout(() => {
      setIsSubmitting(false)
      
      // Show the blog code to copy
      const blogCode = `{
  id: ${Math.floor(Math.random() * 1000)},
  title: "${formData.title}",
  excerpt: "${formData.excerpt}",
  content: \`${formData.content}\`,
  image: "${imagePath}",
  category: "${formData.category}",
  author: "Reshika Geeganage",
  date: "${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}",
  readTime: "5 min read",
  slug: "${slug}",
  featured: false,
  tags: ${formData.tags ? `[${formData.tags.split(',').map(t => `"${t.trim()}"`).join(', ')}]` : "[]"}
}`

      // Also show image instruction
      let imageInstruction = ""
      if (imageFile) {
        imageInstruction = `\n\n📸 IMAGE INSTRUCTION:\nSave your image as: public${imagePath}\nThe image has been prepared for you to save manually.`
      }
      
      alert(`✅ Blog post ready to add!

Copy this to your data/blogs.ts file:

${blogCode}${imageInstruction}`)
      
      // Reset form
      setFormData({ title: "", excerpt: "", content: "", category: "QA", tags: "" })
      removeImage()
    }, 1000)
  }

  return (
    <main className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Write New Blog Post</h1>
          </div>
          <button
            onClick={() => setPreview(!preview)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <Eye size={18} />
            {preview ? "Edit Mode" : "Preview Mode"}
          </button>
        </div>

        {!preview ? (
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            {/* Image Upload Section */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Blog Image / Photo *
              </label>
              
              {!imagePreview ? (
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
                  <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="imageUpload"
                    className="cursor-pointer flex flex-col items-center gap-2"
                  >
                    <Upload size={40} className="text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-400">Click to upload image</span>
                    <span className="text-xs text-gray-500">PNG, JPG, JPEG up to 5MB</span>
                  </label>
                </div>
              ) : (
                <div className="relative">
                  <div className="relative h-48 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <p className="text-xs text-green-600 mt-2">✅ Image selected! It will be saved as /images/blogs/[slug].jpg</p>
                </div>
              )}
            </div>

            {/* Title */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Blog Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
                placeholder="How to Master Selenium WebDriver"
              />
              <p className="text-xs text-gray-500 mt-1">
                Slug will be: {formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || "your-slug"}
              </p>
            </div>

            {/* Category */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
              >
                <option value="QA">QA / Testing</option>
                <option value="Mobile">Mobile Development</option>
              </select>
            </div>

            {/* Excerpt */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Short Excerpt / Summary *
              </label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                required
                rows={3}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
                placeholder="A brief summary of your blog post (150-200 characters)..."
              />
              <p className="text-xs text-gray-500 mt-1">{formData.excerpt.length}/200 characters</p>
            </div>

            {/* Content */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Blog Content (HTML Format) *
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows={15}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-mono text-sm"
                placeholder={`<h1>Your Main Title</h1>

<p>Your introduction paragraph here...</p>

<h2>Section Heading</h2>
<p>Section content...</p>

<ul>
  <li>Point 1</li>
  <li>Point 2</li>
</ul>

<pre><code>// Code example
function example() {
  console.log("Hello World");
}</code></pre>

<blockquote>
  💡 Important note or tip
</blockquote>`}
              />
            </div>

            {/* Tags */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Tags (comma separated)
              </label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
                placeholder="Selenium, Automation, QA, Java"
              />
            </div>

            {/* HTML Help */}
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">📝 HTML Formatting Guide</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-blue-700 dark:text-blue-300">
                <div><code className="bg-white dark:bg-gray-800 px-1 rounded">&lt;h1&gt;Title&lt;/h1&gt;</code> - Main heading</div>
                <div><code className="bg-white dark:bg-gray-800 px-1 rounded">&lt;h2&gt;Section&lt;/h2&gt;</code> - Section heading</div>
                <div><code className="bg-white dark:bg-gray-800 px-1 rounded">&lt;p&gt;Text&lt;/p&gt;</code> - Paragraph</div>
                <div><code className="bg-white dark:bg-gray-800 px-1 rounded">&lt;ul&gt;&lt;li&gt;item&lt;/li&gt;&lt;/ul&gt;</code> - Bullet list</div>
                <div><code className="bg-white dark:bg-gray-800 px-1 rounded">&lt;ol&gt;&lt;li&gt;item&lt;/li&gt;&lt;/ol&gt;</code> - Numbered list</div>
                <div><code className="bg-white dark:bg-gray-800 px-1 rounded">&lt;pre&gt;&lt;code&gt;code&lt;/code&gt;&lt;/pre&gt;</code> - Code block</div>
                <div><code className="bg-white dark:bg-gray-800 px-1 rounded">&lt;blockquote&gt;quote&lt;/blockquote&gt;</code> - Quote box</div>
                <div><code className="bg-white dark:bg-gray-800 px-1 rounded">&lt;strong&gt;bold&lt;/strong&gt;</code> - Bold text</div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50"
            >
              {isSubmitting ? "Generating..." : "Generate Blog Post"}
            </button>
          </form>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Preview</h2>
            <div className="border-t pt-4">
              {/* Preview Image */}
              {imagePreview && (
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <h1 className="text-3xl font-bold mb-2">{formData.title || "Your Title Here"}</h1>
              <div className="flex gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                  {formData.category}
                </span>
              </div>
              <div className="prose max-w-none">
                {formData.content ? (
                  <div dangerouslySetInnerHTML={{ __html: formData.content }} />
                ) : (
                  <p className="text-gray-400">Your content will appear here...</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}