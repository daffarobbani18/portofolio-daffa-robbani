'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  Search,
  Home,
  Briefcase,
  User,
  Github,
  Linkedin,
  Mail,
  Copy,
  ArrowRight,
  X,
} from 'lucide-react';

interface Command {
  id: string;
  label: string;
  icon: React.ElementType;
  action: () => void;
  category: 'navigation' | 'social' | 'action';
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands: Command[] = [
    {
      id: 'home',
      label: 'Go to Home',
      icon: Home,
      category: 'navigation',
      action: () => {
        window.location.href = '#home';
        setIsOpen(false);
      },
    },
    {
      id: 'projects',
      label: 'Go to Projects',
      icon: Briefcase,
      category: 'navigation',
      action: () => {
        window.location.href = '#work';
        setIsOpen(false);
      },
    },
    {
      id: 'about',
      label: 'Go to About',
      icon: User,
      category: 'navigation',
      action: () => {
        window.location.href = '#about';
        setIsOpen(false);
      },
    },
    {
      id: 'github',
      label: 'Open GitHub',
      icon: Github,
      category: 'social',
      action: () => {
        window.open('https://github.com', '_blank');
        setIsOpen(false);
      },
    },
    {
      id: 'linkedin',
      label: 'Open LinkedIn',
      icon: Linkedin,
      category: 'social',
      action: () => {
        window.open('https://linkedin.com', '_blank');
        setIsOpen(false);
      },
    },
    {
      id: 'email',
      label: 'Copy Email',
      icon: Copy,
      category: 'action',
      action: async () => {
        await navigator.clipboard.writeText('d.robbani18@gmail.com');
        setIsOpen(false);
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+K or Cmd+K to open
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }

      // Escape to close
      if (e.key === 'Escape') {
        setIsOpen(false);
        setSearchQuery('');
        setSelectedIndex(0);
      }

      // Arrow navigation
      if (isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredCommands.length - 1 ? prev + 1 : 0
          );
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev > 0 ? prev - 1 : filteredCommands.length - 1
          );
        }
        if (e.key === 'Enter') {
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex]);

  // Reset selected index when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'navigation':
        return 'Navigation';
      case 'social':
        return 'Social';
      case 'action':
        return 'Actions';
      default:
        return '';
    }
  };

  // Group commands by category
  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) {
      acc[cmd.category] = [];
    }
    acc[cmd.category].push(cmd);
    return acc;
  }, {} as Record<string, Command[]>);

  return (
    <>
      {/* Trigger Button - Export untuk digunakan di Navbar */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-gray-400 hover:text-white transition-colors"
      >
        <Search className="w-4 h-4" />
        <span>Search</span>
        <kbd className="px-2 py-0.5 text-xs bg-white/10 rounded">⌘K</kbd>
      </button>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
            />

            {/* Modal */}
            <div className="fixed inset-0 flex items-start justify-center pt-[10vh] z-[10000] pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-2xl mx-4 pointer-events-auto"
              >
                <div className="glass-strong rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                  {/* Search Input */}
                  <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Type a command or search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-500"
                      autoFocus
                    />
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-1 hover:bg-white/10 rounded transition-colors"
                    >
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>

                  {/* Commands List */}
                  <div className="max-h-[400px] overflow-y-auto py-2">
                    {filteredCommands.length === 0 ? (
                      <div className="px-4 py-8 text-center text-gray-500">
                        No commands found
                      </div>
                    ) : (
                      Object.entries(groupedCommands).map(([category, cmds]) => (
                        <div key={category} className="mb-2">
                          {/* Category Label */}
                          <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            {getCategoryLabel(category)}
                          </div>

                          {/* Commands */}
                          {cmds.map((cmd, index) => {
                            const Icon = cmd.icon;
                            const globalIndex = filteredCommands.indexOf(cmd);
                            const isSelected = globalIndex === selectedIndex;

                            return (
                              <motion.button
                                key={cmd.id}
                                onClick={cmd.action}
                                onMouseEnter={() => setSelectedIndex(globalIndex)}
                                className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                                  isSelected
                                    ? 'bg-white/10 text-white'
                                    : 'text-gray-400 hover:bg-white/5'
                                }`}
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.1 }}
                              >
                                <Icon className="w-5 h-5" />
                                <span className="flex-1 text-left">{cmd.label}</span>
                                {isSelected && (
                                  <ArrowRight className="w-4 h-4 text-purple-400" />
                                )}
                              </motion.button>
                            );
                          })}
                        </div>
                      ))
                    )}
                  </div>

                  {/* Footer Hint */}
                  <div className="flex items-center justify-between px-4 py-3 border-t border-white/10 text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <kbd className="px-2 py-0.5 bg-white/10 rounded">↑↓</kbd>
                        Navigate
                      </span>
                      <span className="flex items-center gap-1">
                        <kbd className="px-2 py-0.5 bg-white/10 rounded">↵</kbd>
                        Select
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <kbd className="px-2 py-0.5 bg-white/10 rounded">ESC</kbd>
                      Close
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Export trigger function untuk digunakan di komponen lain
export function useCommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handler = (e: CustomEvent) => {
      setIsOpen(e.detail.isOpen);
    };
    
    window.addEventListener('toggleCommandPalette' as any, handler);
    return () => window.removeEventListener('toggleCommandPalette' as any, handler);
  }, []);

  const toggle = () => {
    window.dispatchEvent(new CustomEvent('toggleCommandPalette', { detail: { isOpen: !isOpen } }));
  };

  return { isOpen, toggle };
}
