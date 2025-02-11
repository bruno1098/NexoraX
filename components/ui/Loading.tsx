"use client";

import { motion } from 'framer-motion';
import { useTheme } from '@/components/providers/ThemeProvider';

export default function Loading() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="pl relative w-56 h-56 flex justify-center items-center">
        {/* Dots */}
        {Array.from({ length: 12 }).map((_, index) => (
          <motion.div
            key={index}
            className="pl__dot absolute"
            style={{
              transform: `rotate(${-index * 30}deg) translateX(5em) rotate(${index * 30}deg)`,
              zIndex: index < 6 ? 6 - index : index - 5,
              animationDelay: `${-index * 0.1666666667}s`,
            }}
            initial={false}
          >
            <motion.div
              className="absolute w-6 h-6 rounded-full bg-background"
              style={{
                boxShadow: theme === 'dark' 
                  ? '0.05em 0 0.1em rgba(255, 255, 255, 0.2) inset'
                  : '0.05em 0 0.1em rgba(0, 0, 0, 0.2) inset'
              }}
              animate={{
                backgroundColor: [
                  'var(--background)',
                  'var(--primary)',
                  'var(--background)'
                ],
                transform: [
                  'translate(0, 0)',
                  'translate(-71%, -71%)',
                  'translate(0, 0)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: -index * 0.1666666667
              }}
            />
            <motion.div
              className="absolute bottom-0 w-6 rounded-[0.75em] bg-primary"
              style={{
                height: '3em',
                transformOrigin: '50% 2.25em',
                transform: 'rotate(-45deg)',
                clipPath: 'polygon(0 75%, 100% 75%, 100% 100%, 0 100%)',
                boxShadow: theme === 'dark'
                  ? '0.1em 0.3em 0.2em rgba(255, 255, 255, 0.4) inset, 0 -0.4em 0.2em #2e3138 inset, 0 -1em 0.25em rgba(0, 0, 0, 0.3) inset'
                  : '0.1em 0.3em 0.2em rgba(0, 0, 0, 0.4) inset, 0 -0.4em 0.2em #fff inset, 0 -1em 0.25em rgba(0, 0, 0, 0.1) inset'
              }}
              animate={{
                backgroundColor: [
                  'var(--background)',
                  'var(--primary)',
                  'var(--background)'
                ],
                clipPath: [
                  'polygon(0 75%, 100% 75%, 100% 100%, 0 100%)',
                  'polygon(0 25%, 100% 25%, 100% 100%, 0 100%)',
                  'polygon(0 75%, 100% 75%, 100% 100%, 0 100%)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: -index * 0.1666666667
              }}
            />
          </motion.div>
        ))}

        {/* Loading Text */}
        <div 
          className="pl__text absolute text-sm uppercase tracking-wider"
          style={{
            transform: 'rotateZ(-45deg)',
            textShadow: theme === 'dark' 
              ? '0 0 0.1em rgba(255, 255, 255, 0.5)'
              : '0 0 0.1em rgba(0, 0, 0, 0.5)'
          }}
        >
          Loading...
        </div>
      </div>

      <style jsx>{`
        .pl {
          box-shadow: 2em 0 2em rgba(0, 0, 0, 0.2) inset,
                     -2em 0 2em rgba(255, 255, 255, 0.1) inset;
          transform: rotateX(30deg) rotateZ(45deg);
          border-radius: 50%;
        }
        .pl__dot {
          top: calc(50% - 0.75em);
          left: calc(50% - 0.75em);
          width: 1.5em;
          height: 1.5em;
          border-radius: 50%;
          box-shadow: 0.1em 0.1em 0 0.1em black,
                     0.3em 0 0.3em rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
} 