import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Retail Security Guards London | Shop & Store Security',
  description: 'Professional retail security services in London. SIA-licensed guards for shops, stores & shopping centres. Loss prevention, customer safety & theft deterrence.',
};

export default function RetailSecurityPage() {
  return (
    <ServicePageTemplate
      title="Retail Security"
      heroDescription="Professional retail security services to protect your store, prevent theft, and create a safe shopping environment for customers and staff across London and South East England."
      description="Retail theft and shoplifting cost UK businesses billions each year. Our retail security guards provide visible deterrence and professional loss prevention, protecting your stock, staff, and customers. From high street shops to large shopping centres, our SIA-licensed officers are trained in retail-specific security techniques, conflict resolution, and customer service, ensuring your business is protected while maintaining a welcoming atmosphere."
      benefits={[
        'Significant reduction in theft and shrinkage',
        'Customer-focused, professional security presence',
        'Trained in retail loss prevention techniques',
        'CCTV monitoring and surveillance',
        'Safe handling of confrontational situations',
        'Staff and customer safety assurance',
      ]}
      whenYouNeed={[
        'Your store experiences regular theft or shoplifting incidents',
        'You want to create a safer shopping environment',
        'High-value stock requires additional protection',
        'Staff have raised concerns about personal safety',
      ]}
      approach={[
        'Our retail security strategy begins with understanding your store layout, high-value merchandise locations, and any recurring issues. We position guards strategically to maximize visibility and deterrence while maintaining a customer-friendly environment.',
        'Guards conduct regular floor walks, paying particular attention to high-risk areas and suspicious behavior. They work discreetly to avoid disrupting the shopping experience while remaining vigilant for potential theft.',
        'Our officers are trained in the legal aspects of retail security, including powers of detention and evidence gathering. When incidents occur, they handle situations professionally and in accordance with legal requirements.',
        'We provide regular incident reports and analytics to help identify patterns and inform loss prevention strategies. Our team can also advise on CCTV placement, signage, and other deterrent measures.',
      ]}
      pricingFrom="From £15 per hour"
      faqs={[
        {
          question: 'Can your guards legally detain shoplifters?',
          answer: 'SIA-licensed security guards have powers of citizen arrest when they witness or have reasonable grounds to suspect theft. Our guards are trained in the legal requirements and proper procedures for detention.',
        },
        {
          question: 'Will having security guards deter genuine customers?',
          answer: 'Our guards are trained to be approachable and customer-friendly. A professional security presence actually makes many customers feel safer and more comfortable shopping in your store.',
        },
        {
          question: 'Do you provide plainclothes as well as uniformed guards?',
          answer: 'Yes, we offer both uniformed and plainclothes security officers. Many retailers find a combination effective, with uniformed guards providing visible deterrence and plainclothes officers identifying and monitoring suspicious individuals.',
        },
        {
          question: 'Can guards help with tasks beyond security?',
          answer: 'Our retail security officers often assist with customer service tasks such as giving directions, helping with queries, and supporting staff during busy periods. This adds value while maintaining security coverage.',
        },
        {
          question: 'How do you handle difficult or aggressive individuals?',
          answer: 'Our guards are extensively trained in conflict resolution and de-escalation techniques. The priority is always to resolve situations peacefully while ensuring the safety of staff and customers.',
        },
      ]}
      relatedServices={[
        { name: 'Corporate Security', href: '/services/corporate-security' },
        { name: 'Door Supervisors', href: '/services/door-supervisors' },
        { name: 'Concierge Security', href: '/services/concierge-security' },
      ]}
    />
  );
}
