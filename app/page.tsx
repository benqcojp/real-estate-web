import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import FeaturedProperties from './components/FeaturedProperties';
import ServicesSection from './components/ServicesSection';
import FeaturedAgents from './components/FeaturedAgents';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturedProperties />
      <ServicesSection />
      <FeaturedAgents />
      <ContactSection />
      <Footer />
    </main>
  );
} 