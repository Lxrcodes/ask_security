import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Key Holding & Alarm Response London | 24/7 Security',
  description: 'Professional key holding & alarm response services in London. SIA-licensed security guards provide 24/7 property protection. BS7984 compliant. Get a quote today.',
};

export default function KeyHoldingAlarmResponsePage() {
  return (
    <ServicePageTemplate
      title="Key Holding & Alarm Response"
      heroDescription="Professional 24/7 key holding and rapid alarm response services for commercial and residential properties across Hertfordshire, Bedfordshire, North London, and Central London."
      description="Our key holding and alarm response service provides peace of mind for property owners and managers. When your alarm is triggered, our SIA-licensed security guards respond immediately, investigating the cause and taking appropriate action. We hold your keys securely, eliminating the need for you or your staff to respond to out-of-hours incidents. Our service is fully compliant with BS7984, the British Standard for key holding and response services."
      benefits={[
        'BS7984 compliant key holding service',
        'Rapid response times across London',
        '24/7/365 monitoring and response',
        'SIA-licensed and DBS-checked guards',
        'Detailed incident reporting',
        'Secure key storage facilities',
      ]}
      whenYouNeed={[
        'You manage commercial properties and need out-of-hours alarm response',
        'Your business requires secure key holding by a third party',
        'You want to avoid staff responding to late-night alarm activations',
        'Insurance requirements mandate professional key holding services',
      ]}
      approach={[
        'Our key holding service begins with a comprehensive assessment of your property and security systems. We document all access points, alarm systems, and emergency procedures to ensure our guards can respond effectively to any situation.',
        'Keys are stored securely at our monitoring centre, with strict protocols for access and usage. Each key is logged and tracked, ensuring complete accountability and security.',
        'When an alarm is triggered, our control room is notified immediately. A security guard is dispatched to your property within our guaranteed response time, typically within 20 minutes for London locations.',
        'Our guards conduct a thorough inspection of the property, checking for signs of intrusion, damage, or other issues. A detailed report is provided after each response, including photographs where appropriate.',
      ]}
      faqs={[
        {
          question: 'What is the typical response time for alarm activations?',
          answer: 'Our average response time is 15-20 minutes for central London locations and up to 30 minutes for greater London and surrounding areas. We guarantee response times in our service level agreement.',
        },
        {
          question: 'How are my keys stored and secured?',
          answer: 'Keys are stored in our secure, monitored facility with restricted access. Each key is assigned a unique code rather than being labeled with your address, providing an additional layer of security.',
        },
        {
          question: 'Is your key holding service BS7984 compliant?',
          answer: 'Yes, our key holding and alarm response service fully complies with BS7984, the British Standard for key holding services. This ensures you receive a service that meets the highest industry standards.',
        },
        {
          question: 'What happens when my alarm is triggered?',
          answer: 'Our control room receives the alert and immediately dispatches a security guard to your property. The guard conducts a full perimeter check and internal inspection if required, then provides a detailed incident report.',
        },
        {
          question: 'Do I need to be available when my alarm goes off?',
          answer: 'No, that is the benefit of our service. Our guards handle all aspects of the response and only contact you if there is a genuine incident requiring your attention or decision-making.',
        },
      ]}
      relatedServices={[
        { name: 'Mobile Patrols', href: '/services/mobile-patrols' },
        { name: 'Vacant Property Security', href: '/services/vacant-property-security' },
        { name: 'Corporate Security', href: '/services/corporate-security' },
      ]}
    />
  );
}
