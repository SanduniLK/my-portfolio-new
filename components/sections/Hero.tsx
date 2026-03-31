"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { 
  ArrowDown, 
  Github, 
  Linkedin, 
  Mail, 
  GraduationCap, 
  Bug, 
  TestTube, 
  Shield, 
  CheckCircle, 
  Briefcase,
  Smartphone,
  Code2
} from "lucide-react"
import { useState, useEffect } from "react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Dual Theme Colors (QA + Mobile) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-purple-700 to-indigo-800 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-950">
          {/* Bottom Curve - Fixed to match projects section background */}
          <div className="absolute bottom-0 left-0 w-full pointer-events-none">
            <svg 
              className="relative w-full h-16 md:h-20" 
              preserveAspectRatio="none" 
              viewBox="0 0 1440 120"
              style={{ display: 'block' }}
            >
              <path 
                fill="#F3F4F6" 
                d="M0,64 C360,120 1080,120 1440,64 L1440,120 L0,120 Z" 
              />
            </svg>
          </div>
        </div>
        
        {/* Animated QA & Mobile Icons Background */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 opacity-10"
        >
          <Bug size={80} className="text-white" />
        </motion.div>
        
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 opacity-10"
        >
          <Smartphone size={100} className="text-white" />
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-20 left-[20%] w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-20 right-[20%] w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left w-full"
          >
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 leading-tight"
            >
              <span className="bg-gradient-to-r from-yellow-300 via-pink-200 to-white bg-clip-text text-transparent">
                RESHIKA GEEGANAGE
              </span>
            </motion.h1>

            {/* Title - QUALITY ASSURANCE ENGINEER */}
            
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 justify-center lg:justify-start mb-4"
            >
              <GraduationCap size={18} className="text-yellow-300" />
              <span className="text-white/80 text-sm">
                Bachelor of Information Technology - University of Moratuwa (2022-2026)
              </span>
            </motion.div>

            {/* QA Engineer | Mobile Developer tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4"
            >
              <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm flex items-center gap-1">
                <Bug size={14} /> QA Engineer
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-white text-sm flex items-center gap-1">
                <Smartphone size={14} /> Mobile Developer
              </span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-4 justify-center lg:justify-start mb-6"
            >
              <Link 
                href="https://github.com/SanduniLK" 
                target="_blank"
                className="bg-white/10 hover:bg-gray-700 p-3 rounded-full text-white transition-all"
              >
                <Github size={20} />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/sanduniphgr/" 
                target="_blank"
                className="bg-white/10 hover:bg-blue-600 p-3 rounded-full text-white transition-all"
              >
                <Linkedin size={20} />
              </Link>
              <Link 
                href="mailto:geeganagesanduni83@gmail.com" 
                className="bg-white/10 hover:bg-pink-600 p-3 rounded-full text-white transition-all"
              >
                <Mail size={20} />
              </Link>
            </motion.div>

            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 mb-6 border border-white/20 max-w-xl"
            >
              <p className="text-white/90 text-sm leading-relaxed">
                IT undergraduate at University of Moratuwa specializing in <span className="text-green-300">Quality Assurance</span> and 
                <span className="text-blue-300"> Mobile Application Development</span>. Experienced in manual & automation testing 
                with Selenium, TestNG, and Playwright. Skilled in building cross-platform mobile apps with Flutter & Firebase. 
                Passionate about delivering high-quality, user-friendly software solutions.
              </p>
            </motion.div>

            {/* Buttons - Download CV and Hire Me */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/30 transition-all inline-flex items-center gap-2 text-lg"
              >
                <Briefcase size={20} />
                HIRE ME
              </Link>
              <a
                href="/cv.pdf"
                download
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-2 text-lg"
              >
                <ArrowDown size={20} />
                DOWNLOAD CV
              </a>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 inline-block"
            >
              <motion.div
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(34,197,94,0.4)", "0 0 0 10px rgba(34,197,94,0)", "0 0 0 0 rgba(34,197,94,0)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Available for QA Internship | Mobile Dev Opportunities
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end w-full"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Rotating Circle with QA & Mobile Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-white/30 border-t-yellow-400 border-r-green-400 border-b-blue-400 border-l-purple-400"
              >
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -right-2"
                >
                  <Bug size={24} className="text-yellow-300" />
                </motion.div>
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-2 -left-2"
                >
                  <Smartphone size={24} className="text-green-300" />
                </motion.div>
              </motion.div>
              
              {/* Image Container */}
              <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <Image
                  src="/images/profile/reshika.jpeg"
                  alt="Reshika Geeganage"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Dual Focus Badges */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-white" />
                  <span className="text-xs font-bold text-white">QA | Mobile</span>
                </div>
              </motion.div>

              {/* QA Badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -top-2 -left-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-2 shadow-xl"
              >
                <Code2 size={20} className="text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        >
          <Link
            href="#projects"
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
          >
            <span className="text-xs mb-1 font-medium">View QA & Mobile Projects</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}