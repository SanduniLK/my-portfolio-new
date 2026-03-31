"use client"

import { motion } from "framer-motion"
import { 
  Code2, 
  Database, 
  Smartphone,
  TestTube,
  GraduationCap,
  Award,
  Zap,
  GitBranch
} from "lucide-react"

const skillCategories = [
  {
    name: "Web Development",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "PHP", level: 75 },
      { name: "HTML/CSS", level: 85 },
      { name: "JavaScript", level: 70 },
      { name: "Node.js", level: 60 }
    ]
  },
  {
    name: "Mobile Development",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Flutter", level: 80 },
      { name: "React Native", level: 75 }
    ]
  },
  {
    name: "Test Automation",
    icon: TestTube,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Selenium", level: 85 },
      { name: "Java", level: 80 },
      { name: "TestNG", level: 75 },
      { name: "Playwright", level: 70 },
      { name: "Page Object Model", level: 80 }
    ]
  },
  {
    name: "Databases & Tools",
    icon: Database,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "SQL", level: 75 },
       { name: "firebase", level: 90 },
      
    ]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full mb-4">
            <Zap size={16} />
            <span className="text-sm font-medium">My Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I&apos;ve worked with a variety of technologies in web, mobile, and test automation.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>

              {/* Skills with Progress Bars */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="w-full"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Projects Completed", value: "9+", icon: Award },
            { label: "University", value: "UoM", icon: GraduationCap },
            { label: "Testing Focus", value: "Mobile", icon: TestTube },
            { label: "Testing Focus", value: "QA", icon: TestTube },
            { label: "Git Repos", value: "21+", icon: GitBranch },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-lg"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}