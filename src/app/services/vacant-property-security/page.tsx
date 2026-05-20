import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Vacant Property Security London | Empty Building Protection',
  description: 'Professional vacant property security in London & South East. Protect unoccupied buildings from squatters, vandalism & theft. SIA-licensed guards 24/7.',
};

export default function VacantPropertySecurityPage() {
  return (
    <ServicePageTemplate
      title="Vacant Property Security"
      heroDescription="Comprehensive security solutions for vacant, unoccupied, and empty properties. Protect your investment from squatters, vandals, and thieves across Hertfordshire, Bedfordshire, North London, and Central London."
      description="Vacant properties are prime targets for squatters, vandals, metal thieves, and arsonists. Our vacant property security service provides the protection your empty building needs. Whether you have a property awaiting sale, undergoing renovation, or between tenants, we offer tailored security solutions including static guards, mobile patrols, and remote monitoring to safeguard your investment and maintain its value."
      benefits={[
        'Prevent squatter occupation and illegal entry',
        'Protect against vandalism and arson',
        'Deter metal and material theft',
        'Maintain property value and condition',
        'Meet insurance requirements for vacant properties',
        'Flexible coverage from single nights to long-term contracts',
      ]}
      whenYouNeed={[
        'Your property is awaiting sale or redevelopment',
        'A building is between tenants or undergoing renovation',
        'You have experienced previous break-ins or squatter attempts',
        'Insurance requires security measures for vacant premises',
      ]}
      approach={[
        'We begin with a comprehensive security survey of your vacant property, identifying vulnerabilities and recommending appropriate security measures. This might include physical security improvements, monitoring systems, and guard coverage.',
        'Our security solutions are tailored to your property type and risk level. Options range from regular mobile patrols to 24/7 static guard presence, depending on your requirements and budget.',
        'Guards conduct thorough internal and external patrols, checking for signs of attempted entry, damage, or unauthorized occupation. All utilities and secure areas are monitored to prevent theft and vandalism.',
        'We work closely with property owners and managers, providing regular reports and immediate notification of any incidents. Our team can also liaise with contractors and authorized visitors, maintaining a log of all property access.',
      ]}
      faqs={[
        {
          question: 'How quickly can you secure a vacant property?',
          answer: 'We can typically have security guards on-site within 24-48 hours, or faster for emergency situations. For immediate concerns, we can arrange same-day deployment.',
        },
        {
          question: 'What types of vacant properties do you secure?',
          answer: 'We secure all types of vacant properties including residential homes, commercial buildings, industrial units, development sites, and properties undergoing renovation or awaiting demolition.',
        },
        {
          question: 'Can you help if squatters have already occupied my property?',
          answer: 'While we cannot physically remove squatters (this requires legal process), we can provide security to prevent additional occupants and secure the property once legal eviction has been completed.',
        },
        {
          question: 'What security measures do you recommend for vacant properties?',
          answer: 'Recommendations depend on the property and risk level. Common measures include static guards, mobile patrols, alarm systems, CCTV monitoring, and physical security improvements like boarding and fencing.',
        },
        {
          question: 'Do you provide security for short-term vacancies?',
          answer: 'Yes, we offer flexible contracts from single nights to long-term arrangements. Whether your property is vacant for a weekend or several months, we can provide appropriate coverage.',
        },
      ]}
      relatedServices={[
        { name: 'Key Holding & Alarm Response', href: '/services/key-holding-alarm-response' },
        { name: 'Mobile Patrols', href: '/services/mobile-patrols' },
        { name: 'Construction Site Security', href: '/services/construction-site-security' },
      ]}
      heroImage="/images/garden-security.jpg"
    />
  );
}
