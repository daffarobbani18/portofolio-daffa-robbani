import Navbar from '@/src/components/Navbar';
import HeroSection from '@/src/components/HeroSection';
import AboutSection from '@/src/components/AboutSection';
import BentoGrid from '@/src/components/BentoGrid';
import Footer from '@/src/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* About Section - Split Screen dengan Foto Besar */}
      <AboutSection />

      {/* Bento Grid Section */}
      <BentoGrid />

      {/* Footer */}
      <Footer />
    </main>
  );
}
