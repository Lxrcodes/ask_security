import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Concierge Security Services London | Front of House Security',
  description: 'Professional concierge security services in London. SIA-licensed guards providing security with exceptional customer service for residential & commercial buildings.',
};

export default function ConciergeSecurityPage() {
  return (
    <ServicePageTemplate
      title="Concierge Security"
      heroDescription="Premium front-of-house security with exceptional customer service for residential buildings, corporate offices, and luxury venues across London."
      description="Concierge security combines professional security services with high-end customer service, creating a welcoming first impression while maintaining robust protection. Our concierge security officers are selected for their exceptional interpersonal skills, professional appearance, and security expertise. They manage reception areas, control access, assist visitors, and handle deliveries, all while remaining vigilant against security threats. Ideal for luxury residential buildings, premium office spaces, and high-end venues."
      benefits={[
        'Security and concierge service combined',
        'Exceptional customer service standards',
        'Professional, well-presented officers',
        'Visitor management and access control',
        'Package and delivery handling',
        '24/7 front desk coverage available',
      ]}
      whenYouNeed={[
        'Your building requires front desk security presence',
        'You want security that enhances property prestige',
        'Residents or tenants expect high service standards',
        'Professional visitor management is essential',
      ]}
      approach={[
        'We select concierge security officers who combine security expertise with genuine hospitality skills. They understand that first impressions matter and represent your building or business with professionalism and warmth.',
        'Our officers manage all aspects of front desk operations, from greeting visitors and managing access to handling deliveries and responding to resident or tenant requests. They maintain detailed logs and coordinate with building management.',
        'Security remains paramount despite the customer service focus. Officers are trained to recognize security threats, manage access control systems, and respond to incidents while maintaining a calm, professional demeanor.',
        'We provide regular service reports and work closely with building managers to ensure our service meets your evolving requirements. Officers can be briefed on VIP residents, expected visitors, and special procedures.',
      ]}
      pricingFrom="From £17 per hour"
      faqs={[
        {
          question: 'How is concierge security different from regular security?',
          answer: 'Concierge security places equal emphasis on customer service and security. Officers are trained to provide a welcoming experience while maintaining vigilant protection, making it ideal for premium residential and commercial properties.',
        },
        {
          question: 'What tasks can concierge security officers perform?',
          answer: 'Officers can handle reception duties, visitor management, package handling, access control, CCTV monitoring, building patrols, and resident assistance. They serve as a professional first point of contact for your building.',
        },
        {
          question: 'Do you provide concierge security for residential buildings?',
          answer: 'Yes, we provide concierge security for luxury apartments, gated communities, and residential developments. Our officers understand the importance of resident privacy and building a rapport with residents.',
        },
        {
          question: 'Can officers manage building access systems?',
          answer: 'Absolutely. Our officers are trained to operate access control systems, issue visitor passes, manage fob and key access, and maintain security logs according to your building procedures.',
        },
        {
          question: 'What appearance standards do your officers maintain?',
          answer: 'Our concierge officers maintain impeccable appearance standards, wearing smart uniforms appropriate to your property. We can provide officers in bespoke attire if required to match your brand image.',
        },
      ]}
      relatedServices={[
        { name: 'Corporate Security', href: '/services/corporate-security' },
        { name: 'Hotel Security', href: '/services/hotel-security' },
        { name: 'Close Protection Security', href: '/services/close-protection-security' },
      ]}
    />
  );
}
