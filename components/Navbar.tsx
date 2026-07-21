'use client';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Zelixa POS Logo" className="h-10 md:h-12 w-auto object-contain" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#fitur" className="text-slate-600 hover:text-[#2F8FFF] font-medium transition-colors">Fitur</a>
            <a href="#perbandingan" className="text-slate-600 hover:text-[#2F8FFF] font-medium transition-colors">Perbandingan</a>
            <a href="#pricing" className="text-slate-600 hover:text-[#2F8FFF] font-medium transition-colors">Harga</a>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73] text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-md hover:shadow-lg border-0"
            >
              Coba Gratis
            </motion.button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-100 px-6 py-6 space-y-4 absolute w-full left-0 top-full shadow-lg"
          >
            <a href="#fitur" onClick={() => setIsOpen(false)} className="block text-slate-600 font-medium py-2">Fitur</a>
            <a href="#perbandingan" onClick={() => setIsOpen(false)} className="block text-slate-600 font-medium py-2">Perbandingan</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="block text-slate-600 font-medium py-2">Harga</a>
            <button className="w-full bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73] text-white px-6 py-3 rounded-xl font-bold">
              Coba Gratis
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
