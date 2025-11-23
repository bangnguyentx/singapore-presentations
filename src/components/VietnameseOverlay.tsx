typescript
'use client';
import { motion } from 'framer-motion';

interface Props {
  text: string;
  delay?: number;
  className?: string;
}

export default function VietnameseOverlay({ text, delay = 0, className = '' }: Props) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ delay, duration: 0.5 }}
      className={`vietnamese-overlay ${className}`}
    >
      {text}
    </motion.p>
  );
}
