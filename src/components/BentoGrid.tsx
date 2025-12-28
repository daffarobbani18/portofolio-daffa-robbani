'use client';

import { motion } from 'framer-motion';
import { Code2, Rocket, Layers, Briefcase, ExternalLink, Github } from 'lucide-react';
import TechStack from './TechStack';
import Image from 'next/image';

export default function BentoGrid() {
  const cards = [
    {
      id: 1,
      title: 'Campus Art Space Mobile App',
      description: 'Full-stack e-commerce dengan payment gateway, real-time inventory, dan admin dashboard',
      icon: Rocket,
      className: 'md:col-span-2 md:row-span-2',
      gradient: 'from-purple-500/20 to-pink-500/20',
      type: 'project',
      githubUrl: 'https://github.com/daffarobbani18/unp-art-space',
      demoUrl: 'https://campus-art-space.vercel.app/',
      image: 'https://github.com/daffarobbani18/unp-art-space/blob/main/assets/images/project-screenshot.png?raw=true', // Optional: tambahkan screenshot project
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization dashboard dengan chart interaktif dan export data',
      icon: Layers,
      className: 'md:col-span-1 md:row-span-1',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      type: 'project',
      githubUrl: 'https://github.com/yourusername/dashboard-project',
      demoUrl: 'https://demo-dashboard.vercel.app',
      image: '/assets/project2.jpg', // Optional
      tags: ['React', 'D3.js', 'Firebase'],
    },
    {
      id: 3,
      title: 'Tech Stack',
      description: 'Teknologi yang saya gunakan',
      icon: Code2,
      className: 'md:col-span-1 md:row-span-1',
      gradient: 'from-green-500/20 to-emerald-500/20',
      type: 'techstack',
    },
    {
      id: 4,
      title: 'Experience',
      description: '5+ tahun pengalaman dalam pengembangan web dan mobile',
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
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
              className={`${card.className} group relative overflow-hidden rounded-2xl glass cursor-pointer transition-all duration-300 hover:border-white/30`}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10 h-full">
                {card.type === 'project' ? (
                  // Project Card dengan GitHub Link
                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      {/* Project Image */}
                      {'image' in card && card.image && (
                        <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4 -mx-6 -mt-6">
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]" />
                        </div>
                      )}
                      
                      {/* Icon (jika tidak ada image) */}
                      {!('image' in card && card.image) && (
                        <div className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-purple-400" />
                        </div>
                      )}
                      
                      <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                        {card.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {card.description}
                      </p>
                      
                      {/* Tags */}
                      {'tags' in card && card.tags && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {card.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300"
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
                          className="flex items-center gap-2 px-4 py-2 glass-strong rounded-lg text-sm hover:bg-white/10 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                      {'demoUrl' in card && card.demoUrl && (
                        <a
                          href={card.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg text-sm hover:bg-purple-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                ) : card.type === 'techstack' ? (
                  // Tech Stack Card dengan Marquee
                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                        {card.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {card.description}
                      </p>
                    </div>
                    <TechStack />
                  </div>
                ) : (
                  // Default Card
                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                        {card.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 blur-xl opacity-50" />
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
        className="mt-16 text-center"
      >
        <button className="px-8 py-3 glass rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105">
          Lihat Semua Project
        </button>
      </motion.div>
    </section>
  );
}
