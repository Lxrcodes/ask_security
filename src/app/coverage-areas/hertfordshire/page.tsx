import type { Metadata } from 'next';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Security Guard Services Hertfordshire',
  description: 'SIA-licensed security guard services across Hertfordshire. Based in Radlett, we cover Watford, St Albans, Hemel Hempstead, Stevenage and surrounding areas. Industrial, mobile patrol and key holding specialists.',
};

export default function HertfordshirePage() {
  return (
    <LocationPageTemplate
      region="Hertfordshire"
      intro="Based in Radlett, ASK Security provides professional SIA-licensed security guards throughout Hertfordshire — covering Watford, St Albans, Hemel Hempstead, Stevenage and beyond."
      overview="With our headquarters in Radlett, Hertfordshire is our home territory and where we have the deepest local knowledge and fastest response capability. We serve a wide range of clients across the county including industrial and logistics operations in Hemel Hempstead and Stevenage, retail and commercial premises in Watford, and residential properties throughout St Albans and the surrounding villages. Whether you need 24/7 static guards, regular mobile patrols, or key holding and alarm response, we provide reliable security solutions tailored to Hertfordshire's varied commercial and residential landscape."
      areas={[
        'Watford',
        'St Albans',
        'Hemel Hempstead',
        'Stevenage',
        'Radlett',
        'Hatfield',
        'Welwyn Garden City',
        'Borehamwood',
        'Bushey',
        'Potters Bar',
      ]}
      responseTime="30–45 min"
      services={[
        {
          name: 'Mobile Patrols',
          href: '/services/mobile-patrols',
          description: 'Regular mobile security patrols across Hertfordshire sites, industrial estates, and business parks.',
        },
        {
          name: 'Key Holding & Alarm Response',
          href: '/services/key-holding-alarm-response',
          description: '24/7 key holding and rapid alarm response for Hertfordshire businesses and properties.',
        },
        {
          name: 'Industrial Security',
          href: '/services/industrial-security',
          description: 'Security solutions for warehouses, factories, and distribution centres across Hertfordshire.',
        },
        {
          name: 'Construction Site Security',
          href: '/services/construction-site-security',
          description: 'Protecting Hertfordshire construction sites from theft, vandalism, and trespass.',
        },
        {
          name: 'Vacant Property Security',
          href: '/services/vacant-property-security',
          description: 'Comprehensive protection for vacant and unoccupied properties across the county.',
        },
        {
          name: 'Residential Security',
          href: '/services/residential-security',
          description: 'Discreet residential security for homes and estates throughout Hertfordshire.',
        },
      ]}
      highlights={[
        'Headquarters based in Radlett, Hertfordshire',
        'Deepest local knowledge and fastest response in the county',
        'SIA-licensed, DBS-checked security professionals',
        'Specialists in industrial and logistics site security',
        'Flexible mobile patrol packages across the county',
        '£10M public liability insurance as standard',
      ]}
      faqs={[
        {
          question: 'Are you based in Hertfordshire?',
          answer: 'Yes, ASK Security is headquartered in Radlett, Hertfordshire. This means we have the fastest response times and the most detailed local knowledge of any security provider in the county.',
        },
        {
          question: 'Do you provide industrial security in Hemel Hempstead and Stevenage?',
          answer: 'Yes, we provide security for industrial estates, warehouses, and distribution centres throughout Hertfordshire including Hemel Hempstead and Stevenage industrial areas.',
        },
        {
          question: 'Can you provide mobile patrols across multiple Hertfordshire sites?',
          answer: 'Absolutely. Our mobile patrol service is ideal for businesses with multiple sites across Hertfordshire. Our patrol vehicles cover the county, checking your premises at scheduled or random intervals.',
        },
        {
          question: 'Do you cover rural Hertfordshire?',
          answer: 'Yes, we cover both urban and rural areas of Hertfordshire. Whether your property is in a market town, business park, or the Hertfordshire countryside, we can provide appropriate security coverage.',
        },
      ]}
    />
  );
}
