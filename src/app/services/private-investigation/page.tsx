import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Private Investigation Services | Discreet Investigations',
  description: 'Professional private investigation services across Hertfordshire, Bedfordshire, North London, and Central London. Discreet, lawful investigations for individuals and businesses.',
};

export default function PrivateInvestigationPage() {
  return (
    <ServicePageTemplate
      title="Private Investigation"
      heroDescription="Discreet, professional private investigation services for individuals and businesses across Hertfordshire, Bedfordshire, North London, and Central London. Expert investigators delivering results you can trust."
      description="Our private investigation service provides discreet, professional, and lawful investigations for a wide range of personal and commercial needs. From infidelity investigations and missing persons to corporate fraud and employee misconduct, our experienced investigators gather evidence using legal methods, providing detailed reports suitable for personal or legal use. All investigations are conducted in full compliance with UK law, ensuring any evidence gathered is admissible and reliable."
      benefits={[
        'Discreet, professional investigators',
        'Lawful evidence gathering compliant with UK law',
        'Detailed written and photographic reports',
        'Suitable for personal, civil, and commercial use',
        'Experienced in surveillance and intelligence gathering',
        'Confidential service with full client discretion',
      ]}
      whenYouNeed={[
        'You suspect infidelity or dishonesty in a personal relationship',
        'Your business faces suspected fraud or employee misconduct',
        'You need to locate a missing person or trace an individual',
        'You require evidence for legal or insurance proceedings',
      ]}
      approach={[
        'Every investigation begins with a confidential consultation to understand your situation and objectives. We assess the feasibility of your case, discuss legal methods available, and agree on the scope and deliverables before any work begins.',
        'Our investigators use lawful surveillance techniques, open-source intelligence, and field work to gather the information you need. All activities are conducted in strict compliance with UK law to ensure evidence is legally obtained and usable.',
        'Throughout the investigation, you receive regular updates on progress. We maintain complete confidentiality, ensuring your case and identity are protected at all times.',
        'On conclusion, we provide a comprehensive written report including all findings, observations, and evidence gathered. Supporting photographs, video, and documentation are provided where applicable.',
      ]}
      faqs={[
        {
          question: 'Are your investigations legal?',
          answer: 'Yes, all investigations are conducted in full compliance with UK law. We only use lawful methods of evidence gathering, ensuring any evidence obtained is admissible in legal proceedings.',
        },
        {
          question: 'Will my identity be kept confidential?',
          answer: 'Absolutely. Client confidentiality is fundamental to our service. Your identity and the details of your case are kept strictly private throughout and after the investigation.',
        },
        {
          question: 'What types of investigation do you carry out?',
          answer: 'We carry out a wide range of investigations including infidelity, employee misconduct, fraud, missing persons, process serving, background checks, and evidence gathering for legal proceedings.',
        },
        {
          question: 'How long does an investigation take?',
          answer: 'Duration depends on the complexity of the case and the information required. We discuss expected timescales during your initial consultation and provide regular updates on progress throughout the investigation.',
        },
        {
          question: 'Can your reports be used in court?',
          answer: 'Our reports and evidence are compiled with legal proceedings in mind. As all evidence is gathered lawfully, it can generally be used in civil court proceedings. We recommend consulting your solicitor regarding your specific situation.',
        },
      ]}
      relatedServices={[
        { name: 'Close Protection Security', href: '/services/close-protection-security' },
        { name: 'Corporate Security', href: '/services/corporate-security' },
        { name: 'Residential Security', href: '/services/residential-security' },
      ]}
      heroImage="/images/car-road.JPG"
    />
  );
}
