'use client';

import { motion } from 'framer-motion';
import { Code2, Rocket, Layers, Briefcase, ExternalLink, Github } from 'lucide-react';
import TechStack from './TechStack';
import Image from 'next/image';

export default function BentoGrid() {
  const cards = [
    {
      id: 1,
      title: 'Campus Art Space',
      description: 'Platform e-commerce untuk mahasiswa dengan fitur marketplace, payment gateway, dan inventory management system',
      icon: Rocket,
      className: 'md:col-span-2 md:row-span-2',
      gradient: 'from-purple-500/20 to-pink-500/20',
      type: 'project',
      githubUrl: 'https://github.com/daffarobbani18/unp-art-space',
      demoUrl: 'https://campus-art-space.vercel.app/',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    },
    {
      id: 2,
      title: 'Tech Stack',
      description: 'Teknologi & tools yang saya kuasai',
      icon: Code2,
      className: 'md:col-span-1 md:row-span-2',
      gradient: 'from-green-500/20 to-emerald-500/20',
      type: 'techstack',
    },
    {
      id: 3,
      title: 'Full Stack Development',
      description: 'Membangun aplikasi web end-to-end dengan React, Next.js, Node.js, dan database modern',
      icon: Layers,
      className: 'md:col-span-1 md:row-span-1',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      type: 'default',
    },
    {
      id: 4,
      title: 'DevOps & Cybersecurity',
      description: 'CI/CD pipeline, containerization, infrastructure automation, dan implementasi security best practices',
      icon: Briefcase,
      className: 'md:col-span-2 md:row-span-1',
      gradient: 'from-orange-500/20 to-red-500/20',
      type: 'default',
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          Featured Work
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Eksplorasi project dan keahlian yang telah saya kembangkan
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`${card.className} group relative overflow-hidden rounded-3xl glass cursor-pointer transition-all duration-300 hover:border-white/30 hover:shadow-2xl`}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10 h-full">
                {card.type === 'project' ? (
                  // Project Card dengan GitHub Link
                  <div className="p-8 flex flex-col justify-between h-full">
                    <div>
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl glass-strong flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-purple-400" />
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-purple-400 transition-colors" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                        {card.title}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-5">
                        {card.description}
                      </p>
                      
                      {/* Tags */}
                      {'tags' in card && card.tags && (
                        <div className="flex flex-wrap gap-2 mb-5">
                          {card.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:bg-white/10 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {'githubUrl' in card && card.githubUrl && (
                        <a
                          href={card.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 glass-strong rounded-xl text-sm font-medium hover:bg-white/10 transition-all hover:scale-105"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      )}
                      {'demoUrl' in card && card.demoUrl && (
                        <a
                          href={card.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105 hover:shadow-lg"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                ) : card.type === 'techstack' ? (
                  // Tech Stack Card dengan Marquee
                  <div className="p-8 flex flex-col justify-between h-full">
                    <div>
                      <div className="w-14 h-14 rounded-2xl glass-strong flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-green-400" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-green-400 transition-colors" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                        {card.title}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base mb-5">
                        {card.description}
                      </p>
                    </div>
                    <TechStack />
                  </div>
                ) : (
                  // Default Card
                  <div className="p-8 flex flex-col justify-between h-full">
                    <div>
                      <div className="w-14 h-14 rounded-2xl glass-strong flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-purple-400" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-purple-400 transition-colors" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                        {card.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 blur-xl opacity-40" />
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <a 
          href="https://github.com/daffarobbani18?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3.5 glass rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Lihat Semua Project →
        </a>
      </motion.div>
    </section>
  );
}
