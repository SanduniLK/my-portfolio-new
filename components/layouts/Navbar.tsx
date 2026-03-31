"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin, Mail, PenSquare, Home, FolderGit2, Code2, BookOpen, Contact } from "lucide-react"
import { ThemeToggle } from "../shared/ThemeToggle"

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Blog", href: "#blog", icon: BookOpen },
  { name: "Contact", href: "#contact", icon: Contact },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link 
              href="#home" 
              onClick={() => handleLinkClick("#home")}
              className="relative group"
            >
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Reshika
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <button
                    key={item.name}
                    onClick={() => handleLinkClick(item.href)}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 group ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    <item.icon size={18} className={`transition-transform group-hover:scale-110 ${isActive ? "text-blue-600 dark:text-blue-400" : ""}`} />
                    <span className="font-medium">{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Right Section - Theme Toggle, Write Blog, Social Icons */}
            <div className="hidden md:flex items-center space-x-3">
              <ThemeToggle />
              
              {/* Write Blog Button */}
              <Link
                href="/admin/blog"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105"
              >
                <PenSquare size={16} />
                Write Blog
              </Link>
              
              {/* Social Icons */}
              <div className="flex items-center gap-2 pl-2 border-l border-gray-200 dark:border-gray-700">
                <Link 
                  href="https://github.com/SanduniLK" 
                  target="_blank" 
                  className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  <Github size={20} />
                </Link>
                <Link 
                  href="https://linkedin.com/in/sanduniphgr/" 
                  target="_blank" 
                  className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  <Linkedin size={20} />
                </Link>
                <Link 
                  href="#contact" 
                  onClick={() => handleLinkClick("#contact")}
                  className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  <Mail size={20} />
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all z-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 z-40 md:hidden bg-white dark:bg-gray-900 pt-20"
          >
            <div className="flex flex-col h-full">
              <div className="flex-1 flex flex-col items-center justify-center space-y-6 p-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => handleLinkClick(item.href)}
                      className="flex items-center gap-3 text-2xl font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                    >
                      <item.icon size={24} className="group-hover:scale-110 transition-transform" />
                      {item.name}
                    </button>
                  </motion.div>
                ))}
                
                {/* Write Blog Button for Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    href="/admin/blog"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all mt-4"
                  >
                    <PenSquare size={18} />
                    Write Blog
                  </Link>
                </motion.div>
              </div>
              
              {/* Mobile Footer with Social Icons */}
              <div className="pb-8 flex justify-center gap-6 border-t border-gray-200 dark:border-gray-800 pt-6 mx-8">
                <ThemeToggle />
                <Link href="https://github.com/SanduniLK" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Github size={22} />
                </Link>
                <Link href="https://linkedin.com/in/sanduniphgr/" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                  <Linkedin size={22} />
                </Link>
                <Link href="#contact" onClick={() => handleLinkClick("#contact")} className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors">
                  <Mail size={22} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  )
}