'use client';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 overflow-hidden bg-white min-h-screen flex items-center relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73] rounded-full blur-[120px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Sistem Kasir Pintar <br/> <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73]">Bisnis Modern</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Tingkatkan efisiensi bisnis Anda dengan Zelixa POS. Kelola penjualan, stok barang, dan laporan keuangan dalam satu aplikasi yang cerdas dan profesional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 group border-0"
              >
                Coba Gratis Sekarang
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center"
              >
                Lihat Demo
              </motion.button>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2F8FFF]"/> Tanpa Kartu Kredit</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2F8FFF]"/> Batal Kapan Saja</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute inset-4 md:inset-10 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col z-10"
              >
                <div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 p-4 md:p-6 grid grid-cols-3 gap-4 bg-white">
                  <div className="col-span-2 space-y-4">
                    <div className="h-6 bg-slate-100 rounded-md w-1/2"></div>
                    <div className="grid grid-cols-2 gap-4">
                      {[...Array(4)].map((_, i) => (
                         <div key={i} className="bg-white border border-slate-100 p-3 rounded-xl shadow-sm space-y-2">
                           <div className="w-full h-20 bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73] rounded-lg opacity-80"></div>
                           <div className="h-2 bg-slate-100 rounded w-2/3"></div>
                           <div className="h-2 bg-slate-100 rounded w-1/3"></div>
                         </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 flex flex-col border border-slate-100">
                     <div className="h-3 bg-slate-200 rounded w-1/2 mb-4"></div>
                     <div className="space-y-2 flex-1">
                       {[...Array(3)].map((_, i) => (
                         <div key={i} className="h-10 bg-white border border-slate-100 rounded-lg flex items-center px-2 shadow-sm">
                            <div className="h-1.5 bg-slate-200 rounded w-full"></div>
                         </div>
                       ))}
                     </div>
                     <div className="mt-auto pt-4 border-t border-slate-200">
                        <div className="h-10 bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73] rounded-lg w-full flex items-center justify-center text-white text-xs font-bold shadow-md">Bayar</div>
                     </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                 animate={{ y: [0, 10, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                 className="absolute -right-4 -bottom-4 md:right-0 md:bottom-0 w-24 h-48 md:w-40 md:h-80 bg-white rounded-[2rem] shadow-2xl border-4 border-slate-50 overflow-hidden z-20"
              >
                <div className="h-4 w-1/3 bg-slate-100 mx-auto mt-2 rounded-b-xl absolute top-0 left-1/2 -translate-x-1/2"></div>
                <div className="p-4 space-y-4 mt-8 h-full flex flex-col">
                  <div className="w-10 h-10 bg-green-50 rounded-full text-[#2F8FFF] flex items-center justify-center mb-2"><CheckCircle2 className="w-5 h-5"/></div>
                  <div className="h-20 bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73] rounded-xl opacity-90"></div>
                  <div className="space-y-2">
                    <div className="h-2 bg-slate-100 rounded w-3/4"></div>
                    <div className="h-2 bg-slate-100 rounded w-1/2"></div>
                  </div>
                  <div className="mt-auto h-10 bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73] rounded-lg"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
