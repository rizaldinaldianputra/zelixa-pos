import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Kontak() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Hubungi <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73]">Kami</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ada pertanyaan tentang fitur, harga, atau butuh bantuan? Tim kami siap membantu Anda kapan saja.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg shadow-blue-900/5">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2F8FFF] focus:border-transparent transition-all" placeholder="Masukkan nama Anda" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2F8FFF] focus:border-transparent transition-all" placeholder="nama@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Pesan</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#2F8FFF] focus:border-transparent transition-all" placeholder="Tulis pesan Anda di sini..."></textarea>
              </div>
              <button type="button" className="w-full bg-[#2F8FFF] text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors">
                Kirim Pesan
              </button>
            </form>
          </div>
          
          {/* Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">Kantor Pusat</h3>
              <p className="text-slate-600">Jl. Teknologi Raya No. 123,<br/>Jakarta Selatan, 12345<br/>Indonesia</p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-slate-900 mb-2">Kontak Langsung</h3>
              <p className="text-slate-600">Email: halo@zelixapos.com<br/>Phone: +62 812 3456 7890<br/>Senin - Jumat, 09:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
