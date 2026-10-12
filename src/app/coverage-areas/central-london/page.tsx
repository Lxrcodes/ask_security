import type { Metadata } from 'next';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Security Guard Services Central London',
  description: 'Professional SIA-licensed security guards in Central London. 24/7 cover for corporate offices, hotels, retail and residential premises across the City, Westminster, Kensington & Chelsea.',
};

export default function CentralLondonPage() {
  return (
    <LocationPageTemplate
      region="Central London"
      intro="Professional SIA-licensed security guards serving the City of London, Westminster, Kensington & Chelsea, Camden and Islington. 24/7 cover for corporate offices, luxury hotels, retail premises and residential buildings."
      overview="Central London is one of the world's most demanding security environments. From the financial institutions of the City and the government buildings of Westminster to the luxury hotels of Mayfair and high-end retail of Kensington & Chelsea, we provide tailored security solutions that protect people, assets, and reputations. Our Central London security guards are experienced in high-profile, fast-paced environments and understand the discretion and professionalism required to operate in the capital's most prestigious locations."
      areas={[
        'City of London',
        'Westminster',
        'Kensington & Chelsea',
        'Camden',
        'Islington',
        'Mayfair',
        'Soho',
        'Covent Garden',
        'Canary Wharf',
        'Southwark',
      ]}
      responseTime="15–20 min"
      services={[
        {
          name: 'Corporate Security',
          href: '/services/corporate-security',
          description: 'Protecting offices, headquarters, and commercial premises across the City and West End.',
        },
        {
          name: 'Concierge Security',
          href: '/services/concierge-security',
          description: 'Front-of-house security for luxury residential buildings and premium office spaces.',
        },
        {
          name: 'Close Protection Security',
          href: '/services/close-protection-security',
          description: 'Discreet personal protection for executives, VIPs, and high-net-worth individuals.',
        },
        {
          name: 'Hotel Security',
          href: '/services/hotel-security',
          description: 'Specialist security for Central London hotels, boutique venues, and hospitality venues.',
        },
        {
          name: 'Key Holding & Alarm Response',
          href: '/services/key-holding-alarm-response',
          description: '24/7 key holding and rapid alarm response for commercial and residential properties.',
        },
        {
          name: 'Mobile Patrols',
          href: '/services/mobile-patrols',
          description: 'Regular mobile security patrols across multiple Central London sites.',
        },
      ]}
      highlights={[
        'Experienced in high-profile Central London environments',
        'SIA-licensed, DBS-checked security professionals',
        '24/7 emergency response — 15–20 minute average arrival',
        'Discreet security suited to luxury and corporate settings',
        'Accredited by ACT Awareness, Safe Contractor, and SIA',
        'Fully insured with £10M public liability',
      ]}
      faqs={[
        {
          question: 'Do you provide security in the City of London?',
          answer: 'Yes, we provide security services throughout the City of London, covering commercial premises, offices, and financial institutions. Our guards are experienced in the demands of the financial district.',
        },
        {
          question: 'Can you provide concierge security for a Central London apartment block?',
          answer: 'Absolutely. Concierge security is one of our most requested services in Central London. Our officers combine professional security with exceptional customer service, ideal for luxury residential buildings.',
        },
        {
          question: 'Do you provide close protection for visits to Central London?',
          answer: 'Yes. Our close protection officers provide discreet personal security for executives, celebrities, and high-net-worth individuals throughout Central London and beyond.',
        },
        {
          question: 'How quickly can you respond to an incident in Central London?',
          answer: 'Our average emergency response time in Central London is 15–20 minutes. For planned security requirements, we can typically have guards in place within 24–48 hours.',
        },
      ]}
    />
  );
}
