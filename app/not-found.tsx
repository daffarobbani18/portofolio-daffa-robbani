'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AlertTriangle, Home, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function NotFound() {
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    setTimestamp(new Date().toISOString());
  }, []);
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden font-mono">
      {/* TV Static Background */}
      <div className="absolute inset-0 tv-static opacity-20 pointer-events-none" />
      
      {/* Animated Background Lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px bg-green-500"
            style={{ top: `${i * 5}%` }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleX: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Warning Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <AlertTriangle className="w-16 h-16 text-red-500" />
            <motion.div
              className="absolute inset-0"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <AlertTriangle className="w-16 h-16 text-red-500" />
            </motion.div>
          </div>
        </motion.div>

        {/* 404 with Glitch Effect */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-9xl md:text-[12rem] lg:text-[15rem] font-bold text-white glitch mb-6 select-none"
        >
          404
        </motion.h1>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8 space-y-2"
        >
          <div className="flex items-center justify-center gap-2 text-green-500 mb-4">
            <Terminal className="w-5 h-5" />
            <span className="text-sm font-mono">SYSTEM ERROR</span>
          </div>
          
          <p className="text-xl md:text-2xl text-red-500 font-mono mb-2">
            {'>'} SYSTEM FAILURE
          </p>
          <p className="text-lg md:text-xl text-gray-400 font-mono">
            Page not found in this universe.
          </p>
        </motion.div>

        {/* Terminal-like Error Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-md mx-auto mb-10 text-left bg-black/50 border border-green-500/30 rounded-lg p-4"
        >
          <pre className="text-xs md:text-sm text-green-500 font-mono">
            {`ERROR_CODE: 404
STATUS: Not Found
MESSAGE: Resource unavailable
TIMESTAMP: ${timestamp || 'Loading...'}
ACTION: Redirect required`}
          </pre>
        </motion.div>

        {/* Blinking Return Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-green-500 text-black font-bold text-lg font-mono rounded-lg overflow-hidden animate-blink hover:animate-none transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Home className="w-5 h-5" />
                RETURN TO BASE
              </span>
              <motion.div
                className="absolute inset-0 bg-green-400"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>
        </motion.div>

        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-gray-600 text-sm font-mono"
        >
          Press ESC to abort • Press ENTER to continue
        </motion.p>
      </div>

      {/* Scanline Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          backgroundPosition: ['0% 0%', '0% 100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.03) 2px, rgba(0, 255, 0, 0.03) 4px)',
          backgroundSize: '100% 4px',
        }}
      />
    </div>
  );
}
