'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const heroImages = [
  '/hero/home.jpg',
  '/hero/laporankasir.jpg',
  '/hero/login.jpg',
  '/hero/meja.jpg',
  '/hero/payment.jpg'
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

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
              Sistem Kasir Pintar <br /> <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73]">Bisnis Modern</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Tingkatkan efisiensi bisnis Anda dengan Zelixa POS. Kelola penjualan, stok barang, dan laporan keuangan dalam satu aplikasi yang cerdas dan profesional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.skycosmic.pointofsale"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 group border-0"
              >
                Coba Gratis Sekarang
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="https://wa.me/62881023421863"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center"
              >
                Jadwalkan Demo
              </motion.a>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2F8FFF]" /> Tanpa Kartu Kredit</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2F8FFF]" /> Batal Kapan Saja</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full max-w-2xl mx-auto"
          >
            {/* Tablet Mockup */}
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] aspect-[4/3] w-full max-w-[600px] shadow-2xl">
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

              <div className="rounded-[1.5rem] overflow-hidden w-full h-full bg-white relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={heroImages[currentIndex] || heroImages[0]}
                      alt="Zelixa POS App"
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      priority={currentIndex === 0}
                      className="object-contain bg-slate-50 p-2"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Decorative background elements behind the frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73] rounded-2xl opacity-10 -z-10 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
