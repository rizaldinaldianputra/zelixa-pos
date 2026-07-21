'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function DashboardPreview() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="py-32 bg-white overflow-hidden relative">
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#58D2FF]/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#2F8FFF]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#2F8FFF]/10 text-[#081E73] px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-[#2F8FFF]/20"
          >
            <span className="w-2 h-2 rounded-full bg-[#2F8FFF] animate-pulse"></span>
            Real-time Analytics
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Pantau Bisnis Anda Real-Time
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Dashboard intuitif yang menyajikan data krusial dalam sekali pandang. Keputusan bisnis yang lebih cerdas dimulai dari sini.
          </motion.p>
        </div>
        
        <motion.div 
          style={{ y }}
          className="relative rounded-[2rem] bg-slate-50 p-3 md:p-6 shadow-2xl shadow-slate-200 border border-slate-100 mx-auto max-w-5xl"
        >
          <div className="relative aspect-[16/9] bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-inner">
            <div className="absolute inset-0 p-4 md:p-8 flex flex-col gap-4 md:gap-8 bg-white">
              {/* Header */}
              <div className="flex justify-between items-center h-12 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-4">
                  <motion.div 
                    initial={{ rotate: -180, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-10 h-10 bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73] rounded-lg shadow-md"
                  ></motion.div>
                  <div className="w-32 h-4 bg-slate-100 rounded"></div>
                </div>
                <div className="w-10 h-10 bg-slate-50 rounded-full border border-slate-100"></div>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[...Array(4)].map((_,i) => (
                   <motion.div 
                     initial={{ scale: 0.8, opacity: 0, y: 15 }}
                     whileInView={{ scale: 1, opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 + 0.2, type: "spring", bounce: 0.4 }}
                     viewport={{ once: true }}
                     whileHover={{ y: -5, borderColor: '#2F8FFF' }}
                     key={i} 
                     className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm transition-all cursor-pointer flex flex-col justify-between"
                   >
                     <div className="w-1/2 h-3 bg-slate-100 rounded mb-4"></div>
                     <div className="w-3/4 h-6 bg-gradient-to-r from-[#58D2FF] via-[#2F8FFF] to-[#081E73] rounded"></div>
                   </motion.div>
                ))}
              </div>
              
              {/* Chart & List */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 min-h-0">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="md:col-span-2 bg-slate-50 rounded-2xl p-6 relative overflow-hidden border border-slate-100 flex flex-col h-full"
                >
                  <div className="w-48 h-4 bg-slate-200 rounded mb-8"></div>
                  {/* Fake animated bars */}
                  <div className="flex-1 flex items-end justify-between gap-2 md:gap-4 mt-auto">
                    {[40, 70, 45, 90, 65, 100, 80, 50, 85].map((h, i) => (
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.08 + 0.3, type: 'spring', bounce: 0.4 }}
                        whileHover={{ opacity: 0.8, scaleY: 1.05 }}
                        key={i} 
                        className="w-full bg-gradient-to-t from-[#58D2FF] via-[#2F8FFF] to-[#081E73] rounded-t-md origin-bottom cursor-pointer shadow-md"
                      ></motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-white rounded-2xl p-6 space-y-4 border border-slate-100 shadow-sm overflow-hidden hidden md:flex flex-col"
                >
                   <div className="w-32 h-4 bg-slate-100 rounded mb-2"></div>
                   <div className="flex-1 space-y-4 overflow-hidden">
                     {[...Array(4)].map((_,i) => (
                        <motion.div 
                          initial={{ x: 20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + 0.5, type: "spring" }}
                          whileHover={{ x: -3 }}
                          key={i} 
                          className="flex items-center gap-4 cursor-pointer"
                        >
                           <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-100 to-indigo-50 border border-slate-100 flex-shrink-0"></div>
                           <div className="flex-1 space-y-2">
                             <div className="h-3 bg-slate-100 rounded w-full"></div>
                             <div className="h-2 bg-slate-50/85 rounded w-1/2"></div>
                           </div>
                        </motion.div>
                     ))}
                   </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
