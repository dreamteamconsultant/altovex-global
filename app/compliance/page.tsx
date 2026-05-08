import PageShell from '@/components/PageShell';
import ComplianceWarehousingSection from '@/components/ComplianceWarehousingSection';

export default function CompliancePage() {
  return (
    <PageShell
      title="Compliance and Warehousing"
      description="Cold chain handling, customs compliance, and secure warehousing delivered with operational discipline."
    >
      <ComplianceWarehousingSection />
    </PageShell>
  );
}