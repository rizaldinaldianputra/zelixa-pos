import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const posts = [
  {
    title: "5 Strategi Meningkatkan Penjualan Restoran di Era Digital",
    category: "Tips Bisnis",
    date: "12 Okt 2023",
    excerpt: "Pelajari cara mengoptimalkan menu, layanan, dan promosi digital untuk menarik lebih banyak pelanggan."
  },
  {
    title: "Pentingnya Manajemen Stok Real-time untuk Usaha Retail",
    category: "Manajemen",
    date: "05 Okt 2023",
    excerpt: "Mencegah kehabisan barang dan penumpukan stok dengan sistem POS yang terintegrasi penuh."
  },
  {
    title: "Update Zelixa POS v2.0: Fitur Baru dan Peningkatan Performa",
    category: "Pembaruan Produk",
    date: "28 Sep 2023",
    excerpt: "Kami merilis pembaruan besar yang membuat kasir Anda bekerja lebih cepat dengan tampilan yang lebih fresh."
  }
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Blog & <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#58D2FF] via-[#2F8FFF] to-[#081E73]">Wawasan</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Tips, trik, dan kabar terbaru seputar bisnis, teknologi kasir, dan ekosistem Zelixa POS.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <div className="h-48 bg-slate-200 w-full flex items-center justify-center text-slate-400 group-hover:bg-[#2F8FFF]/10 transition-colors">
                <span className="text-sm font-medium">Gambar Artikel</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-[#2F8FFF] bg-blue-50 px-2.5 py-1 rounded-md">{post.category}</span>
                  <span className="text-xs text-slate-500">{post.date}</span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-3 group-hover:text-[#2F8FFF] transition-colors">{post.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{post.excerpt}</p>
                <div className="mt-6 text-sm font-semibold text-[#2F8FFF] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Baca selengkapnya <span aria-hidden="true">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
