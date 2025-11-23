'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play, BookOpen, Globe } from 'lucide-react';
import Hero3D from '@/components/Hero3D';
import { slides } from '@/data/slides';

export default function HomePage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const startPresentation = () => {
    router.push(`/slides/${slides[0].slug}`);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen bg-singapore-charcoal overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-singapore-red/20 via-transparent to-transparent" />
      
      {/* 3D Hero Background */}
      <div className="absolute inset-0 opacity-40">
        <Hero3D />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Flag or Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-singapore-red rounded-full animate-pulse-slow opacity-50" />
              <Globe className="w-32 h-32 text-white relative z-10" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-display text-6xl md:text-8xl font-bold text-white mb-4"
          >
            Singapore
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-vietnamese text-2xl md:text-3xl mb-6"
          >
            Singapore - Quốc gia đảo thịnh vượng
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-200 mb-3"
          >
            A Global City-State at the Crossroads of Asia
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-vietnamese text-lg md:text-xl mb-12"
          >
            Thành phố quốc gia toàn cầu tại ngã tư châu Á
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={startPresentation}
              className="group flex items-center gap-3 px-8 py-4 bg-singapore-red hover:bg-singapore-red-dark text-white font-semibold rounded-lg transition-all duration-300 shadow-glow-red hover:shadow-lg hover:scale-105"
            >
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Start Presentation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              href="/slides/quick-facts"
              className="flex items-center gap-3 px-8 py-4 glass text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <BookOpen className="w-5 h-5" />
              <span>Quick Facts</span>
            </Link>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { label: 'Slides', labelVi: 'Trang chiếu', value: slides.length },
              { label: 'Topics', labelVi: 'Chủ đề', value: '10+' },
              { label: 'Languages', labelVi: 'Ngôn ngữ', value: '2' },
              { label: 'Interactive', labelVi: 'Tương tác', value: 'Yes' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="glass-dark p-6 rounded-lg text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-singapore-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
                <div className="text-xs vietnamese-overlay mt-1">
                  {stat.labelVi}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 text-sm mb-4">Features:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Interactive Maps',
                'Data Visualizations',
                '3D Graphics',
                'Bilingual Content',
                'Print/PDF Export',
                'Presenter Mode',
                'Keyboard Navigation',
                'Mobile Friendly',
              ].map((feature, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + index * 0.05 }}
                  className="px-4 py-2 glass text-xs text-gray-300 rounded-full hover:bg-white/20 transition-all"
                >
                  {feature}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Navigation hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-16"
          >
            <p className="text-sm text-gray-500">
              Use arrow keys ← → or swipe to navigate slides
            </p>
            <p className="text-xs vietnamese-overlay mt-1">
              Dùng phím mũi tên hoặc vuốt để điều hướng
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gray-500 rounded-full"
            />
          </div>
          <span className="text-xs">Scroll to explore</span>
        </div>
      </motion.div>
    </div>
  );
}
