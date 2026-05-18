import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Corporate Security Services London | Office Security Guards',
  description: 'Professional corporate security services in London. SIA-licensed guards for offices, headquarters & business premises. Reception security, access control & more.',
};

export default function CorporateSecurityPage() {
  return (
    <ServicePageTemplate
      title="Corporate Security"
      heroDescription="Professional security solutions for corporate offices, business headquarters, and commercial premises across Hertfordshire, Bedfordshire, North London, and Central London. Protect your people, assets, and reputation."
      description="Our corporate security service provides comprehensive protection for businesses of all sizes. From front-of-house reception security to comprehensive access control and emergency response, our SIA-licensed guards deliver professional security that enhances your corporate image while keeping your premises, employees, and visitors safe. We understand that corporate security requires discretion, professionalism, and exceptional customer service skills."
      benefits={[
        'Professional, well-presented security officers',
        'Comprehensive access control management',
        'Reception and front desk security',
        'CCTV monitoring and patrol services',
        'Emergency response and evacuation support',
        'Visitor management and contractor vetting',
      ]}
      whenYouNeed={[
        'Your office requires professional access control and visitor management',
        'You need security that enhances your corporate image',
        'Employee safety is a priority for your business',
        'You require out-of-hours security for your premises',
      ]}
      approach={[
        'We work closely with your facilities team to understand your corporate culture, security requirements, and any specific concerns. Our guards are selected not just for their security expertise but for their ability to represent your brand professionally.',
        'Our corporate security officers manage access control systems, verify visitor credentials, and maintain detailed logs of all building access. They serve as the first point of contact for visitors, providing directions and assistance while maintaining security protocols.',
        'Beyond visible security presence, our guards monitor CCTV systems, conduct regular patrols, and are trained to respond to a variety of situations from medical emergencies to security threats. They work seamlessly with your existing staff and procedures.',
        'We provide regular security reports and recommendations for improving your corporate security posture. Our team can also assist with developing emergency procedures and conducting security awareness training for your staff.',
      ]}
      faqs={[
        {
          question: 'What qualifications do your corporate security officers have?',
          answer: 'All officers are SIA-licensed and have passed enhanced DBS checks. Many have backgrounds in police, military, or specialist corporate security roles. They receive training in customer service, conflict resolution, and corporate protocols.',
        },
        {
          question: 'Can your officers manage our access control systems?',
          answer: 'Yes, our officers are trained to work with all major access control systems. We can manage visitor passes, verify credentials, and maintain access logs according to your requirements.',
        },
        {
          question: 'Do you provide both reception security and patrol services?',
          answer: 'Yes, we offer flexible service packages that can include reception desk coverage, internal patrols, CCTV monitoring, and out-of-hours security. Services can be tailored to your specific needs.',
        },
        {
          question: 'How do you ensure consistency with regular officers?',
          answer: 'We assign dedicated officers to each corporate client wherever possible, ensuring familiarity with your premises, procedures, and staff. This consistency improves security effectiveness and service quality.',
        },
        {
          question: 'Can your security team help during emergency evacuations?',
          answer: 'Absolutely. Our officers are trained in emergency procedures and can assist with evacuations, assembly point management, and liaison with emergency services. We can also help develop and test your evacuation plans.',
        },
      ]}
      relatedServices={[
        { name: 'Concierge Security', href: '/services/concierge-security' },
        { name: 'Hotel Security', href: '/services/hotel-security' },
        { name: 'Close Protection Security', href: '/services/close-protection-security' },
      ]}
    />
  );
}
