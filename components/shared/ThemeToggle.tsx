"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Sun, Moon, Monitor } from "lucide-react"
import { useState, useEffect } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Use a timeout to avoid the cascading render warning
    const timer = setTimeout(() => {
      setMounted(true)
    }, 0)
    
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setTheme("light")}
        className={`relative p-2 rounded-full transition-colors ${
          theme === "light" 
            ? "bg-white text-yellow-500 shadow-md" 
            : "text-gray-500 hover:text-yellow-500"
        }`}
      >
        <Sun size={18} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setTheme("dark")}
        className={`relative p-2 rounded-full transition-colors ${
          theme === "dark" 
            ? "bg-gray-700 text-blue-400 shadow-md" 
            : "text-gray-500 hover:text-blue-400"
        }`}
      >
        <Moon size={18} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setTheme("system")}
        className={`relative p-2 rounded-full transition-colors ${
          theme === "system" 
            ? "bg-gray-200 dark:bg-gray-600 text-purple-500 shadow-md" 
            : "text-gray-500 hover:text-purple-500"
        }`}
      >
        <Monitor size={18} />
      </motion.button>
    </div>
  )
}