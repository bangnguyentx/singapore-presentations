'use client';
import { motion } from 'framer-motion';
import { SlideContent } from '@/data/slides';

interface Props {
  current: number;
  total: number;
  slides: SlideContent[];
  onNavigate: (index: number) => void;
}

export default function SideProgress({ current, total, slides, onNavigate }: Props) {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2 no-print">
      {slides.map((slide, index) => (
        <button
          key={slide.id}
          onClick={() => onNavigate(index)}
          className="group relative"
          aria-label={`Go to slide ${index + 1}: ${slide.title}`}
          title={slide.title}
        >
          <div className={`w-2 h-2 rounded-full transition-all ${
            index === current
              ? 'bg-singapore-red scale-125'
              : 'bg-gray-600 hover:bg-gray-400'
          }`} />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            <div className="glass-dark px-3 py-1 rounded text-xs">
              {slide.title}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
