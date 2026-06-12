import PageShell from '@/components/PageShell';
import ComplianceWarehousingSection from '@/components/ComplianceWarehousingSection';

export default function CompliancePage() {
  return (
    <PageShell
      title="Compliance Overview"
      description="A combined view of cold chain handling, customs compliance, and secure warehousing — each available as a dedicated page for full operational detail."
    >
      <ComplianceWarehousingSection />
    </PageShell>
  );
}