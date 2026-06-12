import PageShell from '@/components/PageShell';
import LoconavTrackingSection from '@/components/LoconavTrackingSection';

export default function TrackingPage() {
  return (
    <PageShell
      title="Technology & Tracking"
      description="End-to-end visibility powered by IoT sensors, GPS, and cloud dashboards — with 24/7 monitoring on every shipment."
      dark
    >
      <LoconavTrackingSection />
    </PageShell>
  );
}
