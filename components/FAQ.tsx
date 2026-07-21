'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "Apakah Zelixa bisa digunakan saat offline?", a: "Ya, Zelixa POS memiliki mode offline. Data akan otomatis tersinkronisasi saat perangkat terhubung kembali ke internet." },
  { q: "Apakah saya butuh alat khusus untuk menggunakan Zelixa?", a: "Tidak. Zelixa bisa dijalankan melalui tablet, smartphone, maupun komputer/laptop yang Anda miliki saat ini." },
  { q: "Bisakah saya mengelola beberapa cabang sekaligus?", a: "Tentu. Paket Pro kami mendukung manajemen multi-outlet dari satu dashboard yang sama." },
  { q: "Bagaimana cara berlangganan Paket Pro?", a: "Anda bisa memulai dengan paket Gratis terlebih dahulu. Kapanpun Anda butuh fitur lebih, upgrade ke Paket Pro bisa dilakukan langsung dari aplikasi." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#2F8FFF]/10 text-[#081E73] px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-[#2F8FFF]/20"
          >
            <span className="w-2 h-2 rounded-full bg-[#2F8FFF] animate-pulse"></span>
            FAQ
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Pertanyaan Umum
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.08 }}
               className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
             >
               <button 
                 onClick={() => setOpenIndex(openIndex === i ? null : i)}
                 className="w-full px-6 py-5 flex justify-between items-center text-left"
               >
                 <span className="font-semibold text-slate-800 text-lg transition-colors duration-300 hover:text-[#2F8FFF]">{faq.q}</span>
                 <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }} className="text-[#2F8FFF] p-1 bg-slate-50 rounded-full border border-slate-100">
                    <ChevronDown className="w-5 h-5"/>
                 </motion.div>
               </button>
               <AnimatePresence>
                 {openIndex === i && (
                   <motion.div
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: "auto", opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     className="px-6 pb-6 text-slate-600 leading-relaxed text-base"
                   >
                     <div className="pt-2 border-t border-slate-50">
                       {faq.a}
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
