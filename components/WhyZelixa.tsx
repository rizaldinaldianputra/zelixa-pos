'use client';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState, useRef } from 'react';
import { Zap, Shield, Smartphone, TrendingUp, Clock, HeadphonesIcon } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Cepat & Responsif',
    desc: 'Transaksi diproses dalam hitungan detik. Tidak ada lagi antrean panjang di kasir Anda, bahkan saat koneksi lambat sekalipun.',
    stat: '< 1 detik',
    statLabel: 'rata-rata waktu transaksi',
    gradient: 'from-[#58D2FF] via-[#2F8FFF] to-[#081E73]',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-500',
  },
  {
    icon: Shield,
    title: 'Aman & Terpercaya',
    desc: 'Data tersimpan dengan enkripsi tingkat bank. Bisnis Anda aman 24/7 di cloud kami dengan backup otomatis setiap hari.',
    stat: '99.9%',
    statLabel: 'uptime server',
    gradient: 'from-[#58D2FF] via-[#2F8FFF] to-[#081E73]',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    icon: Smartphone,
    title: 'Akses Darimana Saja',
    desc: 'Pantau laporan penjualan secara real-time langsung dari handphone Anda kapanpun dan dimanapun Anda berada.',
    stat: '3 Platform',
    statLabel: 'Android, iOS & Web',
    gradient: 'from-[#58D2FF] via-[#2F8FFF] to-[#081E73]',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-500',
  },
  {
    icon: TrendingUp,
    title: 'Laporan Mendalam',
    desc: 'Analitik penjualan berbasis grafik interaktif membantu Anda mengambil keputusan bisnis yang lebih cerdas setiap hari.',
    stat: '20+ Laporan',
    statLabel: 'siap export ke Excel',
    gradient: 'from-[#58D2FF] via-[#2F8FFF] to-[#081E73]',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-500',
  },
  {
    icon: Clock,
    title: 'Setup Instan',
    desc: 'Tidak perlu keahlian teknis. Bisnis Anda bisa langsung beroperasi menggunakan Zelixa POS dalam waktu kurang dari 5 menit.',
    stat: '< 5 menit',
    statLabel: 'waktu setup awal',
    gradient: 'from-[#58D2FF] via-[#2F8FFF] to-[#081E73]',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-500',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dukungan 24/7',
    desc: 'Tim support kami siap membantu melalui live chat, WhatsApp, dan telepon kapanpun Anda menghadapi kendala.',
    stat: '< 2 menit',
    statLabel: 'rata-rata waktu respons',
    gradient: 'from-[#58D2FF] via-[#2F8FFF] to-[#081E73]',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-500',
  },
];

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.4, duration: 0.7 } }
};

export default function WhyZelixa() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-28 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#58D2FF]/15 to-[#2F8FFF]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#081E73]/10 to-transparent rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#58D2FF]/20 to-[#2F8FFF]/20 text-[#081E73] px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-[#2F8FFF]/20">
              <span className="w-2 h-2 rounded-full bg-[#2F8FFF] animate-pulse"></span>
              Keunggulan Kami
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Mengapa Ribuan Bisnis{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73]">
                Memilih Zelixa?
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Kami memahami setiap tantangan bisnis lokal. Zelixa POS dibangun dari riset mendalam bersama ribuan pengusaha Indonesia untuk menghasilkan solusi yang benar-benar dibutuhkan.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((r, i) => {
            const Icon = r.icon;
            const isHovered = hovered === i;

            return (
              <motion.div key={i} variants={cardVariants}>
                <TiltCard className="h-full">
                  <div
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className={`relative h-full bg-white rounded-3xl p-8 border transition-all duration-300 overflow-hidden cursor-default
                      ${isHovered ? 'border-[#2F8FFF]/40 shadow-2xl shadow-[#2F8FFF]/15' : 'border-slate-100 shadow-md shadow-slate-100'}
                    `}
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div
                      animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 bg-gradient-to-br ${r.gradient} pointer-events-none`}
                      style={{ opacity: 0 }}
                    />

                    {/* Content — shifts to white on hover */}
                    <div className="relative z-10 flex flex-col h-full gap-5">
                      {/* Icon */}
                      <motion.div
                        animate={isHovered ? { scale: 1.1, rotate: -5 } : { scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', bounce: 0.5 }}
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-300 ${isHovered ? 'bg-white/20' : r.iconBg}`}
                      >
                        <Icon className={`w-7 h-7 transition-colors duration-300 ${isHovered ? 'text-white' : r.iconColor}`} />
                      </motion.div>

                      {/* Title */}
                      <h3 className={`text-xl font-bold transition-colors duration-300 ${isHovered ? 'text-white' : 'text-slate-900'}`}>
                        {r.title}
                      </h3>

                      {/* Desc */}
                      <p className={`text-sm leading-relaxed flex-1 transition-colors duration-300 ${isHovered ? 'text-blue-50' : 'text-slate-500'}`}>
                        {r.desc}
                      </p>

                      {/* Stat badge */}
                      <div className={`flex items-center gap-3 pt-4 border-t transition-colors duration-300 ${isHovered ? 'border-white/20' : 'border-slate-100'}`}>
                        <span className={`text-2xl font-extrabold transition-colors duration-300 ${isHovered ? 'text-white' : 'text-slate-900'}`}>
                          {r.stat}
                        </span>
                        <span className={`text-xs font-medium transition-colors duration-300 ${isHovered ? 'text-blue-100' : 'text-slate-400'}`}>
                          {r.statLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
