import PageShell from '@/components/PageShell';
import ServicesOverviewSection from '@/components/ServicesOverviewSection';

export default function ServicesPage() {
  return (
    <PageShell
      title="Services"
      description="The full portfolio of Altovex capabilities — each with its own dedicated page covering scope, operations, and supporting features."
    >
      <ServicesOverviewSection showHeading={false} />
    </PageShell>
  );
}
