import PageShell from '@/components/PageShell';
import AboutSection from '@/components/AboutSection';

export default function AboutPage() {
  return (
    <PageShell
      title="About Altovex Global Logistics"
      description="A clear view of the company, its operating model, and the discipline behind the regional logistics network."
    >
      <AboutSection />
    </PageShell>
  );
}