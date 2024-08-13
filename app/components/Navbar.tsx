'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import Link from 'next/link';
import { useTheme } from '../context/ThemeProvider';

export const Navbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'flex max-w-fit fixed top-4 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4',
        className,
      )}
    >
      {navItems.map((navItem: any, idx: number) => (
        <Link
          key={`link-${idx}`}
          href={navItem.link}
          className={cn(
            'relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500',
          )}
        >
          <span>{navItem.icon}</span>
          <span>{navItem.name}</span>
        </Link>
      ))}
      <button
        aria-label="night mode or light mode toggle"
        onClick={toggleTheme}
        className="border text-sm font-medium relative border-neutral-400 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
      >
        {theme === 'light' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
          >
            <path
              fill="none"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M31.75 6.479A18.5 18.5 0 1 1 6.479 31.75"
            />
            <path
              fill="none"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M32.02 6.75A18.5 18.5 0 0 1 6.75 32.02M10 8v4m-2-2h4m0 8v3m-1.5-1.5h3m17-5.5v3M29 15.5h3m6.5-10v3M37 7h3M7.5 41h3M9 39.5v3M39.5 36h3M41 34.5l.02 3"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 15q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15m0 1q-1.671 0-2.835-1.164Q8 13.67 8 12t1.165-2.835T12 8t2.836 1.165T16 12t-1.164 2.836T12 16M2 12.5q-.213 0-.356-.144t-.144-.357t.144-.356T2 11.5h2.5q.213 0 .356.144t.144.357t-.144.356t-.356.143zm17.5 0q-.213 0-.356-.144T19 11.999t.144-.356t.356-.143H22q.213 0 .356.144t.144.357t-.144.356T22 12.5zM12 5q-.213 0-.357-.144T11.5 4.5V2q0-.213.144-.356t.357-.144t.356.144T12.5 2v2.5q0 .213-.144.356T11.999 5m0 17.5q-.212 0-.356-.144T11.5 22v-2.5q0-.213.144-.356t.357-.144t.356.144t.143.356V22q0 .213-.144.356t-.357.144M6.362 7.03l-1.44-1.395q-.147-.14-.144-.344t.149-.37q.16-.165.354-.165t.354.165L7.05 6.342q.16.166.16.354q0 .189-.15.354t-.342.153t-.356-.172m12.004 12.048l-1.416-1.421q-.16-.166-.16-.357t.16-.351q.13-.165.327-.153q.196.013.362.172l1.44 1.397q.146.14.143.344t-.149.369q-.16.165-.354.165t-.354-.165M16.95 7.059q-.165-.15-.153-.34t.172-.358l1.397-1.44q.14-.146.344-.143t.369.149q.165.16.165.354t-.165.353L17.658 7.05q-.166.16-.354.16t-.354-.15M4.921 19.083q-.165-.17-.165-.364t.165-.353l1.421-1.416q.166-.16.357-.16q.192 0 .351.16q.146.13.134.327q-.013.196-.153.362l-1.397 1.44q-.159.165-.353.162q-.195-.002-.36-.158M12 12"
            />
          </svg>
        )}
        {theme === 'light' ? (
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-black to-transparent h-[1.5px]" />
        ) : (
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-white to-transparent h-[1.5px]" />
        )}
      </button>
    </motion.div>
  );
};
