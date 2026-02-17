import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Hotel Security Services London | Hospitality Security',
  description: 'Professional hotel security services in London. SIA-licensed guards for hotels, resorts & hospitality venues. Guest safety, access control & 24/7 protection.',
};

export default function HotelSecurityPage() {
  return (
    <ServicePageTemplate
      title="Hotel Security"
      heroDescription="Discreet, professional security services for hotels and hospitality venues across London. Protect your guests, staff, and reputation with SIA-licensed security that enhances the guest experience."
      description="Hotels present unique security challenges, balancing the need for robust protection with the imperative to provide excellent guest experiences. Our hotel security officers understand this balance, providing professional security that is welcoming to guests while remaining vigilant against threats. From luxury boutique hotels to large conference venues, we provide tailored security solutions including lobby and entrance security, floor patrols, event security, and VIP protection."
      benefits={[
        'Guest-focused, hospitality-trained officers',
        'Discreet security that enhances guest experience',
        'Lobby, entrance, and floor patrol services',
        'VIP and executive guest protection',
        'Conference and event security support',
        '24/7 coverage including night security',
      ]}
      whenYouNeed={[
        'Your hotel requires professional security coverage',
        'You want to enhance guest safety without impacting experience',
        'VIP guests require additional protection',
        'Events at your venue need security support',
      ]}
      approach={[
        'We work closely with hotel management to understand your brand, guest expectations, and security requirements. Our officers are selected for their ability to provide professional security while delivering the customer service standards your guests expect.',
        'Security officers are positioned strategically throughout the property, maintaining visibility at key points while conducting regular patrols of corridors, car parks, and other areas. They coordinate closely with reception and concierge teams.',
        'Our team is trained to handle the full range of hotel security situations, from managing difficult guests and handling lost property to responding to medical emergencies and security incidents. They act as an extension of your team.',
        'We provide regular security reports and recommendations for improving hotel security. Our officers can also support conference and event security, VIP arrivals, and special occasions.',
      ]}
      pricingFrom="From £16 per hour"
      faqs={[
        {
          question: 'How do you maintain guest experience while providing security?',
          answer: 'Our hotel security officers are trained in hospitality as well as security. They are welcoming and helpful to guests while remaining vigilant. Security presence is designed to reassure guests, not intimidate them.',
        },
        {
          question: 'Can you provide security for hotel events and conferences?',
          answer: 'Yes, we provide comprehensive event security support for hotel functions, conferences, and special occasions. This can include additional guards, access control, and coordination with event organizers.',
        },
        {
          question: 'Do you offer overnight security services?',
          answer: 'Absolutely. Many hotels require enhanced security during night hours. We provide overnight officers who maintain vigilance during quieter periods when properties may be more vulnerable.',
        },
        {
          question: 'Can your officers assist with VIP guest protection?',
          answer: 'Yes, we can provide enhanced security for VIP guests, including discrete accompaniment, floor security, and coordination with the guest\'s personal protection team if applicable.',
        },
        {
          question: 'How do your officers handle difficult guest situations?',
          answer: 'Our officers are trained in conflict resolution and de-escalation techniques specific to hospitality environments. They handle difficult situations diplomatically while protecting staff and other guests.',
        },
      ]}
      relatedServices={[
        { name: 'Concierge Security', href: '/services/concierge-security' },
        { name: 'Event Security', href: '/services/event-security' },
        { name: 'Close Protection Security', href: '/services/close-protection-security' },
      ]}
    />
  );
}
