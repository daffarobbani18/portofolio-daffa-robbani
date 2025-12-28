'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function ProfileCard() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
  ];

  return (
    <div className="relative h-full p-6 flex flex-col justify-between">
      {/* Bagian Atas - Foto & Badge */}
      <div className="flex items-start gap-4 mb-6">
        {/* Foto Profil */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-20 h-20 rounded-full border-2 border-white/20 overflow-hidden">
            <Image
                src="/assets/profile.png"
                alt="Profile Picture"
                width={100}
                height={100}
                className="rounded-full border-2 border-white/10"
            />
          </div>
          
          {/* Status Badge */}
          <div className="absolute -bottom-1 -right-1 flex items-center gap-1 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-2 py-0.5">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </motion.div>

        {/* Badge Available */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1 mt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-emerald-400">Available for Work</span>
        </motion.div>
      </div>

      {/* Bagian Tengah - Info */}
      <div className="flex-1 mb-6">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold mb-1"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          Daffa Robbani
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-purple-400 font-medium mb-3"
        >
          Full Stack | DevOps | Cybersecurity
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2 text-gray-400 text-sm mb-3"
        >
          <MapPin className="w-4 h-4" />
          <span>Jakarta, Indonesia</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-zinc-400 text-sm leading-relaxed"
        >
          Passionate about building secure and scalable digital solutions. 
          Specialized in Full Stack Web Development, DevOps practices, and Cybersecurity.
        </motion.p>
      </div>

      {/* Bagian Bawah - Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex items-center gap-3 pt-4 border-t border-white/10"
      >
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full glass-strong flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300"
              aria-label={social.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
