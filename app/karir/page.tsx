import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Karir() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Bergabung dengan <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73]">Tim Kami</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Bantu kami membangun masa depan industri ritel dan F&B di Indonesia. Kami mencari talenta berbakat yang bersemangat untuk berinovasi.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Lowongan Tersedia</h3>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4 hover:border-[#2F8FFF] transition-colors">
              <div>
                <h4 className="font-bold text-lg text-slate-900">Frontend Developer</h4>
                <p className="text-slate-500 text-sm">Remote / Jakarta • Full-time</p>
              </div>
              <button className="px-6 py-2 bg-[#2F8FFF] text-white rounded-full font-medium hover:bg-blue-600 transition-colors">
                Lamar
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4 hover:border-[#2F8FFF] transition-colors">
              <div>
                <h4 className="font-bold text-lg text-slate-900">Product Manager</h4>
                <p className="text-slate-500 text-sm">Jakarta • Full-time</p>
              </div>
              <button className="px-6 py-2 bg-[#2F8FFF] text-white rounded-full font-medium hover:bg-blue-600 transition-colors">
                Lamar
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4 hover:border-[#2F8FFF] transition-colors">
              <div>
                <h4 className="font-bold text-lg text-slate-900">Customer Success Specialist</h4>
                <p className="text-slate-500 text-sm">Jakarta • Full-time</p>
              </div>
              <button className="px-6 py-2 bg-[#2F8FFF] text-white rounded-full font-medium hover:bg-blue-600 transition-colors">
                Lamar
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
