'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SlideContainer from '@/components/SlideContainer'
import Navbar from '@/components/Navbar'
import SideProgress from '@/components/SideProgress'
import PresenterControls from '@/components/PresenterControls'
import AccessibilityToggle from '@/components/AccessibilityToggle'
import SearchBar from '@/components/SearchBar'
import { slidesData } from '@/lib/constants'

export default function SlidesPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHighContrast, setIsHighContrast] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredSlides = slidesData.filter(slide =>
    slide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    slide.content.some(item => item.en.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % filteredSlides.length)
  }, [filteredSlides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + filteredSlides.length) % filteredSlides.length)
  }, [filteredSlides.length])

  // Auto-advance
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isPlaying, nextSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          nextSlide()
          break
        case 'ArrowLeft':
          prevSlide()
          break
        case 'p':
        case 'P':
          setIsPlaying(prev => !prev)
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [nextSlide, prevSlide])

  return (
    <div className={`min-h-screen ${isHighContrast ? 'high-contrast' : ''}`}>
      <Navbar />
      
      <div className="flex h-screen pt-16">
        <SideProgress 
          currentSlide={currentSlide} 
          totalSlides={filteredSlides.length}
          slides={filteredSlides}
          onSlideClick={setCurrentSlide}
        />
        
        <main className="flex-1 relative">
          <SlideContainer
            slides={filteredSlides}
            currentSlide={currentSlide}
            onSlideChange={setCurrentSlide}
          />
        </main>

        {/* Controls */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 no-print">
          <PresenterControls
            isPlaying={isPlaying}
            onPlayPause={() => setIsPlaying(!isPlaying)}
            onNext={nextSlide}
            onPrev={prevSlide}
            currentSlide={currentSlide}
            totalSlides={filteredSlides.length}
          />
          
          <div className="flex gap-2 justify-end">
            <SearchBar onSearch={setSearchQuery} />
            <AccessibilityToggle
              isHighContrast={isHighContrast}
              onToggle={() => setIsHighContrast(!isHighContrast)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
