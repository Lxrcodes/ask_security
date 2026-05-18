import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Mobile Patrol Security Services London | ASK Security',
  description: 'Professional mobile patrol security services in London & South East. SIA-licensed guards conducting regular property checks. Deter crime with visible security presence.',
};

export default function MobilePatrolsPage() {
  return (
    <ServicePageTemplate
      title="Mobile Patrols"
      heroDescription="Regular mobile security patrols to deter crime, detect issues early, and provide visible security presence across your properties in Hertfordshire, Bedfordshire, North London, and Central London."
      description="Our mobile patrol service provides cost-effective security coverage for single or multiple sites. SIA-licensed security officers conduct regular patrols in marked vehicles, checking your premises at scheduled or random intervals. This visible security presence acts as a powerful deterrent while ensuring any issues are identified and addressed promptly. Mobile patrols are ideal for businesses that need flexible security coverage without the cost of static guards."
      benefits={[
        'Cost-effective alternative to static guards',
        'Flexible patrol schedules to suit your needs',
        'Marked patrol vehicles for maximum deterrent effect',
        'GPS-tracked patrols with detailed reporting',
        'External and internal patrol checks available',
        'Ideal for multiple site coverage',
      ]}
      whenYouNeed={[
        'You manage multiple sites requiring regular security checks',
        'Static guards are not cost-effective for your security needs',
        'You need a visible security deterrent outside business hours',
        'Your insurance requires documented security patrols',
      ]}
      approach={[
        'We design patrol routes and schedules based on your specific requirements and risk assessment. Whether you need hourly checks or random patrols throughout the night, we create a pattern that maximizes security effectiveness.',
        'Our patrol officers are equipped with mobile technology to log each visit, recording arrival times, observations, and any actions taken. This data is available to you via detailed reports and our client portal.',
        'During each patrol, officers conduct thorough external checks of your premises, looking for signs of attempted break-ins, vandalism, or other security concerns. Internal patrols can be arranged if key access is provided.',
        'All patrols are GPS-tracked, providing verifiable proof of service and ensuring complete accountability. You can request reports showing exact patrol routes and timings.',
      ]}
      faqs={[
        {
          question: 'How often will my property be patrolled?',
          answer: 'Patrol frequency is entirely customizable. Clients typically choose between 1-4 patrols per night, but we can arrange more frequent visits if required. We can also vary patrol times to avoid predictable patterns.',
        },
        {
          question: 'What do patrol officers check during each visit?',
          answer: 'Officers check all external access points, windows, and perimeter fencing. They look for signs of attempted entry, damage, or suspicious activity. If you provide key access, internal checks can also be conducted.',
        },
        {
          question: 'Can you patrol multiple sites for my business?',
          answer: 'Yes, mobile patrols are ideal for businesses with multiple locations. We can create efficient patrol routes covering all your sites, providing cost-effective security across your entire portfolio.',
        },
        {
          question: 'Will I receive reports after each patrol?',
          answer: 'Yes, you receive detailed reports after each patrol visit, including arrival time, observations, and any actions taken. Reports can be delivered daily, weekly, or monthly according to your preference.',
        },
        {
          question: 'What happens if an officer finds a problem during patrol?',
          answer: 'Officers are trained to assess and respond to various situations. They will secure the area if safe to do so, contact emergency services if required, and immediately notify your designated contact person.',
        },
      ]}
      relatedServices={[
        { name: 'Key Holding & Alarm Response', href: '/services/key-holding-alarm-response' },
        { name: 'Vacant Property Security', href: '/services/vacant-property-security' },
        { name: 'Construction Site Security', href: '/services/construction-site-security' },
      ]}
    />
  );
}
