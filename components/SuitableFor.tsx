'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  Coffee, ShoppingBag, Utensils, Scissors, Store, Book,
  Dumbbell, Hotel, Pill, Truck, Music, Camera
} from 'lucide-react';

const businesses = [
  {
    icon: Coffee,
    name: "Coffee Shop",
    desc: "Kelola menu, meja, dan antrian pesanan dengan tampilan kasir yang intuitif.",
    features: ["Order by Table", "Custom Menu", "Resep Digital"]
  },
  {
    icon: Utensils,
    name: "Restoran",
    desc: "Sinkronisasi dapur dan kasir secara real-time untuk layanan yang lebih cepat.",
    features: ["Kitchen Display", "Multi-kasir", "Split Bill"]
  },
  {
    icon: ShoppingBag,
    name: "Retail & Butik",
    desc: "Manajemen stok produk, varian ukuran, dan warna dalam satu sistem terpadu.",
    features: ["Barcode Scanner", "Multi Varian", "Diskon & Promo"]
  },
  {
    icon: Scissors,
    name: "Salon & Barbershop",
    desc: "Catat penjadwalan appointment dan lacak komisi stylist secara otomatis.",
    features: ["Booking Online", "Komisi Staf", "Loyalty Poin"]
  },
  {
    icon: Store,
    name: "Toko Kelontong",
    desc: "Pantau ratusan SKU produk dan kelola pembelian supplier dengan mudah.",
    features: ["Multi Supplier", "Alert Stok Habis", "Laporan HPP"]
  },
  {
    icon: Dumbbell,
    name: "Gym & Fitness",
    desc: "Kelola membership, perpanjangan paket, dan akses member secara digital.",
    features: ["Membership", "Check-in Digital", "Jadwal Kelas"]
  },
  {
    icon: Hotel,
    name: "Hotel & Kos",
    desc: "Pantau ketersediaan kamar dan kelola pembayaran sewa tanpa kerumitan.",
    features: ["Booking Kamar", "Tagihan Bulanan", "Laporan Hunian"]
  },
  {
    icon: Pill,
    name: "Apotek",
    desc: "Kelola stok obat, expire date, dan resep dokter dengan presisi tinggi.",
    features: ["Expiry Alert", "Resep Dokter", "BPJS Ready"]
  },
  {
    icon: Camera,
    name: "Studio Foto",
    desc: "Jadwalkan sesi foto, catat down payment, dan kelola paket layanan.",
    features: ["Booking Sesi", "DP & Pelunasan", "Paket Custom"]
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', bounce: 0.35 } }
};

export default function SuitableFor() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-28 bg-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#58D2FF]/5 rounded-full blur-[80px]"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#2F8FFF]/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white text-[#2F8FFF] shadow-sm px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-[#2F8FFF]/20"
          >
            <span className="w-2 h-2 rounded-full bg-[#2F8FFF] animate-pulse"></span>
            Cocok Untuk
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight"
          >
            Satu Sistem untuk{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73]">
              Semua Jenis Usaha
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Zelixa POS dirancang fleksibel dan dapat dikustomisasi untuk puluhan kategori bisnis. Hover kartu untuk melihat detailnya.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
        >
          {businesses.map((biz, i) => {
            const Icon = biz.icon;
            const isActive = activeIndex === i;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                className="relative group cursor-pointer rounded-3xl overflow-hidden"
              >
                {/* Card base — White with blue shadow */}
                <div className={`relative h-full bg-white rounded-3xl p-7 transition-all duration-300 ${isActive ? 'shadow-[0_15px_40px_-15px_rgba(47,143,255,0.4)] border-[#2F8FFF]/30 -translate-y-1' : 'shadow-lg shadow-blue-900/5 border-slate-100'} flex flex-col gap-4 border`}>
                  
                  {/* Icon */}
                  <motion.div
                    animate={isActive ? { scale: 1.15, rotate: -6 } : { scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', bounce: 0.5 }}
                    className="w-14 h-14 bg-blue-50 text-[#2F8FFF] rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#58D2FF] group-hover:to-[#2F8FFF] group-hover:text-white transition-colors duration-300"
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>

                  {/* Name */}
                  <h3 className="font-bold text-xl text-slate-800">{biz.name}</h3>

                  {/* Description — appears on hover */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">{biz.desc}</p>
                        <div className="flex flex-col gap-2">
                          {biz.features.map((f, fi) => (
                            <motion.div
                              key={fi}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: fi * 0.06 }}
                              className="flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-[#2F8FFF]"></div>
                              <span className="text-xs font-semibold text-slate-700">{f}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Static pill when not hovered */}
                  {!isActive && (
                    <div className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 self-start">
                      {biz.features[0]}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
