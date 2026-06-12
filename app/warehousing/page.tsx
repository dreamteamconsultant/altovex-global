import PageShell from '@/components/PageShell';
import WarehousingSection from '@/components/WarehousingSection';

export default function WarehousingPage() {
  return (
    <PageShell
      title="Warehousing & Storage"
      description="Secure short- and long-term storage with climate control, bonded zones, real-time inventory visibility, and value-added services."
    >
      <WarehousingSection />
    </PageShell>
  );
}
