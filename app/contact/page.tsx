import PageShell from '@/components/PageShell';
import ContactSection from '@/components/ContactSection';

export default function ContactPage() {
  return (
    <PageShell
      title="Book Consultation"
      description="Use the form, email link, or WhatsApp to start a consultation for transport, logistics, warehousing, or compliance."
      dark
    >
      <ContactSection />
    </PageShell>
  );
}