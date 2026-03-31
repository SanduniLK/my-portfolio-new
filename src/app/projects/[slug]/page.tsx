import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Github, ExternalLink, CheckCircle, Code2, Server, Bug } from "lucide-react"
import { getAllProjectSlugs, getProjectBySlug } from "../../../../data/projects"


export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug: string) => ({
    slug: slug,
  }))
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  // Get category icon
  const getCategoryIcon = () => {
    if (project.category === "software") {
      return <Code2 size={20} className="text-blue-500" />
    }
    return <Bug size={20} className="text-red-500" />
  }

  const getCategoryColor = () => {
    if (project.category === "software") {
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
    }
    return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
  }

  return (
    <main className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-12">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-6 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Category Badge */}
        <div className="mb-6">
          <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor()}`}>
            {getCategoryIcon()}
            {project.category === "software" ? "Software Development" : "QA & Testing"}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {project.title}
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          {project.description}
        </p>

        {/* Main Image */}
        <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden mb-8 shadow-lg bg-gradient-to-r from-blue-500 to-purple-500">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Github size={20} />
            View Source Code
          </a>
        </div>

        {/* Long Description */}
        {project.longDescription && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About the Project</h2>
            <div 
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:text-gray-900 dark:prose-headings:text-white
                prose-h2:text-xl prose-h2:font-bold prose-h2:mt-6 prose-h2:mb-3
                prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-p:leading-relaxed
                prose-ul:text-gray-600 dark:prose-ul:text-gray-400
                prose-li:mb-1
                prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              "
              dangerouslySetInnerHTML={{ __html: project.longDescription }}
            />
          </div>
        )}

        {/* Key Features */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <CheckCircle size={24} className="text-green-500" />
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-start gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Server size={24} className="text-purple-500" />
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub Section */}
        <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">View Full Project</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Check out the complete code and documentation on GitHub</p>
            </div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github size={20} />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}