'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-600 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 pb-12 border-b border-slate-100">

          {/* Company Info */}
          <div className="lg:col-span-4 pr-6">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Zelixa POS Logo" className="h-10 w-auto object-contain" />
              <span className="font-bold text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#58D2FF] to-[#081E73]">Zelixa POS</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6 leading-relaxed">
              Solusi point of sale terbaik untuk memajukan UMKM dan bisnis modern di Indonesia dengan teknologi terdepan.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-[#2F8FFF]" />
                <span>Jl. Teknologi Raya No. 123, Jakarta Selatan</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-[#2F8FFF]" />
                <span>+62 812 3456 7890</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-[#2F8FFF]" />
                <span>halo@zelixapos.com</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center hover:bg-[#2F8FFF] hover:text-white transition-all shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center hover:bg-[#2F8FFF] hover:text-white transition-all shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center hover:bg-[#2F8FFF] hover:text-white transition-all shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 5 12 5 12s1.5.5 3 0c-2.4-1.5-4-4.5-4-4.5s1.5.5 3 0c-2.4-1.5-3-5-3-5s3.5 4 8 4c0-3.5 3.5-5.5 6-3.5 1.5 0 3-1 3-1s-1 2.5-2 3.5z"></path></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-slate-900 text-base mb-6">Produk</h4>
            <ul className="space-y-4 font-medium text-sm">
              <li><a href="#fitur" className="hover:text-[#2F8FFF] transition-colors">Fitur</a></li>
              <li><a href="#pricing" className="hover:text-[#2F8FFF] transition-colors">Harga</a></li>
              <li><a href="#" className="hover:text-[#2F8FFF] transition-colors">Integrasi Hardware</a></li>
              <li><a href="#perbandingan" className="hover:text-[#2F8FFF] transition-colors">Perbandingan</a></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-bold text-slate-900 text-base mb-6">Perusahaan</h4>
            <ul className="space-y-4 font-medium text-sm">
              <li><Link href="/tentang" className="hover:text-[#2F8FFF] transition-colors">Tentang Kami</Link></li>
              <li><Link href="/karir" className="hover:text-[#2F8FFF] transition-colors">Karir</Link></li>
              <li><Link href="/kontak" className="hover:text-[#2F8FFF] transition-colors">Kontak</Link></li>
              <li><Link href="/blog" className="hover:text-[#2F8FFF] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Map */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-slate-900 text-base mb-6">Lokasi Kami</h4>
            <div className="rounded-xl overflow-hidden h-48 border border-slate-200 bg-slate-50 relative group shadow-inner">
              {/* Dummy Map Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24056263591!2d106.7588365116744!3d-6.229740118559092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x100c5e82dd4b820!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1) opacity(0.9)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="group-hover:filter-none transition-all duration-500"
              ></iframe>
            </div>
          </div>

        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 font-medium text-sm">
          <p>&copy; {new Date().getFullYear()} Zelixa POS. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#2F8FFF] transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-[#2F8FFF] transition-colors">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
