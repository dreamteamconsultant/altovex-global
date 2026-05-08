import PageShell from '@/components/PageShell';
import ExecutiveArchitectureSection from '@/components/ExecutiveArchitectureSection';

export default function ArchitecturePage() {
  return (
    <PageShell
      title="Executive Architecture"
      description="The operating structure that coordinates trade, logistics, and cross-border execution with control and clarity."
      dark
    >
      <ExecutiveArchitectureSection />
    </PageShell>
  );
}