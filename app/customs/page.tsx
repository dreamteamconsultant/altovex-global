import PageShell from '@/components/PageShell';
import CustomsComplianceSection from '@/components/CustomsComplianceSection';

export default function CustomsPage() {
  return (
    <PageShell
      title="Customs & Compliance"
      description="Expert customs brokerage and regulatory compliance — EAC, WCO, and bilateral trade agreement expertise with proactive documentation."
      dark
    >
      <CustomsComplianceSection />
    </PageShell>
  );
}
