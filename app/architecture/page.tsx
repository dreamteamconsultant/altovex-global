import PageShell from '@/components/PageShell';
import ExecutiveArchitectureSection from '@/components/ExecutiveArchitectureSection';

export default function ArchitecturePage() {
  return (
    <PageShell
      title="Executive Architecture"
      description="The mission and vision that anchor every corridor, cargo handover, and compliance decision across the Altovex network."
      dark
    >
      <ExecutiveArchitectureSection />
    </PageShell>
  );
}