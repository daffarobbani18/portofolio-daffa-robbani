'use client';

import { motion } from 'framer-motion';

export default function TechStack() {
  const technologies = [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Python',
    'AI Engineering',
    'Figma',
    'Framer Motion',
    'PostgreSQL',
  ];

  // Duplikasi array untuk seamless infinite scroll
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Gradient Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      {/* Scrolling Container */}
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: [0, -50 + '%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          },
        }}
      >
        {duplicatedTechs.map((tech, index) => (
          <motion.div
            key={`${tech}-${index}`}
            className="group relative inline-flex items-center"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Tech Name */}
            <span className="text-xl md:text-2xl font-semibold text-gray-500 group-hover:text-white transition-colors duration-300 cursor-default">
              {tech}
            </span>

            {/* Glow Effect on Hover */}
            <motion.span
              className="absolute inset-0 blur-xl bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
            />

            {/* Separator Dot */}
            <span className="ml-8 w-1.5 h-1.5 rounded-full bg-gray-700" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
