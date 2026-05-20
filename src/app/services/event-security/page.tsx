import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Event Security Services London | Professional Event Guards',
  description: 'Professional event security services in London. SIA-licensed guards for concerts, festivals, corporate events & private functions. Crowd management & access control.',
};

export default function EventSecurityPage() {
  return (
    <ServicePageTemplate
      title="Event Security"
      heroDescription="Comprehensive event security services for gatherings of all sizes. From corporate functions to music festivals, our SIA-licensed guards ensure your event runs safely and smoothly across Hertfordshire, Bedfordshire, North London, and Central London."
      description="Successful events require meticulous security planning and professional execution. Our event security service covers everything from small private parties to large-scale public events, providing crowd management, access control, and emergency response. Our experienced team includes event security specialists who understand the unique challenges of protecting guests while maintaining a positive atmosphere. We work closely with event organizers, venues, and local authorities to ensure compliance and safety."
      benefits={[
        'Experienced event security specialists',
        'Comprehensive crowd management',
        'Professional access and accreditation control',
        'Emergency response and first aid trained',
        'VIP and artist protection available',
        'Pre-event security planning and risk assessment',
      ]}
      whenYouNeed={[
        'You are organizing a public or private event',
        'Your venue requires professional crowd management',
        'Local authority licensing requires security provision',
        'High-profile guests require additional protection',
      ]}
      approach={[
        'Every event begins with a thorough security assessment and planning phase. We review the venue, expected attendance, potential risks, and licensing requirements to develop a comprehensive security plan tailored to your event.',
        'On the day, our team arrives early to conduct final site checks and briefings. Guards are strategically positioned at access points, throughout the venue, and in mobile roles to respond to any situation.',
        'We manage all aspects of access control, from ticket verification to VIP accreditation. Our guards conduct bag checks and security screenings efficiently while maintaining a welcoming atmosphere for guests.',
        'Throughout the event, our control team monitors the situation, coordinating guard deployments and responding to any incidents. We maintain close communication with event organizers, venue staff, and emergency services.',
      ]}
      faqs={[
        {
          question: 'How many security guards do I need for my event?',
          answer: 'Guard numbers depend on factors including attendance, venue layout, event type, and licensing requirements. We conduct a risk assessment and recommend appropriate staffing levels for your specific event.',
        },
        {
          question: 'Can you help with event security planning?',
          answer: 'Yes, we provide comprehensive security planning services including risk assessments, security plans, crowd management strategies, and coordination with local authorities and emergency services.',
        },
        {
          question: 'Do you provide security for outdoor events?',
          answer: 'Absolutely. We have extensive experience securing outdoor events including festivals, fairs, sporting events, and concerts. We can also arrange perimeter security and overnight protection for multi-day events.',
        },
        {
          question: 'What if we need to change guard numbers at short notice?',
          answer: 'We maintain a pool of trained event security specialists and can often accommodate last-minute requests for additional guards. However, we recommend finalizing requirements at least 48 hours before the event.',
        },
        {
          question: 'Are your guards trained for emergency situations?',
          answer: 'Yes, all event security guards are trained in emergency response, evacuation procedures, and basic first aid. We can also provide guards with enhanced medical training for larger events.',
        },
      ]}
      relatedServices={[
        { name: 'Film TV & Theatre Security', href: '/services/film-tv-theatre-security' },
        { name: 'Close Protection Security', href: '/services/close-protection-security' },
        { name: 'Traffic Marshals', href: '/services/traffic-marshals' },
      ]}
      heroImage="/images/night-club-security.png"
    />
  );
}
