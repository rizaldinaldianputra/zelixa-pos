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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ y }}
            className="relative rounded-2xl bg-slate-50 p-2 md:p-4 shadow-2xl shadow-slate-200 border border-slate-100"
          >
            <div className="relative aspect-[16/9] bg-white rounded-xl overflow-hidden border border-slate-200">
              <img
                src="/dashboard.jpg"
                alt="Dashboard Zelixa POS"
                className="w-full h-full object-contain p-2 bg-slate-50"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-gradient-to-tr from-[#58D2FF] via-[#2F8FFF] to-[#081E73] rounded-2xl opacity-10 -z-10 blur-xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Fitur Unggulan Zelixa POS</h3>
            <ul className="space-y-4">
              {[
                "Manajemen Produk & Varian (dengan dukungan variant modifier harga).",
                "Kasir (POS) (lengkap dengan manajemen meja dan multi metode pembayaran).",
                "Manajemen Gudang & Stok (transfer stok antar gudang, riwayat mutasi/log).",
                "Pembelian (Purchase Order) (ke Supplier untuk kulakan barang).",
                "Customer & Poin Loyalty (CRM).",
                "Multi-Tenant / Role (Merchant utama dan pembatasan akses user ke tiap gudang)."
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#2F8FFF]"></div>
                  </div>
                  <span className="text-slate-700 font-medium leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
