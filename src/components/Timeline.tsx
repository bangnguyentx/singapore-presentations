'use client';
import { motion } from 'framer-motion';
import { TimelineEvent } from '@/data/slides';
import VietnameseOverlay from './VietnameseOverlay';

interface Props {
  events: TimelineEvent[];
}

export default function Timeline({ events }: Props) {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-singapore-red/30" />
      <div className="space-y-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-20 timeline-item"
          >
            <div className="absolute left-4 top-2 w-8 h-8 bg-singapore-red rounded-full flex items-center justify-center text-xs font-bold">
              {index + 1}
            </div>
            <div className="glass p-4 rounded-lg">
              <div className="text-singapore-gold font-bold text-lg mb-2">
                {event.year}
              </div>
              <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
              <VietnameseOverlay text={event.titleVi} className="mb-2" />
              <p className="text-sm leading-relaxed">{event.description}</p>
              <VietnameseOverlay text={event.descriptionVi} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
