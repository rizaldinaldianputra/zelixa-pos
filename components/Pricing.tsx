'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "Gratis",
    desc: "Sempurna untuk merintis usaha baru.",
    features: ["1 Kasir / Outlet", "Maksimal 100 Menu", "Laporan Penjualan Dasar", "Dukungan via Email"],
    popular: false
  },
  {
    name: "Professional",
    price: "Rp 199.000",
    period: "/bulan",
    desc: "Skala operasional bisnis tanpa batas.",
    features: ["Outlet & Kasir Tak Terbatas", "Menu Unlimited", "Laporan Analitik Lanjut", "Manajemen Inventaris", "Prioritas Dukungan 24/7"],
    popular: true
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Harga Transparan, Skala Bisnis Anda
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600"
          >
            Mulai dari gratis, upgrade saat Anda siap berkembang.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className={`p-10 rounded-[2.5rem] relative transition-all ${plan.popular ? 'bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73] shadow-2xl scale-[1.02] z-10 text-white' : 'bg-white border border-slate-200 shadow-sm text-slate-900'}`}
             >
               {plan.popular && (
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-[#081E73] px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-xl">
                   Terpopuler
                 </div>
               )}
               <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
               <p className={`mb-8 ${plan.popular ? 'text-blue-100' : 'text-slate-500'}`}>{plan.desc}</p>
               <div className="mb-8">
                 <span className={`text-5xl font-extrabold ${plan.popular ? 'text-white drop-shadow-md' : 'text-slate-900'}`}>{plan.price}</span>
                 {plan.period && <span className={`font-medium ${plan.popular ? 'text-blue-100' : 'text-slate-500'}`}> {plan.period}</span>}
               </div>
               
               <ul className="space-y-4 mb-10">
                 {plan.features.map((feat, idx) => (
                   <li key={idx} className="flex items-center gap-3">
                     <Check className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-[#2F8FFF]'}`} />
                     <span className={plan.popular ? 'text-white' : 'text-slate-700'}>{feat}</span>
                   </li>
                 ))}
               </ul>

               <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-white text-[#081E73] hover:bg-slate-50 shadow-lg' : 'bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73] text-white hover:opacity-90 shadow-md'}`}>
                 Pilih Paket
               </button>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
