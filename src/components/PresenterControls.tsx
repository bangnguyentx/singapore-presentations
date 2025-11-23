'use client';
import { Play, Pause, ChevronLeft, ChevronRight, Presentation, PlayCircle, PauseCircle } from 'lucide-react';

interface Props {
  isPresenterMode: boolean;
  onTogglePresenter: () => void;
  isAutoPlay: boolean;
  onToggleAutoPlay: () => void;
  isPaused: boolean;
  onTogglePause: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentSlide: number;
  totalSlides: number;
}

export default function PresenterControls({
  isPresenterMode,
  onTogglePresenter,
  isAutoPlay,
  onToggleAutoPlay,
  isPaused,
  onTogglePause,
  onPrev,
  onNext,
  currentSlide,
  totalSlides,
}: Props) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 no-print">
      <div className="glass-dark px-6 py-3 rounded-full flex items-center gap-4">
        <button
          onClick={onPrev}
          disabled={currentSlide === 1}
          className="p-2 hover:bg-white/10 rounded transition disabled:opacity-30"
          aria-label="Previous slide"
          title="Previous (←)"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={onTogglePause}
          className="p-2 hover:bg-white/10 rounded transition"
          aria-label={isPaused ? 'Resume' : 'Pause'}
          title={isPaused ? 'Resume (Space)' : 'Pause (Space)'}
        >
          {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
        </button>

        <button
          onClick={onToggleAutoPlay}
          className={`p-2 rounded transition ${
            isAutoPlay ? 'bg-singapore-red text-white' : 'hover:bg-white/10'
          }`}
          aria-label={isAutoPlay ? 'Stop auto-play' : 'Start auto-play'}
          title="Auto-play"
        >
          {isAutoPlay ? <PauseCircle className="w-5 h-5" /> : <PlayCircle className="w-5 h-5" />}
        </button>

        <button
          onClick={onTogglePresenter}
          className={`p-2 rounded transition ${
            isPresenterMode ? 'bg-singapore-gold text-singapore-charcoal' : 'hover:bg-white/10'
          }`}
          aria-label={isPresenterMode ? 'Exit presenter mode' : 'Enter presenter mode'}
          title="Presenter Mode (Ctrl+P)"
        >
          <Presentation className="w-5 h-5" />
        </button>

        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          className="p-2 hover:bg-white/10 rounded transition disabled:opacity-30"
          aria-label="Next slide"
          title="Next (→)"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
