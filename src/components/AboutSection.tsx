'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/daffarobbani18', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/daffa-robbani-584780371/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:d.robbani18@gmail.com', label: 'Email' },
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Kolom Kiri - Foto Besar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative h-[500px] lg:h-[600px] group"
        >
          {/* Image Container with Easter Egg Link */}
          <Link 
            href="/access-denied"
            className="relative block w-full h-full rounded-2xl overflow-hidden cursor-pointer"
          >
            <Image
              src="/assets/profile.png"
              alt="Profile Photo"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            
            {/* Gradient Overlay - Tenggelam ke Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
            
            {/* Border Glow Effect */}
            <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors duration-500" />
          </Link>

          {/* Decorative Corner Accent */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </motion.div>

        {/* Kolom Kanan - Konten Bio */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="glass p-8 lg:p-10 rounded-2xl"
        >
          {/* Badge Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-medium text-emerald-400">Available for Work</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Daffa Robbani
            </span>
          </motion.h2>

          {/* Subheading/Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-xl text-purple-400 font-semibold mb-6"
          >
            Full Stack Web Developer | DevOps | Cybersecurity
          </motion.p>

          {/* Bio Paragraf */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="space-y-4 text-gray-400 leading-relaxed mb-8"
          >
            <p>
              Saya passionate dalam membangun solusi digital yang aman, scalable, dan efisien. 
              Dengan keahlian di Full Stack Web Development, saya mengembangkan aplikasi end-to-end 
              dari frontend hingga backend dengan best practices dan clean code.
            </p>
            <p>
              Specialized dalam DevOps practices untuk automation dan CI/CD pipeline, 
              serta Cybersecurity untuk memastikan aplikasi yang dibangun terlindungi dari berbagai ancaman. 
              Saya percaya bahwa keamanan dan infrastructure yang solid adalah fondasi dari setiap aplikasi yang sukses.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4 pt-6 border-t border-white/10"
          >
            <span className="text-sm text-gray-500 mr-2">Connect with me:</span>
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative w-12 h-12 rounded-full glass-strong flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <Icon className="w-5 h-5 relative z-10" />
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                  
                  {/* Arrow on Hover */}
                  <ArrowUpRight className="absolute -top-1 -right-1 w-3 h-3 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
