'use client';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Owner Kopi Senja",
    content: "Semenjak pakai Zelixa, antrean panjang di toko bisa teratasi. Laporan keuangannya juga sangat akurat.",
    rating: 5
  },
  {
    name: "Siti Aminah",
    role: "Manajer Resto Lezat",
    content: "Fitur inventarisnya juara! Otomatis memotong stok bahan baku setiap ada pesanan masuk.",
    rating: 5
  },
  {
    name: "Andi Wijaya",
    role: "Pemilik Butik Gaya",
    content: "Tampilannya sangat modern dan mudah dimengerti oleh kasir baru sekalipun. Sangat direkomendasikan.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-28 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#58D2FF]/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#2F8FFF]/10 text-[#081E73] px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-[#2F8FFF]/20"
          >
            <span className="w-2 h-2 rounded-full bg-[#2F8FFF] animate-pulse"></span>
            Testimoni
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Apa Kata Mereka?
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.9, y: 40 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ delay: i * 0.15, type: "spring", bounce: 0.4 }}
               whileHover={{ y: -10, scale: 1.02 }}
               className="bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73] p-8 rounded-[2.5rem] shadow-xl text-white cursor-pointer group relative overflow-hidden border border-transparent hover:border-white/20"
             >
               {/* Decorative Quote icon inside card */}
               <Quote className="absolute right-6 top-6 w-16 h-16 opacity-5 text-white transform group-hover:scale-110 transition-transform duration-300" />
               
               <div className="flex gap-1 mb-6 relative z-10">
                 {[...Array(testi.rating)].map((_, j) => (
                   <motion.div 
                     initial={{ opacity: 0, scale: 0 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ delay: i * 0.15 + (j * 0.05) }}
                     viewport={{ once: true }}
                     key={j}
                   >
                     <Star className="w-5 h-5 fill-amber-300 text-amber-300"/>
                   </motion.div>
                 ))}
               </div>
               
               <p className="text-white/95 text-lg mb-8 italic relative z-10 leading-relaxed font-medium">"{testi.content}"</p>
               
               <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-white/10">
                 <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center font-bold text-white shadow-inner">
                    {testi.name.charAt(0)}
                 </div>
                 <div>
                    <h4 className="font-bold text-white">{testi.name}</h4>
                    <p className="text-sm text-blue-100 opacity-80">{testi.role}</p>
                 </div>
               </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
