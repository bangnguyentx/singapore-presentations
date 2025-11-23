'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Globe, MapPin, TrendingUp, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-red to-primary-dark text-primary-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            Singapore
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              href="/slides"
              className="bg-primary-white text-primary-red px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              Start Presentation
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-poppins">
            SINGAPORE
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto">
            The Lion City - A Global Hub of Innovation, Culture, and Opportunity
          </p>
          <p className="vietnamese-translation text-center max-w-2xl mx-auto">
            Thành phố Sư tử - Trung tâm toàn cầu về đổi mới, văn hóa và cơ hội
          </p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          >
            <StatCard icon={<Users />} number="5.7M" label="Population" />
            <StatCard icon={<TrendingUp />} number="$497B" label="GDP (2023)" />
            <StatCard icon={<MapPin />} number="728.6" label="Area (km²)" />
            <StatCard icon={<Globe />} number="1st" label="Ease of Business" />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-16"
          >
            <Link
              href="/slides"
              className="bg-primary-white text-primary-red px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform"
            >
              Explore Presentation
            </Link>
            <button className="border-2 border-primary-white text-primary-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:bg-opacity-10 transition-all">
              Download PDF
            </button>
          </motion.div>
        </motion.div>
      </main>

      {/* 3D Globe Background */}
      <div className="fixed inset-0 z-0 opacity-20">
        {/* Simple CSS globe - replace with Three.js in production */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-4 border-primary-gold"></div>
      </div>
    </div>
  )
}

function StatCard({ icon, number, label }: { icon: React.ReactNode, number: string, label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center"
    >
      <div className="flex justify-center mb-2">{icon}</div>
      <div className="text-2xl font-bold mb-1">{number}</div>
      <div className="text-sm opacity-80">{label}</div>
    </motion.div>
  )
}
