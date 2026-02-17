import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Film TV & Theatre Security London | Production Security',
  description: 'Specialist security for film sets, TV productions & theatres in London. SIA-licensed guards protecting equipment, locations & talent. Production security experts.',
};

export default function FilmTVTheatreSecurityPage() {
  return (
    <ServicePageTemplate
      title="Film TV & Theatre Security"
      heroDescription="Specialist security services for film productions, television shoots, and theatre venues across London. Protect your equipment, locations, and talent with guards who understand the entertainment industry."
      description="Film and television productions involve significant investment in equipment, props, and sets, often in exposed locations. Our specialist production security team understands the unique requirements of the entertainment industry, providing protection that supports rather than disrupts creative work. We offer location security, unit base protection, crowd control for public shoots, and talent protection, all delivered by guards experienced in working on production sets."
      benefits={[
        'Experienced production security specialists',
        'Location and unit base protection',
        'Crowd control for public filming',
        'Equipment and prop security',
        'Talent and VIP protection',
        'Flexible shifts to match production schedules',
      ]}
      whenYouNeed={[
        'You are filming in public or exposed locations',
        'Valuable equipment requires overnight protection',
        'Crowd control is needed for location shoots',
        'Talent or high-profile cast require protection',
      ]}
      approach={[
        'We understand production schedules are demanding and changeable. Our team is flexible and responsive, able to scale security up or down as shooting schedules evolve. We work seamlessly with location managers and production coordinators.',
        'For location shoots, we conduct advance site assessments and develop security plans that address equipment protection, crowd management, and emergency procedures. Guards are briefed on production protocols and maintain a low profile on set.',
        'Unit base security ensures vehicles, equipment, and trailers are protected during breaks and overnight. Our guards manage access, verify credentials, and maintain vigilance for theft or intrusion.',
        'For high-profile productions, we provide enhanced security including talent protection, anti-paparazzi measures, and coordination with personal security teams. We understand the need for discretion in protecting celebrity talent.',
      ]}
      pricingFrom="From £18 per hour"
      faqs={[
        {
          question: 'Do your guards understand how productions work?',
          answer: 'Yes, our production security team includes guards with extensive experience on film and TV sets. They understand protocols, call sheets, and the need to maintain a low profile while shooting is in progress.',
        },
        {
          question: 'Can you provide overnight security for location equipment?',
          answer: 'Absolutely. Overnight protection of equipment, vehicles, and sets is a core part of our production security service. We can provide static guards or mobile patrols depending on location requirements.',
        },
        {
          question: 'How do you handle crowd control during public filming?',
          answer: 'Our guards are experienced in managing public areas during filming, working with location managers and local authorities to maintain safe distances, manage pedestrians, and ensure shooting can continue smoothly.',
        },
        {
          question: 'Do you offer security for theatre productions?',
          answer: 'Yes, we provide security for theatres including front-of-house, stage door security, and protection for VIP guests and performers. We can also support special events, premieres, and press nights.',
        },
        {
          question: 'Can you accommodate changing production schedules?',
          answer: 'We understand productions change frequently. Our team is flexible and can adjust guard schedules, numbers, and locations with minimal notice to accommodate the realities of production work.',
        },
      ]}
      relatedServices={[
        { name: 'Event Security', href: '/services/event-security' },
        { name: 'Close Protection Security', href: '/services/close-protection-security' },
        { name: 'Traffic Marshals', href: '/services/traffic-marshals' },
      ]}
    />
  );
}
