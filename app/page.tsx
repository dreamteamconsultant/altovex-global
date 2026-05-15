import Navigation from '@/components/Navigation';
import DashboardMetrics from '@/components/DashboardMetrics';
import AboutSection from '@/components/AboutSection';
import AltovexHeroSection from '@/components/AltovexHeroSection';
import ExecutiveArchitectureSection from '@/components/ExecutiveArchitectureSection';
import RegionalNetworkSection from '@/components/RegionalNetworkSection';
import FleetExcellenceSection from '@/components/FleetExcellenceSection';
import LoconavTrackingSection from '@/components/LoconavTrackingSection';
import ComplianceWarehousingSection from '@/components/ComplianceWarehousingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#07080A] text-white">
      <Navigation />
      <AltovexHeroSection />
      <div className="md:hidden">
        <DashboardMetrics />
      </div>
      <AboutSection />
      <ExecutiveArchitectureSection />
      <RegionalNetworkSection />
      <FleetExcellenceSection />
      <LoconavTrackingSection />
      <ComplianceWarehousingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
