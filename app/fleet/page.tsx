import PageShell from '@/components/PageShell';
import FleetExcellenceSection from '@/components/FleetExcellenceSection';

export default function FleetPage() {
  return (
    <PageShell
      title="Fleet Excellence"
      description="Heavy haulage, temperature-controlled transport, and disciplined operations for regional cargo movement."
    >
      <FleetExcellenceSection />
    </PageShell>
  );
}