import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TentangKami() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Tentang <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73]">Zelixa POS</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Kami hadir untuk memberdayakan UMKM dan bisnis modern di Indonesia melalui teknologi sistem point of sale yang handal, cepat, dan mudah digunakan.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Visi Kami</h3>
            <p className="text-slate-600 leading-relaxed">
              Menjadi tulang punggung operasional bisnis di seluruh Indonesia, membantu pengusaha fokus pada pertumbuhan, bukan kerumitan manajemen.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Misi Kami</h3>
            <p className="text-slate-600 leading-relaxed">
              Menyediakan sistem yang stabil, integrasi yang mulus, dan layanan pelanggan terbaik untuk memastikan bisnis berjalan lancar 24/7.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
