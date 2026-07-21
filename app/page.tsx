import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Trusted from '@/components/Trusted';
import WhyZelixa from '@/components/WhyZelixa';
import Features from '@/components/Features';
import DashboardPreview from '@/components/DashboardPreview';
import SuitableFor from '@/components/SuitableFor';
import Comparison from '@/components/Comparison';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Trusted />
      <WhyZelixa />
      <Features />
      <DashboardPreview />
      <SuitableFor />
      <Comparison />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
