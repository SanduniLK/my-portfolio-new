"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, CheckCircle, ExternalLink } from "lucide-react"
import type { Project } from "../../data/projects"

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col"
    >
      {/* Clickable link wrapper */}
      <Link href={`/projects/${project.slug}`} className="block flex-1">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white font-bold text-2xl">
              {project.title.charAt(0)}
            </div>
          )}
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 z-20">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full shadow-lg">
                Featured
              </span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
              project.category === "software" 
                ? "bg-blue-500 text-white"
                : "bg-red-500 text-white"
            }`}>
              {project.category === "software" ? "Software" : "Testing"}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* GitHub Link - Separate from main link */}
      <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">
            {project.technologies.length} technologies
          </span>
          <Link
            href={project.githubUrl}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:gap-2 transition-all text-sm font-medium"
          >
            <Github size={16} />
            View Code
          </Link>
        </div>
      </div>
    </motion.div>
  )
}