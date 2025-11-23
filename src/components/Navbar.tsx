typescript
'use client';
import { Search, Printer, Presentation } from 'lucide-react';

interface Props {
  currentSlide: number;
  totalSlides: number;
  onOpenSearch: () => void;
  onPrint: () => void;
  isPresenterMode: boolean;
}

export default function Navbar({ currentSlide, totalSlides, onOpenSearch, onPrint, isPresenterMode }: Props) {
  return (
    <nav className="fixed top-0 right-0 z-50 flex items-center gap-4 p-4 glass-dark no-print">
      <span className="text-sm font-mono">
        {currentSlide} / {totalSlides}
      </span>
      <button
        onClick={onOpenSearch}
        className="p-2 hover:bg-white/10 rounded transition"
        aria-label="Search slides"
        title="Search (Ctrl+F)"
      >
        <Search className="w-5 h-5" />
      </button>
      <button
        onClick={onPrint}
        className="p-2 hover:bg-white/10 rounded transition"
        aria-label="Print slides"
        title="Print (Ctrl+P)"
      >
        <Printer className="w-5 h-5" />
      </button>
      {isPresenterMode && (
        <div className="flex items-center gap-2 text-singapore-gold">
          <Presentation className="w-5 h-5" />
          <span className="text-xs">Presenter Mode</span>
        </div>
      )}
    </nav>
  );
}
