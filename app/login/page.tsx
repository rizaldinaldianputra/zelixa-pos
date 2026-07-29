'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Mail, Lock } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73] relative items-center justify-center p-12 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/hero/home.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-md"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl shadow-2xl flex flex-col items-center text-center">
            <div className="bg-white p-6 rounded-2xl mb-8 shadow-xl">
              <Image
                src="/logo.png"
                alt="Zelixa Logo"
                width={180}
                height={60}
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Sistem Kasir Pintar Bisnis Modern</h2>
            <p className="text-blue-100 text-lg">Kelola penjualan, stok barang, dan laporan keuangan dalam satu aplikasi yang cerdas dan profesional.</p>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 relative">
        <Link href="/" className="absolute top-8 left-8 sm:left-16 lg:left-24 text-slate-500 hover:text-slate-800 flex items-center gap-2 font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </Link>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-md mx-auto"
        >
          <div className="lg:hidden flex justify-center mb-10">
            <Image
              src="/logo.png"
              alt="Zelixa Logo"
              width={160}
              height={50}
              className="object-contain"
            />
          </div>

          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Selamat Datang</h1>
            <p className="text-slate-500 text-lg">Silakan masuk ke akun Zelixa POS Anda</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 block">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2F8FFF]/50 focus:border-[#2F8FFF] outline-none transition-all text-slate-700 font-medium placeholder-slate-400"
                  placeholder="nama@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-slate-700 block">Password</label>
                <a href="#" className="text-sm font-semibold text-[#2F8FFF] hover:text-[#081E73] transition-colors">Lupa Password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="password"
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2F8FFF]/50 focus:border-[#2F8FFF] outline-none transition-all text-slate-700 font-medium placeholder-slate-400"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73] text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#2F8FFF]/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group border-0"
            >
              Masuk Sekarang
            </button>
          </form>


        </motion.div>
      </div>
    </div>
  );
}
