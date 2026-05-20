import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Industrial Security Services London | Warehouse & Factory Security',
  description: 'Professional industrial security in London. SIA-licensed guards for warehouses, factories & distribution centres. Access control, patrols & 24/7 protection.',
};

export default function IndustrialSecurityPage() {
  return (
    <ServicePageTemplate
      title="Industrial Security"
      heroDescription="Comprehensive security solutions for warehouses, factories, distribution centres, and industrial facilities across Hertfordshire, Bedfordshire, North London, and Central London. Protect your operations, assets, and personnel."
      description="Industrial facilities present unique security challenges, from protecting high-value stock and equipment to managing multiple access points and large site perimeters. Our industrial security service provides robust protection tailored to manufacturing, logistics, and distribution environments. SIA-licensed guards control access, conduct patrols, and monitor security systems, ensuring your operations run safely and securely around the clock. We understand industrial environments and work within your operational requirements."
      benefits={[
        'Experience securing industrial environments',
        'Gatehouse and access point control',
        'Internal and perimeter patrols',
        'Stock and equipment protection',
        'Health and safety awareness',
        '24/7 coverage including shift patterns',
      ]}
      whenYouNeed={[
        'Your facility requires professional security coverage',
        'You have experienced theft or unauthorized access',
        'Insurance or contracts require security measures',
        'You need to control access to your industrial site',
      ]}
      approach={[
        'We assess your industrial facility to understand operational flows, access requirements, and security vulnerabilities. Our security plan integrates with your operations rather than disrupting them, ensuring security enhances productivity.',
        'Gatehouse officers manage all site access, checking credentials, logging visitors and contractors, and managing vehicle movements. They ensure only authorized personnel enter your facility and maintain detailed records.',
        'Regular patrols cover the full site including production areas, storage facilities, perimeters, and car parks. Officers are vigilant for security threats, safety hazards, and operational issues that should be reported.',
        'We work within industrial health and safety requirements, ensuring our officers have appropriate PPE and training for your environment. Guards can be briefed on specific hazards and emergency procedures.',
      ]}
      faqs={[
        {
          question: 'Do your guards understand industrial environments?',
          answer: 'Yes, many of our security officers have experience working in industrial, manufacturing, and logistics environments. They understand operational requirements, health and safety protocols, and the specific challenges of industrial security.',
        },
        {
          question: 'Can you provide gatehouse and access control?',
          answer: 'Absolutely. Gatehouse security is a core part of our industrial service. Officers manage vehicle and pedestrian access, verify credentials, and maintain visitor logs in accordance with your procedures.',
        },
        {
          question: 'Do guards wear appropriate PPE for industrial sites?',
          answer: 'Yes, we provide officers with appropriate PPE including hi-vis clothing, safety boots, and hard hats as required. We can also accommodate site-specific PPE requirements.',
        },
        {
          question: 'Can you cover shift patterns and 24/7 operations?',
          answer: 'Yes, we provide security coverage to match your operational patterns, whether that is standard business hours, shift patterns, or continuous 24/7 operations. We maintain consistent coverage through planned shift rotations.',
        },
        {
          question: 'How do guards handle goods in and out?',
          answer: 'Officers can verify delivery documentation, check vehicles against expected deliveries, and maintain goods-in logs. They work with your logistics team to ensure security without delaying operations.',
        },
      ]}
      relatedServices={[
        { name: 'Construction Site Security', href: '/services/construction-site-security' },
        { name: 'Mobile Patrols', href: '/services/mobile-patrols' },
        { name: 'Corporate Security', href: '/services/corporate-security' },
      ]}
      heroImage="/images/security-systems-industrial-sites-1-1110x444-1.jpg"
    />
  );
}
