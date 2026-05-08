import PageShell from '@/components/PageShell';
import RegionalNetworkSection from '@/components/RegionalNetworkSection';

export default function NetworkPage() {
  return (
    <PageShell
      title="Regional Network"
      description="Coverage across Kenya, Uganda, Zambia, and strategic corridors built for dependable movement across markets."
      dark
    >
      <RegionalNetworkSection />
    </PageShell>
  );
}