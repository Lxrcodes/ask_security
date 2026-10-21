import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact ASK Security',
  description: 'Get in touch with ASK Security for a free security consultation and no-obligation quote. Available 24/7 on +44 7476 058050 or send us a message online.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
