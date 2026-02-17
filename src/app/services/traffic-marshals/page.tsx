import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Traffic Marshals London | Traffic Management Services',
  description: 'Professional traffic marshal services in London. Qualified traffic management for events, construction sites & film locations. Safe, efficient vehicle control.',
};

export default function TrafficMarshalsPage() {
  return (
    <ServicePageTemplate
      title="Traffic Marshals"
      heroDescription="Professional traffic management services for events, construction sites, and film locations across London. Our qualified traffic marshals ensure safe, efficient vehicle movement and pedestrian safety."
      description="Effective traffic management is essential for safety at construction sites, events, and location shoots. Our traffic marshals are trained and qualified to manage vehicle movements, control access, and maintain pedestrian safety. They coordinate with contractors, event organizers, and local authorities to implement traffic management plans, reducing congestion and ensuring compliance with safety requirements. From single-site banksman services to complex event traffic management, we provide professional solutions."
      benefits={[
        'Qualified traffic management personnel',
        'Banksman and vehicle marshalling',
        'Event car park management',
        'Construction site traffic control',
        'Coordination with local authorities',
        'Flexible service to match requirements',
      ]}
      whenYouNeed={[
        'Construction sites require vehicle movement control',
        'Events need car park and traffic management',
        'Film locations require traffic control for shoots',
        'Health and safety compliance requires traffic marshals',
      ]}
      approach={[
        'We begin by understanding your traffic management requirements, site layout, and any existing traffic management plans. Our marshals work within established plans or can help develop new ones in coordination with local authorities.',
        'Traffic marshals are positioned at key points to control vehicle movements, direct traffic, and ensure pedestrian safety. They use appropriate signage, PPE, and communication equipment to manage traffic effectively.',
        'For construction sites, our banksmen manage vehicle reversing, loading, and unloading operations. They coordinate with drivers and site personnel to prevent accidents and maintain efficient site operations.',
        'At events, our marshals manage car parks, direct attendees, and support emergency vehicle access. We can also provide temporary signage and coordinate with local traffic management where required.',
      ]}
      pricingFrom="From £15 per hour"
      faqs={[
        {
          question: 'What qualifications do your traffic marshals have?',
          answer: 'Our traffic marshals hold relevant qualifications including CSCS cards, banksman training, and traffic management certifications. All personnel are fully insured and wear appropriate PPE.',
        },
        {
          question: 'Can you provide banksmen for construction sites?',
          answer: 'Yes, we provide qualified banksmen for managing vehicle movements on construction sites. They are trained in reversing signals, vehicle marshalling, and site safety procedures.',
        },
        {
          question: 'Do you manage event car parks?',
          answer: 'Absolutely. We provide comprehensive car park management for events including directing vehicles, managing capacity, VIP parking, and ensuring emergency access is maintained.',
        },
        {
          question: 'Can you coordinate with local council traffic management?',
          answer: 'Yes, we have experience working with local authority traffic management teams. We can help implement agreed traffic management plans and coordinate temporary road measures.',
        },
        {
          question: 'Do you supply traffic management equipment?',
          answer: 'We can provide traffic marshals with basic equipment including hi-vis clothing, radios, and signaling equipment. For major traffic management requirements, we can coordinate with equipment suppliers.',
        },
      ]}
      relatedServices={[
        { name: 'Event Security', href: '/services/event-security' },
        { name: 'Construction Site Security', href: '/services/construction-site-security' },
        { name: 'Film TV & Theatre Security', href: '/services/film-tv-theatre-security' },
      ]}
    />
  );
}
