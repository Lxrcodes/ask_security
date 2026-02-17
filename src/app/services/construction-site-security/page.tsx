import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Construction Site Security London | Site Guards & Protection',
  description: 'Professional construction site security in London. SIA-licensed guards protecting equipment, materials & sites 24/7. Prevent theft & vandalism. Get a quote.',
};

export default function ConstructionSiteSecurityPage() {
  return (
    <ServicePageTemplate
      title="Construction Site Security"
      heroDescription="Comprehensive security solutions for construction sites of all sizes. Protect valuable equipment, materials, and your project from theft, vandalism, and unauthorized access across London and South East England."
      description="Construction sites are high-value targets for thieves, with equipment, materials, and metals worth significant sums left on-site. Our construction site security service provides robust protection for your project, from initial groundworks through to completion. SIA-licensed guards control access, conduct patrols, and provide 24/7 monitoring to prevent theft, vandalism, and trespass, keeping your project on schedule and on budget."
      benefits={[
        'Prevent theft of equipment and materials',
        'Control site access and contractor management',
        '24/7 coverage including nights and weekends',
        'Reduce insurance premiums with professional security',
        'Protect against vandalism and arson',
        'Health and safety compliance support',
      ]}
      whenYouNeed={[
        'You are starting a new construction or development project',
        'Your site has experienced theft or vandalism',
        'Insurance requirements mandate security presence',
        'You have valuable equipment or materials on-site',
      ]}
      approach={[
        'We conduct a comprehensive site assessment to understand access points, storage areas, and security vulnerabilities. This informs our deployment strategy and patrol routes to maximize protection for your specific site.',
        'Our guards manage all site access, maintaining logs of contractors, visitors, and deliveries. They verify credentials and ensure only authorized personnel enter the site, supporting your health and safety compliance.',
        'Regular internal and perimeter patrols are conducted throughout each shift, with particular attention to high-value equipment and material storage areas. Guards are vigilant for signs of attempted theft or trespass.',
        'We provide detailed daily reports on site activity, incidents, and observations. Our team works closely with site managers to adapt security measures as the project progresses and site conditions change.',
      ]}
      pricingFrom="From £14 per hour"
      faqs={[
        {
          question: 'Can you provide security for sites of any size?',
          answer: 'Yes, we secure construction projects from small residential developments to major commercial sites. We scale our security provision to match the size, value, and risk profile of each project.',
        },
        {
          question: 'Do your guards help with access control and sign-in?',
          answer: 'Absolutely. Our guards manage gatehouse operations, verify contractor credentials, maintain visitor logs, and ensure all site access complies with health and safety requirements.',
        },
        {
          question: 'What equipment do your construction site guards use?',
          answer: 'Guards are equipped with torches, radios, mobile phones, and first aid supplies. Depending on site requirements, they may also use CCTV monitoring equipment and access control systems.',
        },
        {
          question: 'Can security coverage change as the project progresses?',
          answer: 'Yes, we regularly review security requirements as projects evolve. Coverage can be scaled up during high-risk phases (such as equipment delivery) and adjusted as the site becomes more secure.',
        },
        {
          question: 'Will having security guards reduce my insurance costs?',
          answer: 'Many insurers offer reduced premiums for sites with professional security. We can provide documentation of our security measures to support your insurance applications.',
        },
      ]}
      relatedServices={[
        { name: 'Vacant Property Security', href: '/services/vacant-property-security' },
        { name: 'Mobile Patrols', href: '/services/mobile-patrols' },
        { name: 'Traffic Marshals', href: '/services/traffic-marshals' },
      ]}
    />
  );
}
