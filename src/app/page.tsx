import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'ASK Security | Professional Security Services London',
  description: 'Professional 24/7 security guard services across Hertfordshire, Bedfordshire, North London & Central London. SIA-licensed, ex-police and ex-military professionals.',
};

export default function Home() {
  return <HomeContent />;
}
