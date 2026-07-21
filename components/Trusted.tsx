'use client';
import { motion } from 'framer-motion';

const companies = ['Kopi Kenangan', 'Janji Jiwa', 'Haus!', 'Chatime', 'KFC', 'HokBen', 'Kopi Kenangan', 'Janji Jiwa', 'Haus!', 'Chatime'];

export default function Trusted() {
  return (
    <section className="py-16 border-y border-slate-100 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-xs font-bold text-slate-400 mb-8 uppercase tracking-widest">Dipercaya oleh 10.000+ Bisnis di Indonesia</p>
        
        {/* Infinite marquee slider */}
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="flex gap-20 whitespace-nowrap min-w-full"
          >
            {companies.map((company, index) => (
              <div 
                key={index}
                className="text-2xl md:text-3xl font-extrabold text-slate-300 hover:text-slate-500 hover:scale-105 transition-all cursor-default select-none tracking-tight inline-block"
              >
                {company}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
