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
  Smartphone,
  Briefcase,
  CheckCircle,
  Code2
} from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 lg:py-0">
      {/* Background with Dual Theme Colors - EXACT ORIGINAL STYLE */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-purple-700 to-indigo-800 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-950">
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
        
        {/* Animated QA & Mobile Icons Background - EXACT ORIGINAL ANIMATIONS */}
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 opacity-10 hidden md:block"
        >
          <Bug size={80} className="text-white" />
        </motion.div>
        
        <motion.div
          animate={{ rotate: [360, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-10 opacity-10 hidden md:block"
        >
          <Smartphone size={100} className="text-white" />
        </motion.div>
        
        {/* Blurred Glows - EXACT ORIGINAL STYLE */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-20 left-[20%] w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-20 right-[20%] w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Content - Name & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left w-full order-2 lg:order-1"
          >
            {/* Name - Adjusted text size for small mobile screens */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 leading-tight"
            >
              <span className="bg-gradient-to-r from-yellow-300 via-pink-200 to-white bg-clip-text text-transparent">
                RESHIKA GEEGANAGE
              </span>
            </motion.h1>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 justify-center lg:justify-start mb-4"
            >
              <GraduationCap size={18} className="text-yellow-300 shrink-0" />
              <span className="text-white/80 text-[10px] sm:text-sm">
                Bachelor of Information Technology - University of Moratuwa (2022-2026)
              </span>
            </motion.div>

            {/* Tags */}
            <motion.div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-white text-xs flex items-center gap-1">
                <Bug size={14} /> QA Engineer
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-white text-xs flex items-center gap-1">
                <Smartphone size={14} /> Mobile Developer
              </span>
            </motion.div>

            {/* Social Links - EXACT ORIGINAL STYLE */}
            <motion.div className="flex gap-4 justify-center lg:justify-start mb-6">
              <Link href="https://github.com/SanduniLK" target="_blank" className="bg-white/10 hover:bg-gray-700 p-3 rounded-full text-white transition-all">
                <Github size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/sanduniphgr/" target="_blank" className="bg-white/10 hover:bg-blue-600 p-3 rounded-full text-white transition-all">
                <Linkedin size={20} />
              </Link>
              <Link href="mailto:geeganagesanduni83@gmail.com" className="bg-white/10 hover:bg-pink-600 p-3 rounded-full text-white transition-all">
                <Mail size={20} />
              </Link>
            </motion.div>

            {/* Professional Summary - Personal Details Added */}
            <motion.div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 mb-6 border border-white/20 max-w-xl mx-auto lg:mx-0">
              <p className="text-white/90 text-sm leading-relaxed text-left">
                I am a passionate <span className="text-green-300">Quality Assurance Engineer</span> and 
                <span className="text-blue-300"> Mobile App Developer</span>. I focus on delivering bug-free, 
                high-quality software using Selenium and Playwright, while building beautiful 
                cross-platform mobile apps with Flutter & Firebase. 
              </p>
            </motion.div>

            {/* Buttons - Mobile Responsive Stacking */}
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 text-lg"
              >
                <Briefcase size={20} /> HIRE ME
              </Link>
              <a
                href="/reshika_flutter_intern.pdf"
                download
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2 text-lg"
              >
                <ArrowDown size={20} /> DOWNLOAD CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Photo - EXACT ORIGINAL ANIMATED CIRCLE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end w-full order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Rotating Circle - ORIGINAL DESIGN */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-white/30 border-t-yellow-400 border-r-green-400 border-b-blue-400 border-l-purple-400"
              >
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity }} className="absolute -top-2 -right-2">
                  <Bug size={24} className="text-yellow-300" />
                </motion.div>
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity }} className="absolute -bottom-2 -left-2">
                  <Smartphone size={24} className="text-green-300" />
                </motion.div>
              </motion.div>
              
              {/* Image Container - ORIGINAL DESIGN */}
              <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <Image
                  src="/images/profile/reshika.jpeg"
                  alt="Reshika Geeganage"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Dual Focus Badge - ORIGINAL DESIGN */}
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}