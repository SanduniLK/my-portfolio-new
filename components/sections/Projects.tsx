"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "../shared/ProjectCard"
import { projects, Project } from "../../data/projects"
import { Github, Search, Bug, TestTube, Code2, Filter } from "lucide-react"

export function Projects() {
  const [category, setCategory] = useState<"all" | "software" | "testing">("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = projects
    .filter(p => category === "all" || p.category === category)
    .filter(p => 
      searchTerm === "" || 
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
    )

  // Get counts for each category
  const softwareCount = projects.filter(p => p.category === "software").length
  const testingCount = projects.filter(p => p.category === "testing").length

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-100 to-transparent dark:from-purple-950/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full mb-4">
            <Code2 size={16} />
            <span className="text-sm font-medium">Software & Testing Projects</span>
            <Bug size={16} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my work in healthcare, e-commerce, inventory management, and test automation.
          </p>
        </motion.div>

        {/* Search and Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-4xl mx-auto">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex gap-2">
              <button
                onClick={() => setCategory("all")}
                className={`px-5 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                  category === "all"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300"
                }`}
              >
                <Filter size={16} />
                All ({projects.length})
              </button>
              <button
                onClick={() => setCategory("software")}
                className={`px-5 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                  category === "software"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300"
                }`}
              >
                <Code2 size={16} />
                Software ({softwareCount})
              </button>
              <button
                onClick={() => setCategory("testing")}
                className={`px-5 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                  category === "testing"
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300"
                }`}
              >
                <Bug size={16} />
                Testing ({testingCount})
              </button>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={category + searchTerm}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {filteredProjects.map((project: Project, index: number) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500">No projects found matching your criteria.</p>
          </motion.div>
        )}

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/SanduniLK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-600 transition-all shadow-lg"
          >
            <Github size={20} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}