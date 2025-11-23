'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { slides, SlideContent } from '@/data/slides';
import Slide from './Slide';
import Navbar from './Navbar';
import SideProgress from './SideProgress';
import PresenterControls from './PresenterControls';
import SearchBar from './SearchBar';
import AccessibilityToggle from './AccessibilityToggle';

interface SlideContainerProps {
  initialSlug?: string;
}

export default function SlideContainer({ initialSlug }: SlideContainerProps) {
  const router = useRouter();
  const pathname = usePathname();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPresenterMode, setIsPresenterMode] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [searchOpen, setSearchOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  
  const autoPlayInterval = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Initialize slide from URL
  useEffect(() => {
    if (initialSlug) {
      const index = slides.findIndex(s => s.slug === initialSlug);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [initialSlug]);

  // Update URL when slide changes
  useEffect(() => {
    const currentSlide = slides[currentIndex];
    if (currentSlide) {
      router.push(`/slides/${currentSlide.slug}`, { scroll: false });
    }
  }, [currentIndex, router]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (searchOpen) return; // Don't navigate when search is open
    
    switch (e.key) {
      case 'ArrowRight':
      case ' ': // Space
        e.preventDefault();
        nextSlide();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        prevSlide();
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(slides.length - 1);
        break;
      case 'p':
      case 'P':
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          setIsPresenterMode(prev => !prev);
        }
        break;
      case 'Escape':
        setSearchOpen(false);
        setIsPresenterMode(false);
        break;
      case '/':
      case 'f':
      case 'F':
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          setSearchOpen(true);
        }
        break;
    }
  }, [searchOpen]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Touch/swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  // Navigation functions
  const nextSlide = () => {
    setDirection('right');
    setCurrentIndex(prev => (prev + 1) % slides.length);
    announceSlideChange('next');
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);
    announceSlideChange('previous');
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
    announceSlideChange('jumped');
  };

  // Screen reader announcement
  const announceSlideChange = (action: string) => {
    const announcement = document.getElementById('aria-announcements');
    if (announcement) {
      const currentSlide = slides[currentIndex];
      announcement.textContent = `Navigated to ${action} slide: ${currentSlide.title}. Slide ${currentIndex + 1} of ${slides.length}`;
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay && !isPaused) {
      autoPlayInterval.current = setInterval(() => {
        nextSlide();
      }, 10000); // 10 seconds per slide
    }

    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };
  }, [isAutoPlay, isPaused, currentIndex]);

  // Accessibility settings
  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    if (largeText) {
      document.body.classList.add('large-text');
    } else {
      document.body.classList.remove('large-text');
    }
  }, [largeText]);

  // Print/Export to PDF
  const handlePrint = () => {
    window.print();
  };

  const currentSlide = slides[currentIndex];

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-singapore-charcoal"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Navigation */}
      <Navbar
        currentSlide={currentIndex + 1}
        totalSlides={slides.length}
        onOpenSearch={() => setSearchOpen(true)}
        onPrint={handlePrint}
        isPresenterMode={isPresenterMode}
      />

      {/* Side Progress Indicator */}
      <SideProgress
        current={currentIndex}
        total={slides.length}
        slides={slides}
        onNavigate={goToSlide}
      />

      {/* Main Slide Content */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ x: direction === 'right' ? '100%' : '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 'right' ? '-100%' : '100%', opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            className="absolute inset-0"
          >
            <Slide
              slide={currentSlide}
              isPresenterMode={isPresenterMode}
              isPaused={isPaused}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Presenter Controls */}
      <PresenterControls
        isPresenterMode={isPresenterMode}
        onTogglePresenter={() => setIsPresenterMode(!isPresenterMode)}
        isAutoPlay={isAutoPlay}
        onToggleAutoPlay={() => setIsAutoPlay(!isAutoPlay)}
        isPaused={isPaused}
        onTogglePause={() => setIsPaused(!isPaused)}
        onPrev={prevSlide}
        onNext={nextSlide}
        currentSlide={currentIndex + 1}
        totalSlides={slides.length}
      />

      {/* Search Modal */}
      {searchOpen && (
        <SearchBar
          slides={slides}
          onClose={() => setSearchOpen(false)}
          onNavigate={(index) => {
            goToSlide(index);
            setSearchOpen(false);
          }}
        />
      )}

      {/* Accessibility Toggle */}
      <AccessibilityToggle
        highContrast={highContrast}
        onToggleContrast={() => setHighContrast(!highContrast)}
        largeText={largeText}
        onToggleTextSize={() => setLargeText(!largeText)}
      />

      {/* Navigation Hint for first-time users */}
      {currentIndex === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-sm text-gray-400 no-print"
        >
          <p>Use ← → arrow keys or swipe to navigate</p>
          <p className="text-xs vietnamese-overlay mt-1">
            Dùng phím mũi tên hoặc vuốt để điều hướng
          </p>
        </motion.div>
      )}
    </div>
  );
}
