'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SlideContent } from '@/data/slides';
import VietnameseOverlay from './VietnameseOverlay';
import Timeline from './Timeline';
import InteractiveMap from './InteractiveMap';
import Charts from './Charts';
import Gallery from './Gallery';
import * as Icons from 'lucide-react';

interface SlideProps {
  slide: SlideContent;
  isPresenterMode: boolean;
  isPaused: boolean;
}

export default function Slide({ slide, isPresenterMode, isPaused }: SlideProps) {
  const bgColor = slide.backgroundColor || '#0F1724';
  const textColor = slide.textColor || '#FFFFFF';

  return (
    <div
      className="relative w-full h-full flex flex-col overflow-y-auto"
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {/* Background Image (if present) */}
      {slide.image && (
        <div className="absolute inset-0 opacity-30">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-singapore-charcoal/50 to-singapore-charcoal" />
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 max-w-7xl mx-auto w-full">
        {/* Category Badge */}
        {slide.category && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1.5 glass text-sm font-semibold rounded-full text-singapore-gold">
              {slide.category}
            </span>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-slide-title font-display font-bold mb-4 leading-tight"
        >
          {slide.title}
        </motion.h1>

        {/* Vietnamese Title */}
        <VietnameseOverlay text={slide.titleVi} delay={0.4} />

        {/* Subtitle */}
        {slide.subtitle && (
          <>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl lg:text-slide-subtitle font-semibold mt-4 mb-2"
            >
              {slide.subtitle}
            </motion.h2>
            {slide.subtitleVi && (
              <VietnameseOverlay text={slide.subtitleVi} delay={0.6} />
            )}
          </>
        )}

        {/* Content Blocks */}
        <div className="mt-8 space-y-6 max-w-4xl">
          {slide.content.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              {block.type === 'paragraph' && (
                <div>
                  <p className="text-base md:text-lg leading-relaxed mb-2">
                    {block.text}
                  </p>
                  <VietnameseOverlay text={block.textVi} />
                </div>
              )}

              {block.type === 'list' && (
                <div>
                  <p className="text-lg font-semibold mb-3">{block.text}</p>
                  <VietnameseOverlay text={block.textVi} className="mb-3" />
                  <ul className="space-y-3 ml-6">
                    {block.items?.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 + i * 0.05 }}
                        className="flex flex-col"
                      >
                        <span className="text-base md:text-lg flex items-start gap-3">
                          <span className="text-singapore-red mt-1">•</span>
                          <span className="flex-1">{item.text}</span>
                        </span>
                        <VietnameseOverlay text={item.textVi} className="ml-6" />
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {block.type === 'quote' && (
                <blockquote className="border-l-4 border-singapore-red pl-6 italic bg-white/5 p-6 rounded-r-lg">
                  <p className="text-lg md:text-xl mb-2">{block.text}</p>
                  <VietnameseOverlay text={block.textVi} />
                </blockquote>
              )}

              {block.type === 'statistic' && (
                <div className="glass p-6 rounded-lg text-center">
                  <p className="text-4xl md:text-5xl font-bold text-singapore-gold mb-2">
                    {block.text}
                  </p>
                  <VietnameseOverlay text={block.textVi} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Key Facts */}
        {slide.facts && slide.facts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {slide.facts.map((fact, index) => {
              const IconComponent = Icons[fact.icon as keyof typeof Icons] as any;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  className="glass p-5 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 text-singapore-gold mb-3" />
                  )}
                  <div className="text-sm text-gray-400 mb-1">{fact.label}</div>
                  <VietnameseOverlay text={fact.labelVi} className="mb-2" />
                  <div className="text-xl font-bold">{fact.value}</div>
                  {fact.valueVi && (
                    <VietnameseOverlay text={fact.valueVi} className="text-sm" />
                  )}
                  {fact.year && (
                    <div className="text-xs text-gray-500 mt-2">{fact.year}</div>
                  )}
                  {fact.source && (
                    <div className="text-xs text-gray-600 mt-1 source-citation">
                      Source: {fact.source}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Timeline */}
        {slide.timeline && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12"
          >
            <Timeline events={slide.timeline.events} />
          </motion.div>
        )}

        {/* Interactive Map */}
        {slide.map && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12 h-96 rounded-lg overflow-hidden"
          >
            <InteractiveMap config={slide.map} />
          </motion.div>
        )}

        {/* Charts */}
        {slide.chart && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12"
          >
            <Charts config={slide.chart} />
          </motion.div>
        )}
      </div>

      {/* Presenter Notes (only visible in presenter mode) */}
      {isPresenterMode && (
        <div className="slide-notes">
          <h3 className="text-lg font-semibold mb-2 text-singapore-gold">
            Speaker Notes:
          </h3>
          <p className="text-sm leading-relaxed">{slide.speakerNotes}</p>
        </div>
      )}
    </div>
  );
}
