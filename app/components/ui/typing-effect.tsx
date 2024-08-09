'use client';

import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
};

export default function TypingEffect() {
  const textIndex = useMotionValue(0);
  const texts = [
    'Full Stack Developer',
    'Web Developer',
    'Software Engineer',
    'Front-End Developer',
    'Back-End Developer',
    'IT Support',
  ];
  const baseText = useTransform(textIndex, (latest) => texts[latest] || '');
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest),
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    const controls = animate(count, 60, {
      type: 'tween',
      duration: 1,
      ease: 'easeIn',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    return controls.stop;
  }, []);

  return (
    <div className="inline-flex items-center">
      <motion.h1 className="font-medium title-font mt-4 dark:text-white text-lg flex items-center">
        <motion.span>{displayText}</motion.span>
        <motion.div
          variants={cursorVariants}
          animate="blinking"
          className="inline-block h-5 w-[1px] ml-[1px] translate-y-[1px] dark:bg-white bg-neutral-600"
        />
      </motion.h1>
    </div>
  );
}
