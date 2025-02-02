'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const Background = () => {
  return (
    <div className="align-center relative flex min-h-screen w-full justify-center">
      <motion.div className="absolute left-0 top-0 h-full w-full bg-[#15402D]" />
      <motion.div
        className="flex min-h-screen w-full items-center justify-center"
        animate={{
          scale: [1, 1, 1.5, 1.5, 1],
          rotate: [0, 0, 180, 180, 360],
          borderRadius: ['0%', '0%', '50%', '50%', '0%'],
        }}
        transition={{
          duration: 1.2,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 0.2,
        }}
      >
        <Image src="/images/background.png" alt="background" width={200} height={200} />
      </motion.div>
    </div>
  );
};
