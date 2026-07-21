'use client';
import { motion } from 'framer-motion';
import { Receipt, PieChart, Users, Package, Wallet, Printer } from 'lucide-react';

const features = [
  { icon: <Receipt className="w-8 h-8"/>, title: "Manajemen Pesanan", desc: "Kelola pesanan dine-in, take away, dan online dengan mudah." },
  { icon: <Package className="w-8 h-8"/>, title: "Inventaris Real-time", desc: "Lacak stok bahan baku yang terpotong otomatis saat transaksi." },
  { icon: <PieChart className="w-8 h-8"/>, title: "Laporan Analitik", desc: "Dapatkan wawasan mendalam tentang penjualan harian Anda." },
  { icon: <Users className="w-8 h-8"/>, title: "Manajemen Staf", desc: "Atur jadwal, komisi, dan hak akses staf dengan aman." },
  { icon: <Wallet className="w-8 h-8"/>, title: "Multi Pembayaran", desc: "Terima QRIS, Kartu Kredit, Debit, e-Wallet, dan Tunai." },
  { icon: <Printer className="w-8 h-8"/>, title: "Integrasi Hardware", desc: "Hubungkan dengan printer kasir dan barcode scanner instan." },
];

export default function Features() {
  return (
    <section id="fitur" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Fitur Lengkap Sesuai Standar Industri
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Fokus kembangkan bisnis Anda, biarkan Zelixa mengurus operasionalnya.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1, duration: 0.4 }}
               whileHover={{ y: -10, scale: 1.02 }}
               className="bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73] p-8 rounded-3xl shadow-xl text-white group cursor-pointer border border-transparent hover:border-white/20"
             >
               <div className="mb-6 text-white/90 group-hover:text-white transition-colors duration-300 drop-shadow-md">
                 {feat.icon}
               </div>
               <h3 className="text-2xl font-bold mb-3 drop-shadow-sm">{feat.title}</h3>
               <p className="text-blue-50 leading-relaxed opacity-90">{feat.desc}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
