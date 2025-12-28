'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing...');
  const [isMounted, setIsMounted] = useState(false);

  const statusMessages = [
    'Loading Assets...',
    'Initializing Neural Net...',
    'Compiling Shaders...',
    'Rendering 3D Models...',
    'Optimizing Performance...',
    'Establishing Connection...',
    'Almost Ready...',
    'Ready.',
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Check if preloader has been shown in this session
    const hasShownPreloader = sessionStorage.getItem('preloaderShown');
    
    if (hasShownPreloader) {
      setIsLoading(false);
      return;
    }

    // Progress counter animation
    const duration = 2500; // 2.5 seconds
    const steps = 100;
    const increment = duration / steps;

    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);

      // Change status text at intervals
      const messageIndex = Math.floor((currentProgress / 100) * statusMessages.length);
      setStatusText(statusMessages[Math.min(messageIndex, statusMessages.length - 1)]);

      if (currentProgress >= 100) {
        clearInterval(progressInterval);
        // Wait a bit before hiding
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem('preloaderShown', 'true');
        }, 500);
      }
    }, increment);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center font-mono"
        >
          {/* Background Matrix Effect - Client-side only */}
          {isMounted && (
            <div className="absolute inset-0 opacity-5">
              {[...Array(20)].map((_, i) => {
                const randomLeft = Math.random() * 100;
                const randomTop = Math.random() * 100;
                const randomDelay = Math.random() * 2;
                const randomText = Math.random().toString(36).substring(7);
                
                return (
                  <motion.div
                    key={i}
                    className="absolute text-green-500 text-xs"
                    style={{
                      left: `${randomLeft}%`,
                      top: `${randomTop}%`,
                    }}
                    animate={{
                      y: [0, 100],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: randomDelay,
                    }}
                  >
                    {randomText}
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Terminal Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="mb-8"
          >
            <Terminal className="w-12 h-12 text-green-500" />
          </motion.div>

          {/* Progress Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-6"
          >
            <motion.div
              key={progress}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="text-7xl md:text-8xl font-bold text-green-500 mb-2"
            >
              {progress}%
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-600 to-green-400"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </motion.div>

          {/* Status Text */}
          <motion.div
            key={statusText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-green-400 text-sm md:text-base flex items-center gap-2"
          >
            <span className="animate-pulse">{'>'}</span>
            {statusText}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              _
            </motion.span>
          </motion.div>

          {/* Random Code Lines */}
          <div className="absolute bottom-10 left-10 right-10 overflow-hidden opacity-20">
            <motion.div
              animate={{ y: [0, -100] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="space-y-1 text-xs text-green-500"
            >
              <div>{'> Initializing core modules...'}</div>
              <div>{'> Loading dependencies: react@19.0.0'}</div>
              <div>{'> Compiling TypeScript files...'}</div>
              <div>{'> Bundling assets with Turbopack...'}</div>
              <div>{'> Optimizing images: WebP conversion'}</div>
              <div>{'> Establishing WebSocket connection...'}</div>
              <div>{'> Memory allocation: 256MB'}</div>
              <div>{'> GPU acceleration: Enabled'}</div>
              <div>{'> Loading 3D models: Complete'}</div>
              <div>{'> System ready.'}</div>
            </motion.div>
          </div>

          {/* Scanline Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.03) 2px, rgba(0, 255, 0, 0.03) 4px)',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '0% 100%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
