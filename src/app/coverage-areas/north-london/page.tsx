import type { Metadata } from 'next';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Security Guard Services North London',
  description: 'Professional SIA-licensed security guards across North London. Residential, commercial and construction site security in Harrow, Enfield, Barnet, Finchley and Northwood.',
};

export default function NorthLondonPage() {
  return (
    <LocationPageTemplate
      region="North London"
      intro="Professional SIA-licensed security guards covering Harrow, Enfield, Barnet, Finchley, Northwood and surrounding areas. 24/7 residential, commercial and construction security."
      overview="North London is a diverse area encompassing some of the capital's most affluent residential neighbourhoods alongside busy commercial zones and active development sites. ASK Security provides comprehensive security solutions tailored to the specific needs of each location — from protecting high-value homes in Barnet and Northwood to securing construction sites in Enfield and commercial premises throughout Harrow. Our local knowledge and fast response times make us the trusted security partner for homes and businesses across North London."
      areas={[
        'Harrow',
        'Enfield',
        'Barnet',
        'Finchley',
        'Northwood',
        'Edgware',
        'Mill Hill',
        'Hendon',
        'Wembley',
        'Borehamwood',
      ]}
      responseTime="20–30 min"
      services={[
        {
          name: 'Residential Security',
          href: '/services/residential-security',
          description: 'Protecting homes, gated communities, and residential estates across North London.',
        },
        {
          name: 'Mobile Patrols',
          href: '/services/mobile-patrols',
          description: 'Regular mobile security patrols for commercial and residential properties across North London.',
        },
        {
          name: 'Key Holding & Alarm Response',
          href: '/services/key-holding-alarm-response',
          description: '24/7 key holding and alarm response for homes and businesses across the area.',
        },
        {
          name: 'Construction Site Security',
          href: '/services/construction-site-security',
          description: 'Protecting active construction sites from theft and vandalism across North London.',
        },
        {
          name: 'Corporate Security',
          href: '/services/corporate-security',
          description: 'Security solutions for business parks, offices, and commercial premises.',
        },
        {
          name: 'Vacant Property Security',
          href: '/services/vacant-property-security',
          description: 'Protecting vacant and unoccupied properties from squatters and vandalism.',
        },
      ]}
      highlights={[
        'Local knowledge across all North London boroughs',
        'SIA-licensed, DBS-checked security guards',
        '24/7 emergency response — 20–30 minute average arrival',
        'Experienced in both residential and commercial environments',
        'Flexible contracts from one night to long-term',
        '£10M public liability insurance as standard',
      ]}
      faqs={[
        {
          question: 'Do you provide residential security in Northwood and Barnet?',
          answer: 'Yes, we provide residential security across North London including Northwood, Barnet, Finchley, and surrounding areas. Our guards are experienced in protecting high-value homes and residential estates with discretion.',
        },
        {
          question: 'Can you secure a construction site in Enfield overnight?',
          answer: 'Yes. We provide 24/7 construction site security throughout North London. Our guards protect equipment, materials, and prevent trespass and vandalism, keeping your project on schedule.',
        },
        {
          question: 'Do you offer key holding services for North London businesses?',
          answer: 'Yes, we provide key holding and alarm response across North London. When your alarm triggers, our nearest SIA-licensed guard responds immediately, eliminating the need for you to attend out-of-hours incidents.',
        },
        {
          question: 'How quickly can guards get to North London?',
          answer: 'Our average emergency response time across North London is 20–30 minutes. We maintain mobile patrol vehicles across the area to ensure fast response.',
        },
      ]}
    />
  );
}
