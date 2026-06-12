import PageShell from '@/components/PageShell';
import LastMileSection from '@/components/LastMileSection';

export default function LastMilePage() {
  return (
    <PageShell
      title="Last-Mile Delivery"
      description="Final leg precision — high-mobility motorbikes and vans with route optimization and digital proof-of-delivery."
    >
      <LastMileSection />
    </PageShell>
  );
}
