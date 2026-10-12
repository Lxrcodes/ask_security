import type { Metadata } from 'next';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Security Guard Services Bedfordshire',
  description: 'Professional SIA-licensed security guard services across Bedfordshire. Industrial, logistics and construction security specialists in Bedford, Luton, Dunstable and Leighton Buzzard.',
};

export default function BedfordshirePage() {
  return (
    <LocationPageTemplate
      region="Bedfordshire"
      intro="Professional SIA-licensed security guards serving Bedford, Luton, Dunstable, Leighton Buzzard and across Bedfordshire. Specialists in industrial, logistics, and commercial security."
      overview="Bedfordshire is a major hub for logistics, manufacturing, and distribution — particularly around Luton and Dunstable near the M1 corridor. ASK Security provides specialist security solutions tailored to the county's industrial landscape, including 24/7 static guards, mobile patrols, and key holding services for warehouses, distribution centres, and manufacturing facilities. We also provide commercial security in Bedford town centre and residential security throughout the county. Our proximity to both the M1 and A1 corridors means we can respond rapidly to incidents anywhere in Bedfordshire."
      areas={[
        'Bedford',
        'Luton',
        'Dunstable',
        'Leighton Buzzard',
        'Ampthill',
        'Biggleswade',
        'Sandy',
        'Flitwick',
        'Houghton Regis',
        'Kempston',
      ]}
      responseTime="30–45 min"
      services={[
        {
          name: 'Industrial Security',
          href: '/services/industrial-security',
          description: 'Security solutions for Bedfordshire warehouses, factories, and distribution centres.',
        },
        {
          name: 'Mobile Patrols',
          href: '/services/mobile-patrols',
          description: 'Regular mobile security patrols across Bedfordshire industrial estates and business parks.',
        },
        {
          name: 'Key Holding & Alarm Response',
          href: '/services/key-holding-alarm-response',
          description: '24/7 key holding and alarm response for Bedfordshire businesses and properties.',
        },
        {
          name: 'Construction Site Security',
          href: '/services/construction-site-security',
          description: 'Protecting Bedfordshire construction sites from theft, vandalism, and unauthorised access.',
        },
        {
          name: 'Vacant Property Security',
          href: '/services/vacant-property-security',
          description: 'Protection for vacant commercial and residential properties across Bedfordshire.',
        },
        {
          name: 'Corporate Security',
          href: '/services/corporate-security',
          description: 'Professional security for offices and commercial premises across Bedford and Luton.',
        },
      ]}
      highlights={[
        'Specialists in logistics and industrial security',
        'Covering major M1 and A1 corridor business parks',
        'SIA-licensed, DBS-checked security guards',
        '24/7 mobile patrols across the county',
        'Fast response to Luton, Bedford, and Dunstable',
        '£10M public liability insurance as standard',
      ]}
      faqs={[
        {
          question: 'Do you provide security for warehouses and logistics facilities near Luton?',
          answer: 'Yes, we specialise in industrial and logistics security across Bedfordshire, including the major distribution centres and warehouses around Luton and Dunstable. We provide static guards, mobile patrols, and access control.',
        },
        {
          question: 'Can you provide security in Bedford town centre?',
          answer: 'Yes, we provide commercial and corporate security throughout Bedford town centre and the surrounding area, including retail premises, offices, and business parks.',
        },
        {
          question: 'Do you cover construction sites across Bedfordshire?',
          answer: 'Yes. We provide 24/7 construction site security throughout Bedfordshire, protecting valuable equipment and materials from theft and vandalism and deterring unauthorised access.',
        },
        {
          question: 'How quickly can you respond to incidents in Bedfordshire?',
          answer: 'Our average emergency response time across Bedfordshire is 30–45 minutes. Our mobile patrol vehicles are positioned to cover the county efficiently, with particular focus on the M1 and A1 corridors.',
        },
      ]}
    />
  );
}
