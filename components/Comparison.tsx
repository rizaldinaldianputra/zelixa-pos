'use client';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const features = [
  "Manajemen Inventaris Multi-Cabang",
  "Laporan Analitik Real-time",
  "Aplikasi Kasir Offline Mode",
  "Integrasi Pembayaran Digital (QRIS)",
  "Dukungan Pelanggan 24/7",
  "Harga Transparan Tanpa Biaya Tersembunyi"
];

export default function Comparison() {
  return (
    <section id="perbandingan" className="py-28 bg-white relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#58D2FF]/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#2F8FFF]/10 text-[#081E73] px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-[#2F8FFF]/20"
          >
            <span className="w-2 h-2 rounded-full bg-[#2F8FFF] animate-pulse"></span>
            Perbandingan
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Mengapa Zelixa Lebih Unggul?
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", bounce: 0.35, duration: 0.8 }}
          className="bg-white rounded-[2rem] shadow-2xl shadow-slate-100 border border-slate-100 overflow-hidden"
        >
           <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-100">
              <div className="p-6 font-bold text-slate-700">Fitur Utama</div>
              <div className="p-6 font-bold text-center text-slate-500 border-l border-slate-100">POS Lain</div>
              <div className="p-6 font-extrabold text-center text-white border-l border-slate-100 bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73]">Zelixa POS</div>
           </div>
           
           {features.map((feat, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, x: -10 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.08, type: "spring" }}
               whileHover={{ backgroundColor: "rgba(248, 250, 252, 0.8)" }}
               className="grid grid-cols-3 border-b border-slate-100 last:border-0 transition-all cursor-default"
             >
                <div className="p-6 text-slate-800 font-semibold flex items-center">{feat}</div>
                <div className="p-6 border-l border-slate-100 flex items-center justify-center text-slate-300">
                  {i % 2 === 0 ? <Check className="w-5 h-5" /> : <X className="w-5 h-5 text-rose-400" />}
                </div>
                <div className="p-6 border-l border-slate-100 bg-gradient-to-br from-[#58D2FF]/5 via-[#2F8FFF]/5 to-[#081E73]/5 flex items-center justify-center text-[#2F8FFF]">
                  <motion.div whileHover={{ scale: 1.3, rotate: 180 }} transition={{ duration: 0.3 }}>
                    <Check className="w-6 h-6 stroke-[3px]" />
                  </motion.div>
                </div>
             </motion.div>
           ))}
        </motion.div>
      </div>
    </section>
  );
}
