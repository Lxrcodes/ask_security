import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'Security Guard Services London & South East | ASK Security',
  description: 'Professional 24/7 security guard services in Hertfordshire, Bedfordshire & London. SIA-licensed, ex-police and ex-military professionals. Get a free quote.',
};

export default function Home() {
  return <HomeContent />;
}
