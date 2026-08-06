import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Car Park Security Management | ASK Security',
  description: 'Professional car park security management services in London and Hertfordshire. SIA-licensed guards for access control, vehicle monitoring, and parking enforcement.',
};

export default function CarParkSecurityPage() {
  return (
    <ServicePageTemplate
      title="Car Park Security Management"
      heroDescription="Professional car park security management services across Hertfordshire, Bedfordshire, North London, and Central London. Our SIA-licensed guards provide access control, vehicle monitoring, and a visible deterrent to protect your car park and its users."
      description="Effective car park security requires a proactive approach that balances access management with a safe and welcoming environment for users. Our car park security service covers everything from small private car parks to large multi-storey facilities, providing uniformed guards, patrol services, and access control management. Our experienced team deters anti-social behaviour, prevents unauthorised access, monitors CCTV, and responds swiftly to incidents. We work with property managers, retailers, hospitals, and local authorities to deliver tailored solutions that keep vehicles and people safe."
      benefits={[
        'Uniformed SIA-licensed guards on-site',
        'Access control and barrier management',
        'Vehicle and pedestrian monitoring',
        'Deterrent against theft, vandalism, and anti-social behaviour',
        'CCTV monitoring and incident reporting',
        'Flexible cover — day, night, and 24/7 options',
      ]}
      whenYouNeed={[
        'You manage a commercial, retail, or residential car park',
        'Your site has experienced theft, vandalism, or unauthorised parking',
        'You need access control for a restricted or permit-only area',
        'Your facility requires overnight or out-of-hours protection',
      ]}
      approach={[
        'We begin with a full site assessment to understand your car park layout, peak usage times, risk areas, and any existing security measures. This allows us to design a security plan tailored specifically to your facility.',
        'Uniformed guards are deployed at entry and exit points to manage access, verify permits, and deter unauthorised vehicles. Their visible presence alone significantly reduces incidents of theft and anti-social behaviour.',
        'Throughout each shift, guards conduct regular patrols of the car park, checking for suspicious activity, damage, or safety hazards. All incidents are logged and detailed reports are provided to management.',
        'Where CCTV is in place, our guards monitor live feeds and respond immediately to alerts. We can also coordinate with local police and emergency services when required, ensuring a swift and professional response to any situation.',
      ]}
      faqs={[
        {
          question: 'What types of car parks do you cover?',
          answer: 'We cover all types — including open surface car parks, multi-storey facilities, retail and leisure car parks, hospital car parks, residential estates, and private business premises.',
        },
        {
          question: 'Can you manage access control and barriers?',
          answer: 'Yes. Our guards can operate barrier systems, verify parking permits, issue visitor passes, and manage entry and exit flow during peak times.',
        },
        {
          question: 'Do you offer overnight car park security?',
          answer: 'Absolutely. We provide flexible cover including day shifts, night shifts, and full 24/7 staffing depending on your requirements and the risk profile of your site.',
        },
        {
          question: 'What happens if there is an incident in the car park?',
          answer: 'Our guards are trained to handle incidents calmly and professionally. They will assess the situation, assist any persons involved, log the incident in detail, and escalate to police or emergency services where necessary.',
        },
        {
          question: 'Can you also monitor CCTV as part of the service?',
          answer: 'Yes. Where CCTV systems are installed, our guards can monitor live feeds as part of their role, providing an additional layer of surveillance alongside their physical patrols.',
        },
      ]}
      relatedServices={[
        { name: 'Mobile Patrols', href: '/services/mobile-patrols' },
        { name: 'Corporate Security', href: '/services/corporate-security' },
        { name: 'Traffic Marshals', href: '/services/traffic-marshals' },
      ]}
      heroImage="/images/retail-security-services.webp"
    />
  );
}
