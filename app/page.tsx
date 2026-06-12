import Navigation from '@/components/Navigation';
import DashboardMetrics from '@/components/DashboardMetrics';
import AboutSection from '@/components/AboutSection';
import AltovexHeroSection from '@/components/AltovexHeroSection';
import ExecutiveArchitectureSection from '@/components/ExecutiveArchitectureSection';
import RegionalNetworkSection from '@/components/RegionalNetworkSection';
import ServicesOverviewSection from '@/components/ServicesOverviewSection';
import HighlightBand from '@/components/HighlightBand';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#07080A] text-white">
      <Navigation />
      <AltovexHeroSection />
      <HighlightBand variant="light" />
      <div className="md:hidden">
        <DashboardMetrics />
      </div>
      <AboutSection />
      <ExecutiveArchitectureSection />
      <RegionalNetworkSection />
      <HighlightBand variant="light" />
      <ServicesOverviewSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
