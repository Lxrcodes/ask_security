import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Door Supervisors London | Professional Door Security',
  description: 'Professional door supervisor services in London. SIA-licensed door staff for pubs, clubs, bars & venues. Experienced, professional & customer-focused security.',
};

export default function DoorSupervisorsPage() {
  return (
    <ServicePageTemplate
      title="Door Supervisors"
      heroDescription="Professional SIA-licensed door supervisors for pubs, clubs, bars, and entertainment venues across London and South East England. Experienced security that keeps your venue safe while welcoming guests."
      description="Door supervisors are the frontline of venue security, controlling access, managing crowds, and ensuring the safety of patrons and staff. Our SIA-licensed door supervisors bring professionalism, experience, and excellent customer service skills to your venue. They understand the unique challenges of the hospitality industry, from managing queues and checking IDs to handling intoxicated individuals and responding to incidents. We provide door staff who enhance your venue's reputation while maintaining security."
      benefits={[
        'SIA-licensed door supervision specialists',
        'Professional, well-presented appearance',
        'Experienced in conflict resolution',
        'ID verification and age checking',
        'Crowd management and queue control',
        'Incident response and reporting',
      ]}
      whenYouNeed={[
        'Your venue requires licensed door supervision',
        'You want to improve customer experience while maintaining security',
        'Local authority licensing conditions require door staff',
        'You need reliable, consistent door security team',
      ]}
      approach={[
        'We match door supervisors to your venue based on experience, skills, and fit with your venue culture. Whether you run a sophisticated cocktail bar or a busy nightclub, we provide door staff who understand your clientele and requirements.',
        'Our door supervisors arrive in time to receive a full briefing on venue policies, expected guests, and any specific concerns. They work as part of your team, coordinating with bar staff and management throughout the night.',
        'Throughout the evening, door supervisors manage entry, verify IDs, and maintain awareness of the venue environment. They are trained to spot potential problems early and intervene before situations escalate.',
        'At closing time, our team ensures safe dispersal of guests and can assist with end-of-night security checks. We provide incident reports for any notable events during the shift.',
      ]}
      pricingFrom="From £16 per hour"
      faqs={[
        {
          question: 'Are all your door supervisors SIA licensed?',
          answer: 'Yes, every door supervisor we provide holds a valid SIA Door Supervisor license. We verify all licenses before deployment and conduct regular checks to ensure compliance.',
        },
        {
          question: 'Can you provide door staff at short notice?',
          answer: 'We maintain a team of available door supervisors and can often accommodate last-minute requests. However, for guaranteed availability, we recommend booking at least 48 hours in advance.',
        },
        {
          question: 'Will we have the same door staff each week?',
          answer: 'We aim to provide consistency by assigning regular door supervisors to each venue. This builds familiarity with your venue, staff, and regular customers, improving security effectiveness.',
        },
        {
          question: 'How do your door staff handle difficult situations?',
          answer: 'Our door supervisors are trained in conflict resolution and de-escalation techniques. The priority is always to resolve situations calmly and safely, using reasonable force only as a last resort.',
        },
        {
          question: 'Do you provide female door supervisors?',
          answer: 'Yes, we have experienced female door supervisors available. Many venues find a mixed-gender door team beneficial for conducting searches and managing diverse clientele.',
        },
      ]}
      relatedServices={[
        { name: 'Event Security', href: '/services/event-security' },
        { name: 'Retail Security', href: '/services/retail-security' },
        { name: 'Hotel Security', href: '/services/hotel-security' },
      ]}
    />
  );
}
