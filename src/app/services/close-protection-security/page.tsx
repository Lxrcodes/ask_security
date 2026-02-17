import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Close Protection Security London | Bodyguard Services',
  description: 'Professional close protection & bodyguard services in London. SIA-licensed CPOs for executives, celebrities & high-net-worth individuals. Discreet personal protection.',
};

export default function CloseProtectionSecurityPage() {
  return (
    <ServicePageTemplate
      title="Close Protection Security"
      heroDescription="Professional close protection and bodyguard services for executives, celebrities, high-net-worth individuals, and anyone requiring personal security across London and internationally."
      description="Our close protection service provides discreet, professional personal security for individuals who face elevated security risks. Our close protection officers (CPOs) are highly trained specialists, many with backgrounds in military special forces, police protection units, or government security services. They provide comprehensive protection including threat assessment, secure transportation, residence security, and personal accompaniment, ensuring client safety while maintaining privacy and minimizing disruption to daily life."
      benefits={[
        'Highly trained close protection specialists',
        'Backgrounds in military, police, and specialist security',
        'Comprehensive threat assessment and planning',
        'Secure transportation arrangements',
        'Discreet, professional appearance',
        'UK and international protection available',
      ]}
      whenYouNeed={[
        'You or your family face specific security threats',
        'Your profile requires ongoing personal protection',
        'You need protection for high-risk travel or events',
        'Business or political activities create security concerns',
      ]}
      approach={[
        'Close protection begins with a comprehensive threat and risk assessment. We analyze potential threats, review your routine and lifestyle, and develop a security strategy that provides maximum protection with minimum disruption.',
        'Our CPOs are carefully selected based on experience, skills, and suitability for each assignment. We match officers to clients based on requirements, ensuring the right fit for your specific situation.',
        'Protection may include advance reconnaissance of venues, secure transportation, residential security, and personal accompaniment. Our officers maintain constant situational awareness while remaining discreet and professional.',
        'We adapt protection levels to match threat assessments and client requirements. Whether you need a single CPO for everyday activities or a full protection team for high-risk situations, we scale our service accordingly.',
      ]}
      pricingFrom="From £350 per day"
      faqs={[
        {
          question: 'What qualifications do your close protection officers have?',
          answer: 'All CPOs hold valid SIA Close Protection licenses and have completed advanced CP training. Many have backgrounds in military special forces, police protection units, or government security agencies, with extensive operational experience.',
        },
        {
          question: 'Can you provide protection for international travel?',
          answer: 'Yes, we provide international close protection services. Our CPOs are experienced in operating overseas and can coordinate with local security resources to ensure seamless protection during international travel.',
        },
        {
          question: 'How discreet is close protection?',
          answer: 'We prioritize discretion. Our CPOs dress appropriately for each environment, maintain professional demeanor, and work to protect without attracting unnecessary attention. Protection can be visible or covert depending on your preference.',
        },
        {
          question: 'Do you provide protection for families?',
          answer: 'Yes, we offer family protection services including school runs, family events, and residential security. We understand the sensitivity of protecting children and family members and have officers experienced in family CP.',
        },
        {
          question: 'What does close protection typically include?',
          answer: 'Services typically include threat assessment, advance planning, secure transportation, personal accompaniment, venue reconnaissance, and coordination with other security resources. Packages are tailored to individual requirements.',
        },
      ]}
      relatedServices={[
        { name: 'Concierge Security', href: '/services/concierge-security' },
        { name: 'Corporate Security', href: '/services/corporate-security' },
        { name: 'Event Security', href: '/services/event-security' },
      ]}
    />
  );
}
